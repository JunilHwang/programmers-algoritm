// 구명보트 : https://programmers.co.kr/learn/courses/30/lessons/42885?language=javascript
function solution(people, limit) {
  let cnt = 0, sum = 0
  const len = people.length
  const chk = people.map(v => 0)
  for (let i = 0; i < len; i++) {
    if(chk[i]) continue
    const n = people[i]
    const idx = people.findIndex((v, k) => !chk[k] && i != k && n+v === limit)
    if (idx !== -1) {
      chk[idx] = true, cnt += 1
      continue
    }
    let sum = n
    while (1) {
      let idx = people.findIndex((v, k) => !chk[k] && i != k && sum+v <= limit)
      if (idx === -1) break
      chk[idx] = true
      sum += people[idx]
    }
    cnt += 1
  }
  return cnt;
}

//console.log(solution([70, 50, 80, 50], 100), 	3)
//console.log(solution([70, 80, 50], 100), 	3)
console.log(solution([50, 40, 50, 60, 70, 10, 10, 10], 100), 3)