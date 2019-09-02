// https://programmers.co.kr/learn/courses/30/lessons/42860?language=javascript

function solution(name) {
  var answer = 0;
  const now = [],
        last = [],
        rmd = [],
        len = name.length,
        zCode = 'Z'.charCodeAt() - 'A'.charCodeAt()

  Array.from(name).forEach((v, k) => {
    const code = v.charCodeAt() - 'A'.charCodeAt()
    now.push(0)
    last.push(code)
    rmd.push(code === 0)
  })
  let cnt = 0
  const f = (n, p, now, rmd) => {
    if (++cnt >= 100) return
    if (last[p] !== now[p]) {
      const tmp1 = last[p]
      const tmp2 = zCode - last[p] + 1
      const tmp = tmp1 < tmp2 ? tmp1 : tmp2
      now[p] = last[p]
      rmd[p] = true
      n += tmp
    }
    console.log(n, p, rmd.find(v => !v))
    if (rmd.find(v => !v) === undefined) {
      console.log(n, now, last, rmd)
    } else {
      f(n+1, (p + 1) % len, [...now], [...rmd])
      f(n+1, (p === 0 ? len : p) - 1 , [...now], [...rmd])
    }
  }
  f(0, 0, [...now], [...rmd])
  return answer;
}

console.log(solution("JEROEN"), 56)
//console.log(solution("JAN"), 23)