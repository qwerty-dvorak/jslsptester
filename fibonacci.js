import { factorial } from "./factorial.js";

export function fibonacci(n) {
    function fibRecursive(x) {
        let res = x <= 1 ? x : fibRecursive(x - 1) + fibRecursive(x - 2);
        return res;
    }
    
    let fibIterative = 0;
    let prev = 0;
    let current = 1;
    for (let i = 2; i <= n; i++) {
        fibIterative = prev + current;
        prev = current;
        current = fibIterative;
    }

    return { recursive: fibRecursive(n), iterative: fibIterative, fact: factorial(n) };
}

