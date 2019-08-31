// https://programmers.co.kr/learn/courses/30/lessons/42628
function solution(operations) {
  const len = operations.length
  const answer = [], arr = [];
  let i = 0, min = 0, max = 0, minKey = [], maxKey = [], cnt = 0, arrLast = 0
  while (i < len) {
    let [command, n] = operations[i++].split(' ')
    n *= 1
    if (command === 'I') {
      //console.log('insert')
      arr.push(n)
      if (cnt === 0) min = max = n
      if (n <= min) {
        minKey.push(arrLast)
        min = n
      }
      if (n >= max) {
        maxKey.push(arrLast)
        max = n
      }
      arrLast++, cnt++
    } else {
      //console.log('delete ', n)
      if (cnt > 0) {
        let key = 0
        const [targetKey, target] = n === 1 ? [maxKey, max] : [minKey, min]
        while (true) {
          key = targetKey.pop()
          if (arr[key] === target) {
            const next = targetKey.pop()
            if (next === undefined) {
              min = max = 0
            } else {
              if (n === 1) {
                max = arr[next]
              } else {
                min = arr[next]
              }
              targetKey.push(next)
            }
            break
          }
        }
        arr[key] = undefined
        cnt -= 1
      }
    }
    //console.log(n, arr, min, max, minKey, maxKey, cnt)
  }
  return cnt === 0 ? [0, 0] : [max, min];
}

console.log(solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"]), [0, 0])
console.log(solution(["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]), [333, -45])
// console.log(solution(["I 16", "D 1"]), [0,0])
// console.log(solution(["I 7", "I 5", "I -5", "D -1"]), [7,5])