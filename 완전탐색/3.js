// https://programmers.co.kr/learn/courses/30/lessons/42841

function solution(baseball) {
  const arr = baseball.filter(([x, y, z]) => y + z > 0)
  const f = ([a1, a2, a3], b, stack) => {
    if (stack.length === arr.length) {
      if (a1[0] !== undefined && a2[0] !== undefined && a3[0] !== undefined) {
        console.log(a1, a2, a3, b)
      }
      return
    }
    const [x, y, z] = arr[stack.length]
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
          f([[...a1], [...a2], [...a3]], b, [...stack, x])
        break;
        case 1 :
          f([[...a1, xArr[0]], [...a2], [...a3]], b, [...stack, x])
          f([[...a1], [...a2, xArr[1]], [...a3]], b, [...stack, x])
          f([[...a1], [...a2], [...a3, xArr[2]]], b, [...stack, x])
        break;
        case 2 :
          f([[...a1, xArr[0]], [...a2, xArr[1]], [...a3]], b, [...stack, x])
          f([[...a1, xArr[0]], [...a2], [...a3, xArr[2]]], b, [...stack, x])
          f([[...a1], [...a2, xArr[1]], [...a3, xArr[2]]], b, [...stack, x])
        break;
        case 3 :
          f([[...a1, xArr[0]], [...a2, xArr[1]], [...a3, xArr[2]]], b, [...stack, x]);
        break;
      }
    })
  }
  f([[], [], []], [], [])
}

console.log(solution([[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]]), 2)