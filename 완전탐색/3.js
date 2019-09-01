// https://programmers.co.kr/learn/courses/30/lessons/42841

function solution(baseball) {
  const arr = baseball.filter(([x, y, z]) => {
      const chk1 = y + z > 0
      const chk2 = `${x}`.indexOf('0') === -1
      return chk1 && chk2
  })
  const len = arr.length
  const stack = []
  let answer = 0
  const f = ([a1, a2, a3], b, k) => {
    if (k >= len) {
      (a1.length ? a1 : b).forEach(v1 => {          
        (a2.length ? a2 : b).forEach(v2 => {
          (a3.length ? a3 : b).forEach(v3 => {
            const nums = [`${v1}${v2}${v3}`*1]
            const blen = b.length
            if (blen >= 1) {
              b.forEach(b1 => nums.push(`${b1}${v2}${v3}`*1, `${v1}${b1}${v3}`*1, `${v1}${v2}${b1}`*1))
            }
            if (blen >= 2) {
              b.forEach(b1 => b.forEach(b2 => {
                if (b1 !== b2) nums.push(`${b1}${b2}${v3}`*1, `${b1}${v2}${b2}`*1, `${v1}${b1}${b2}`*1)
              }))
            }
            if (blen === 3) {
              b.forEach(b1 => b.forEach(b2 => b.forEach(b3 => {
                if (b1 !== b2 && b1 !== b3 && b2 === b3) nums.push(`${b1}${b2}${b3}`*1)
              })))
            }
            nums.forEach(n => {
              if (stack.indexOf(n) !== -1) return
              f2(n)
              stack.push(n)
            })
          })
        })
      })
      return
    }
    const [x, y, z] = arr[k]
    const xArr = Array.from(x+'')
    const bArr = []
    switch (z) {
      case 0 : bArr.push([...b]); break;
      case 1 : bArr.push([...b, xArr[0]], [...b, xArr[1]], [...b, xArr[2]]); break;
      case 2 : bArr.push([...b, xArr[0], xArr[1]], [...b, xArr[0], xArr[2]], [...b, xArr[1], xArr[2]]); break;
      case 3 : bArr.push([...b, xArr[0], xArr[1], xArr[2]]); break;
    }
    bArr.forEach(b => {
      switch (y) {
        case 0 :
          f([[...a1], [...a2], [...a3]], b, k+1)
        break;
        case 1 :
          f([[...a1, xArr[0]], [...a2], [...a3]], b, k+1)
          f([[...a1], [...a2, xArr[1]], [...a3]], b, k+1)
          f([[...a1], [...a2], [...a3, xArr[2]]], b, k+1)
        break;
        case 2 :
          f([[...a1, xArr[0]], [...a2, xArr[1]], [...a3]], b, k+1)
          f([[...a1, xArr[0]], [...a2], [...a3, xArr[2]]], b, k+1)
          f([[...a1], [...a2, xArr[1]], [...a3, xArr[2]]], b, k+1)
        break;
        case 3 :
          f([[...a1, xArr[0]], [...a2, xArr[1]], [...a3, xArr[2]]], b, k+1);
        break;
      }
    })
  }
  const f2 = n => {
    const nArr = Array.from(n+'')
    for (const [x, y, z] of arr) {
      const xArr = Array.from(x+'')
      let yChk = 0, zChk = 0
      for (let i = 0; i < 3; i++) {
        if (xArr[i] === nArr[i]) yChk++;
      }
      if (yChk !== y) return
      for (let i = 0; i < 3; i++) {
        if (xArr.indexOf(nArr[i]) !== -1) zChk++;
      }
      if (zChk < z) return
    }
    //console.log(n)
    answer++
  }
  f([[], [], []], [], 0)
  return answer
}

console.log(solution([[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]]), 2)