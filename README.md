# formula.math.js
数学における公式をそのまま使うだけのライブラリです。

## Usage

- `script.js`を読み込んでください
    - HTMLの場合 : `<script src="https://cdn.jsdelivr.net/gh/AXT-AyaKoto/formula.math.js/script.js"></script>`
    - モジュールの場合 : `import "https://cdn.jsdelivr.net/gh/AXT-AyaKoto/formula.math.js/script.js";`
- `globalThis.formula`から使用します
    - `globalThis.formula.quadEquation(a, b, c)` : 2次方程式 `ax^2 + bx + c = 0` の実数解の近似値を求めます
    - `globalThis.formula.cubicEquation(a, b, c, d)` : 3次方程式 `ax^3 + bx^2 + cx + d = 0` の実数解の近似値を求めます
    - `globalThis.formula.pythagoreanTheorem(a, b)` : 三平方の定理 `a^2 + b^2 = c^2` の `c` を求めます

## License

copyright (c) 2024- Ayasaka-Koto, All rights reserved.

私に不利益が生じたり、公序良俗に反したりしない限り、基本的には自由に使用していただいて構いません。  
私が使用を許可したくない場合はその旨ご連絡いたします。その際は速やかに使用を中止していただきますようお願いいたします。  
使った際は、私の名前(綾坂こと)をどこかに記載していただけると嬉しいです。
