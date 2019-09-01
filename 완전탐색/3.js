// https://programmers.co.kr/learn/courses/30/lessons/42841

function solution(baseball) {
  let answer = 0
  const nums = [1,2,3,4,5,6,7,8,9]
  const chk = nArr => {
    for (const [x, y, z] of baseball) {
      const xArr = Array.from(x+'').map(v => v*1)
      let yChk = 0, zChk = 0
      for (let i = 0; i < 3; i++) if (xArr[i] === nArr[i]) yChk++;
      if (yChk !== y) return
      for (let i = 0; i < 3; i++) if (xArr.indexOf(nArr[i]) !== -1) zChk++;
      if (zChk < z) return
    }
    answer++
  }
  const f = p => {
    if (p.length === 3) {
      chk(p)
      return
    }
    nums.forEach(v => { if (p.indexOf(v) === -1) f([...p, v]) })
  }
  f([])
  return answer
}

console.log(solution([[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]]), 2)