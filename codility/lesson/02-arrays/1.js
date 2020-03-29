function solution (A, K) {
  if (!A || A.length === 0) return []
  for (let i = 0; i < K; i++) {
    A.unshift(A.pop())
  }
  return A
}

console.log(solution([3, 8, 9, 7, 6], 3).toString() === [9, 7, 6, 3, 8].toString())
