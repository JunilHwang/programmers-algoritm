// https://programmers.co.kr/learn/courses/30/lessons/42842
function solution (b, r) {
  let s = b+r, n = ~~Math.sqrt(s), w = n, h = n
  while (w >= h && w * h !== s) w*h < s ? w++ : h--
  //console.log(w,h)
  return [w, h]
}

const f = (w, h) => {
  const bChk = w * 2 + h * 2 - 4
  const rChk = w * h - b
  return bChk === b && rChk === r
}

//console.log(solution(10,2), [4, 3])
//console.log(solution(8,1), [3, 3])
//console.log(solution(24,24), [8, 6])
const w = 6, h = 4
const b = w*2 + h*2 - 4
const r = w*h - b
console.log(solution(b, r), [w, h])