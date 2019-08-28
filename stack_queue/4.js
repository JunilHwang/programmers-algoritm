// https://programmers.co.kr/learn/courses/30/lessons/42583?language=javascript
function solution(bridge_length, w, ws) {
    let num = 0;
    let sum = 0
    const queue = []
    const timer = []
    while (ws.length) {
      num += 1
      if (timer.length && timer[0] === num) {
        timer.shift()
        sum -= queue.shift()
      }
      if (sum + ws[0] <= w) {
        const target = ws.shift()
        queue.push(target)
        timer.push(num + bridge_length)
        sum += target
      }
    }
    return timer.pop();
}

console.log(solution(2, 10, [7,4,5,6]))
console.log(solution(100, 100, [10]))
console.log(solution(100, 100, [10,10,10,10,10,10,10,10,10,10]))