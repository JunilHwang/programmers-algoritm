// 구명보트 : https://programmers.co.kr/learn/courses/30/lessons/42885?language=javascript
function solution(people, limit) {
  const len = people.length
  let cnt = 1, sum = 0
  people.sort((a, b) => a - b)
  for (let i = 0; i < len; i++) {
    sum += people[i]
    if (sum > limit) {
      sum = people[i], cnt += 1
    }
  }
  return cnt;
}

console.log(solution([70, 50, 80, 50], 100), 	3)
console.log(solution([70, 80, 50], 100), 	3)