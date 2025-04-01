export function factorial(n) {
    function compute(x) {
        let res = x <= 1 ? 1 : x * compute(x - 1);
        return res;
    }
    return compute(n);
}
