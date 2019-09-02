// https://programmers.co.kr/learn/courses/30/lessons/42860?language=javascript

function solution(name) {
  const now = [], last = [], rmd = [], len = name.length
  const zCode = 'Z'.charCodeAt() - 'A'.charCodeAt()
  Array.from(name).forEach((v, k) => {
    const code = v.charCodeAt() - 'A'.charCodeAt()
    now.push(0), last.push(code), rmd.push(!code)
  })
  let min = Infinity
  const f = (n, p, nowTmp, rmdTmp, tmp1 = last[p], tmp2 = zCode - tmp1 + 1) => {
    if ( n > min ) return
    if (tmp1 !== nowTmp[p]) {
      const tmp = tmp1 < tmp2 ? tmp1 : tmp2
      nowTmp[p] = tmp1, rmdTmp[p] = true, n += tmp
    }
    if (rmdTmp.find(v => !v) === undefined) { min = n; return; }
    for (let i = 1, j = p + 1; i < len; i++, j++) {
      if (j >= len) j = 0
      if (!rmdTmp[j]) {f(n + i, j, [...nowTmp], [...rmdTmp]); break;}
    }
    for (let i = 1, j = p - 1; i < len; i++, j--) {
      if (j < 0) j = len - 1
      if (!rmdTmp[j]) { f(n + i, j, [...nowTmp], [...rmdTmp]); break; }
    }
  }
  f(0, 0, [...now], [...rmd])
  return min;
}

console.log(solution("JEROEN"), 56)
console.log(solution("JAN"), 23)
console.log(solution("AAABAAA"), 0)