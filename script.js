globalThis.formula = {
    /**
     * 2次方程式 `ax^2 + bx + c = 0` の実数解の近似値を求めます
     * TeX : $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$
     * @param {number} a 2次の係数
     * @param {number} b 1次の係数
     * @param {number} c 定数項
     * @returns {number[]} 実数解の近似値の配列
     */
    quadEquation: (a, b, c) => {
        const d = b ** 2 - 4 * a * c;
        if (d < 0) {
            return [];
        } else if (d === 0) {
            return [-b / (2 * a)];
        } else {
            return [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
        }
    },
    /**
     * 3次方程式 `ax^3 + bx^2 + cx + d = 0` の実数解の近似値を求めます
     * TeX : $x_1=-\frac{b}{3a}+\sqrt[3]{\frac{-2b^3+9abc-27a^2d}{54a^3}+\frac{\sqrt{3(27a^2d^2-18abcd+4b^3d+4ac^3-b^2c^2)}}{18a^2}}+\sqrt[3]{\frac{-2b^3+9abc-27a^2d}{54a^3}-\frac{\sqrt{3(27a^2d^2-18abcd+4b^3d+4ac^3-b^2c^2)}}{18a^2}}$
     * @param {number} a 3次の係数
     * @param {number} b 2次の係数
     * @param {number} c 1次の係数
     * @param {number} d 定数項
     * @returns {number} 実数解の一つの近似値
     */
    cubicEquation: (a, b, c, d) => -b / (3 * a) + Math.cbrt((-2 * b ** 3 + 9 * a * b * c - 27 * a ** 2 * d) / (54 * a ** 3) + Math.sqrt(3 * (27 * a ** 2 * d ** 2 - 18 * a * b * c * d + 4 * b ** 3 * d + 4 * a * c ** 3 - b ** 2 * c ** 2)) / (18 * a ** 2)) + Math.cbrt((-2 * b ** 3 + 9 * a * b * c - 27 * a ** 2 * d) / (54 * a ** 3) - Math.sqrt(3 * (27 * a ** 2 * d ** 2 - 18 * a * b * c * d + 4 * b ** 3 * d + 4 * a * c ** 3 - b ** 2 * c ** 2)) / (18 * a ** 2)),
    /**
     * 三平方の定理 `a^2 + b^2 = c^2` の `c` を求めます
     * TeX : $c = \sqrt{a^2 + b^2}$
     * @param {number} a 1辺の長さ
     * @param {number} b 1辺の長さ
     * @returns {number} 斜辺の長さ
     */
    pythagoreanTheorem: (a, b) => Math.sqrt(a ** 2 + b ** 2),
};
