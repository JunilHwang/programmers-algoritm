// https://programmers.co.kr/learn/courses/30/lessons/42627?language=javascript

function solution(job) {
  let t = 0, now = null, next = null
  job.sort((a, b) => a[0] > b[0])
  let complete = 0, q = [], total = job.length
  while (true) {
    while (job.length && t === job[0][0]) {
      q.push(job.shift())
      q.sort((a, b) => a[1] > b[1])
    }
    if (now !== null) {
      now[1] -= 1
      if (now[1] === 0) {
        complete += t - now[0]
        now = null
        if (job.length + q.length === 0) break
      }
    }
    //console.log(t, now, q)
    if (q[0] && now === null && q[0][0] <= t) {
      now = q.shift()
    }
    t++
  }
  //console.log(complete)
  return ~~(complete / total)
}

console.log(solution([[0, 9], [0, 4], [0, 5], [0, 7], [0, 3]]))
console.log(solution([[15,34], [15,2]]))
console.log(solution([[0, 5], [1, 2], [5, 5]]))
console.log(solution([[24, 10], [18, 39], [34, 20], [37, 5], [47, 22], [20, 47], [15, 2], [15, 34], [35, 43], [26, 1]]))
console.log(solution([[0, 3], [1, 9], [2, 6]]))
console.log(solution([[10, 6], [12, 6], [14, 4]]))