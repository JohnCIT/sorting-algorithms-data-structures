

/**
 * Multiply row by column.
 * 
 * @param {*} m1 
 * @param {*} m2 
 */
export const matrixMultiply3x3 = (m1, m2) =>
{
    let [[a, b, c],
        [d, e, f],
        [g, h, i]] = m1;

    let [[j, k, l],
        [m, n, o],
        [p, q, r]] = m2;

    return [[a * j + b * m + c * p, a * k + b * n + c * q, a * l + b * o + c * r],
        [d * j + e * m + f * p, d * k + e * n + f * q, d * l + e * o + f * r],
        [g * j + h * m + i * p, g * k + h * n + i * q, g * l + h * o + i * r]];
};


