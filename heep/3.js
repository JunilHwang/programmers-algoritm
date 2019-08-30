// https://programmers.co.kr/learn/courses/30/lessons/42627?language=javascript

function solution(job) {
  job.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
  let total = job.length, now = job.shift(), t = now[0]
  let complete = 0, q = []
  while (true) {
    while (job.length && t >= job[0][0]) {
      q.push(job.shift())
      q.sort((a, b) => a[1] - b[1])
    }
    if (q[0] && now === null && q[0][0] <= t) {
      now = q.shift()
    }
    if (now !== null) {
      t += now[1]
      complete += t - now[0]
      now = null
      if (job.length + q.length === 0) break
    } else t += 1
  }
  //console.log(complete)
  return ~~(complete / total)
}
//console.log(solution([[0, 3], [10, 10]]), 6)
console.log(solution([[0, 3], [1, 9], [2, 6], [4, 3]]), 9)
// console.log(solution([[24, 10], [18, 39], [34, 20], [37, 5], [47, 22], [20, 47], [15, 2], [15, 34], [35, 43], [26, 1]]), 74)
// console.log(solution([[0, 9], [0, 4], [0, 5], [0, 7], [0, 3]]), 13)
// console.log(solution([[15,34], [15,2]]), 19)
// console.log(solution([[0, 5], [1, 2], [5, 5]]), 6)
// console.log(solution([[0, 3], [1, 9], [2, 6]]), 9)
// console.log(solution([[10, 6], [12, 6], [14, 4]]), 8)