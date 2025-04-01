import { create, all } from "mathjs";
const math = create(all);

export function gcd(a, b) {
    function compute(x, y) {
        let res = y === 0 ? x : compute(y, math.mod(x, y));
        return res;
    }
    return compute(a, b);
}
