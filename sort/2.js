// https://programmers.co.kr/learn/courses/30/lessons/42746?language=javascript
function solution(numbers) {
  return numbers.sort((a, b) =>  `${a}${b}` < `${b}${a}` ? 1 : -1).join('');
}

console.log(solution([6, 10, 2]), 6210)
console.log(solution([3, 30, 34, 5, 9]), 9534330)