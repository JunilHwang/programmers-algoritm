function solution (A, K) {
  if (!A || A.length === 0) return []
  const len = A.length
  const arr = A.splice(len - K)
  return [ ...arr, ...A ]
}

console.log(solution([3, 8, 9, 7, 6], 3).toString() === [9, 7, 6, 3, 8].toString())
