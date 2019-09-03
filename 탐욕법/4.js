// 구명보트 : https://programmers.co.kr/learn/courses/30/lessons/42885?language=javascript
function solution(people, limit) {
  // 0. people을 오름차순으로 정렬한다.
  // 1. 현재 구간의 최소값 배열을 스택에 담는다.
  // 2. 스택의 각 조합과 최대값 구간을 비교하여 같을 경우 cnt += 1
  // 3. 스택 요소의 합이 limit보다 클 경우, cnt += 1
  // 4. 사용된 요소들에 대한 마킹 배열을 만들어 관리한다.
  let cnt = 0, stack = []
  const len = people.length, chk = people.map(v => 0)
  const compare = () => {
    let max = 0, maxKey = [], none = []
    const f = (a, s, start) => {
      if (s > limit) return
      if (s > max) {max = s, maxKey = a}
      for (let i = start+1; stack[i] !== undefined; i++) {
        const k = stack[i]
        f([...a, k], s + people[k], i);
      }
    }
    stack.forEach((k, start) => f([k], people[k], start))
    stack = stack.filter(v => maxKey.indexOf(v) === -1)
    cnt+=1
  }
  for (let i = 0; i < len; i++) {
    if (chk[i]) continue
    const n = limit - people[i]
    const idx = people.findIndex((v, k) => !chk[k] && k != i && v === n)
    if (idx !== -1) chk[i] = chk[idx] = 1, cnt += 1
    else stack.push(i)
  }
  while (stack[0] !== undefined) compare()
  return cnt;
}
//console.log(solution([70, 50, 80, 50], 100), 	3)
//console.log(solution([70, 80, 50], 100), 	3)
console.log(solution([50, 40, 50, 60, 70, 40, 40, 40], 160), 3)