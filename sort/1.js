// https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
function solution(array, commands) {
  var answer = [];
  for (const [i, j, k] of commands) {
    answer.push(array.slice(i-1, j).sort((a, b) => a- b)[k-1])
  }
  return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]),[5, 6, 3])
//console.log(solution([1,1,1,1,3,2,2,2,2], [[]]),[])