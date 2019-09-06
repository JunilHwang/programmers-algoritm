// 섬연결 : https://programmers.co.kr/learn/courses/30/lessons/42861?language=javascript
function solution(n, costs) {
  costs.sort((a, b) => a[0] - b[0])
  const node = [...Array(n).keys()]
  const min = node.map(v => [])
  const path = node.map(x => node.map(y => x === y ? 0 : -1))
  const sum = arr => arr[1] === undefined ? arr[0] : arr.reduce((x, y) => x + y)
  costs.forEach(([x, y, t]) => { path[x][y] = path[y][x] = t })
  const f = (k, t, count) => {
    if (count >= n || sum(min[k]) < sum(t)) return
    min[k] = t
    path[k].forEach((v, k2) => {
      if (v < 1 || k2 === k || k2 === 0) return
      f(k2, [...t, v], count + 1)
    })
  }
  path[0].forEach((v, k) => {
    if (v < 1) return
    f(k, [v], 0)
  })
  let a = 0
  for (let i = 1; i < n; i++) a += min[i].pop()
  return a
}

console.log(solution(4, [[0, 1, 1], [0, 2, 2], [1, 2, 5], [1, 3, 1], [2, 3, 8]]), 4)