import math from 'mathjs';
import {matrixMultiply3x3} from './MatrixMath';


export const identityMatrix = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
];


export const translationMatrixXY = (x, y) => 
{
    return [
        [1,  0,  x],
        [0,  1,  y],
        [0,  0,  1]
    ]
}




class PositionVector {
    
    constructor(matrix){
        this.matrix = matrix;
    }

    
    getXY()
    {
        return {x: this.matrix[0][2], y: this.matrix[1][2]}
    }

    
    translate(x, y)
    {
        let translatedMatrix = matrixMultiply3x3(this.matrix, translationMatrixXY(x,y));
        return new PositionVector(translatedMatrix);
    }

    rotateAroundPoint(deg, x, y)
    {
        let radians = this.degreeToRadians(deg);

        let rotationMatrix = [
            [Math.cos(radians), -Math.sin(radians), 0],
            [Math.sin(radians), Math.cos(radians), 0],
            [0,0,1]
        ]

        return this.matrixMultiply3x3(this.translate(-x, -y).matrix, rotationMatrix).translate(x, y);
    }

    matrixMultiply3x3(m1, m2)
    {
        return new PositionVector(matrixMultiply3x3(m1, m2));
    }

    degreeToRadians(deg)
    {
        let pi = Math.PI;
        return deg * (pi/180);
    }

    rotate(deg)
    {
        let radians = this.degreeToRadians(deg);
        
        let rotationMatrix = [
            [Math.cos(radians), -Math.sin(radians), 0],
            [Math.sin(radians), Math.cos(radians), 0],
            [0,0,1]
        ]

        let rotatedMatrix = matrixMultiply3x3(this.matrix, rotationMatrix);

        return new PositionVector(rotatedMatrix);
    }

    transform()
    {

    }

    scaleX(x)
    {
        let scaleMatrix = [
            [x,0,0],
            [0,1,0],
            [0,0,1]
        ]

        let scaledMatrix = matrixMultiply3x3(this.matrix, scaleMatrix);
        this.matrix = scaledMatrix;

        return scaledMatrix;
    }

    scaleY(y)
    {
        let scaleMatrix = [
            [1,0,0],
            [0,y,0],
            [0,0,1]
        ]

        let scaledMatrix = matrixMultiply3x3(this.matrix, scaleMatrix);
        this.matrix = scaledMatrix;

        return scaledMatrix;
    }

    scaleAll(a)
    {
        let scaleMatrix = [
            [a,0,0],
            [0,a,0],
            [0,0,1]
        ]
        
        let scaledMatrix = matrixMultiply3x3(this.matrix, scaleMatrix);
        this.matrix = scaledMatrix;

        return scaledMatrix;
    }

    skewX(x) 
    {
        let radians = this.degreeToRadians(x);

        let skewMatrix = [
            [1,Math.tan(radians),0],
            [0,1,0],
            [0,0,1]
        ]
        
        let skewedMatrix = matrixMultiply3x3(this.matrix, skewMatrix);
        this.matrix = skewedMatrix;

        return skewedMatrix;
    }

    skewY(y) 
    {
        let radians = this.degreeToRadians(y);

        let skewMatrix = [
            [1,0,0],
            [Math.tan(radians),1,0],
            [0,0,1]
        ]
         
        let skewedMatrix = matrixMultiply3x3(this.matrix, skewMatrix);
        this.matrix = skewedMatrix;

        return skewedMatrix;
    }

    skewXY(x, y) 
    {
        let radiansX = this.degreeToRadians(x);
        let radiansY = this.degreeToRadians(y);

        let skewMatrix = [
            [1,Math.tan(radiansX),0],
            [Math.tan(radiansY),1,0],
            [0,0,1]
        ]
         
        let skewedMatrix = matrixMultiply3x3(this.matrix, skewMatrix);
        this.matrix = skewedMatrix;

        return skewedMatrix;
    }


    toTransformString(separator = ',')
    {
        return 'matrix(' + this.matrix[0][0] + separator + this.matrix[1][0] + separator + this.matrix[0][1] + separator + this.matrix[1][1] + separator + this.matrix[0][2] + separator + this.matrix[1][2] + ')';
    }
}

export const positionVector = PositionVector
