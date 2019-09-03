// 구명보트 : https://programmers.co.kr/learn/courses/30/lessons/42885?language=javascript
function solution(people, limit) {
  const len = people.length
  let min = len
  const f = (stack, cnt, w, i) => {
    if (cnt > min) return
    if (i >= len) {
      if (cnt < min) min = cnt
      return
    }
    people.forEach((v, k) => {
      if (stack.indexOf(k) !== -1) return
      const tmp = w+v
      const next = [...stack, k]
      tmp <= limit ? f(next, cnt, tmp, i + 1) : f(next, cnt + 1, v, i + 1)
    })
  }
  f([], 1, 0, 0)
  return min;
}

console.log(solution([70, 50, 80, 50], 100), 	3)
console.log(solution([70, 80, 50], 100), 	3)