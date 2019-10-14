import math from 'mathjs';
import {matrixMultiply3x3} from './MatrixMath';




let identityMatrix = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
];



class PositionVector {
    
    constructor(xPos, yPos){
        this.xPos = xPos;
        this.yPos = yPos;
        this.matrix = identityMatrix;
        this.matrix[0][2] = this.xPos;
        this.matrix[1][2] = this.yPos;
    }

    setMatrix(m1)
    {
        this.matrix = m1;
    }

    setPoint(x, y)
    {
        this.matrix[0][2] = x;
        this.matrix[1][2] = y;
    }

    getFullMatrix()
    {
        return this.matrix;
    }
    
    translate(x, y)
    {
        let translationMatrix = [
            [1,  0,  x],
            [0,  1,  y],
            [0,  0,  1]
        ]
        
        // let translatedMatrix = math.multiply(this.getMatrix(), translationMatrix);
        let translatedMatrix = matrixMultiply3x3(this.getFullMatrix(), translationMatrix);
        this.matrix = translatedMatrix;

        return translatedMatrix;
    }

    rotateAroundPoint(deg, x, y)
    {
        let radians = this.degreeToRadians(deg);

        let rotationMatrix = [
            [Math.cos(radians), -Math.sin(radians), 0],
            [Math.sin(radians), Math.cos(radians), 0],
            [0,0,1]
        ]

        let moveMat = [
            [1, 0, -x],
            [0, 1, -y],
            [0, 0, 1]
        ];

        let moveBack = [
            [1, 0, x],
            [0, 1, y],
            [0, 0, 1]
        ];

        // Move back to origin
        let moveToPoint = matrixMultiply3x3(this.matrix, moveMat);
        
        // Rotate the matrix
        let rotatedMatrix = matrixMultiply3x3(moveToPoint, rotationMatrix);
        
        // Move back to where we want to be
        let moveBackTransform = matrixMultiply3x3(rotatedMatrix, moveBack);

        // Set the matrix
        this.matrix = moveBackTransform;

        return this.matrix;
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

        let rotatedMatrix = matrixMultiply3x3(this.getFullMatrix(), rotationMatrix);
        this.matrix = rotatedMatrix;

        return rotatedMatrix;
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

        let scaledMatrix = matrixMultiply3x3(this.getFullMatrix(), scaleMatrix);
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

        let scaledMatrix = matrixMultiply3x3(this.getFullMatrix(), scaleMatrix);
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
        
        let scaledMatrix = matrixMultiply3x3(this.getFullMatrix(), scaleMatrix);
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
        
        let skewedMatrix = matrixMultiply3x3(this.getFullMatrix(), skewMatrix);
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
         
        let skewedMatrix = matrixMultiply3x3(this.getFullMatrix(), skewMatrix);
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
         
        let skewedMatrix = matrixMultiply3x3(this.getFullMatrix(), skewMatrix);
        this.matrix = skewedMatrix;

        return skewedMatrix;
    }


    toTransformString(separator = ',')
    {
        return 'matrix(' + this.matrix[0][0] + separator + this.matrix[1][0] + separator + this.matrix[0][1] + separator + this.matrix[1][1] + separator + this.matrix[0][2] + separator + this.matrix[1][2] + ')';
    }
}

export const positionVector = PositionVector
