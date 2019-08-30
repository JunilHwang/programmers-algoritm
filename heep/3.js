// https://programmers.co.kr/learn/courses/30/lessons/42627?language=javascript

function solution(jobs) {
  let t = 0, now = jobs.shift()
  const complete = [], q = []
  while (true) {
    t++
    now[1] -= 1
    if (jobs[0] && t === jobs[0][0]) {
      q.push(jobs.shift())
    }
    if (now[1] === 0) {
      complete.push(t - now[0])
      if (jobs.length + q.length === 0) break
      now = q.sort((a, b) => a[1] > b[1]).shift()
    }
  }
  return ~~(complete.reduce((x, y) => x + y) / 3)
}

console.log(solution([[0, 3], [1, 9], [2, 6]]))