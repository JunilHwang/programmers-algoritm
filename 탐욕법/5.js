// 섬연결 : https://programmers.co.kr/learn/courses/30/lessons/42861?language=javascript
function solution(n, costs) {
  const node = []
  costs.forEach(([x, y]) => {
    if (node.indexOf(x) === -1) node.push(x)
    if (node.indexOf(y) === -1) node.push(y)
  })
  const path = node.map(x => node.map(y => x===y ? 0 : -1))
  costs.forEach(([x, y, t]) => {
    path[x][y] = t
    path[y][x] = t
  })  
  let min = Infinity
  const f = (p, n, len) => {
    if (n > min) return
    if (len === node.length) {
      if (n < min) min = n
      return
    }
    node.forEach(to => {
      if (p.indexOf(to) !== -1) return
      const from = p[len - 1]
      const add = path[from] === undefined ? 0 : path[from][to]
      if (add === -1) return
      f([...p, to], n + add, len + 1)
    })
  }
  f([], 0, 0)
  return min;
}

console.log(solution(4, [[0, 1, 1], [0, 2, 2], [1, 2, 5], [1, 3, 1], [2, 3, 8]]), 4)