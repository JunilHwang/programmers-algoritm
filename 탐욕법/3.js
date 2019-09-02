// https://programmers.co.kr/learn/courses/30/lessons/42883?language=javascript

function solution (number, k) {
  const nums = Array.from(number).map(v => v*1)
  let n = 0, i = 0
  while (n < k) {
    if (nums[i] === nums[i + 1]) { i++; continue; }
    if (nums[i] > nums[i + 1]) {
      const n1 = `${nums[i]}${nums[i+1]}`*1
      const n2 = `${nums[i]}${nums[i+2]}`*1
      nums.splice(n1 < n2 ? i+1 : i+2, 1)
    } else nums.splice(0, 1)
    n++
  }
  return nums.join('')
}

console.log(solution("1924", 2), "94")
console.log(solution("1231234", 3), "3234")
console.log(solution("4177252841", 4), "775841")
