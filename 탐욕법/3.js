// https://programmers.co.kr/learn/courses/30/lessons/42883?language=javascript

function solution(number, k) {
  const numbers = Array.from(number)
  let max = 0
  const f = (arr, n, num = arr.join('') * 1) => {
    if (num < max) return
    if (n === k && num > max) {
      max = num
      return
    }
    arr.forEach((v, k) => {
      const temp = [...arr]
      temp.splice(k, 1)
      f(temp, n + 1)
    })
  }
  f([...numbers], 0)
  return max + '';
}

console.log(solution("1924", 2), "94")
console.log(solution("1231234", 3), "3234")
console.log(solution("4177252841", 4), "775841")