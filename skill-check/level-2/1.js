function solution(s) {
    const arr = Array.from(s)
    for (let i = 0, len = arr.length, k = 0; i < len; i++) {
        if (arr[k] === arr[k + 1]) {
            arr.splice(k, 2)
        } else if (arr[k - 1] === arr[k]) {
            arr.splice(k - 1, 2)
            k--
        } else {
            k++
        }
        console.log(k, arr)
        if (k === arr.length || arr.length === 0) break
    }
    return arr.length ? 0 : 1;
}

console.log(solution("baaabbaacddcab"))
console.log(solution("baabaa"))
console.log(solution("cdcd"))