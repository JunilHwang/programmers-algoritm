// https://programmers.co.kr/learn/courses/30/lessons/42883?language=javascript

function solution (nums, k) {
  const last = nums.length, len = last - k
  let left = 0, n = nums.substr(left, len), max = n, maxLeft = 0, num = ""
  for (let i = 0; i < len; i++) {
    max = n = nums.substr(left, len - i)
    do {
      if (max[0] < n[0]) max = n, maxLeft = left
      n = nums.substr(++left, len - i)
    } while (n.length === len - i)
    num += max[0]
    left = ++maxLeft
  }
  return num
}

console.log(solution("1924", 2), "94")
console.log(solution("1231234", 3), "3234")
console.log(solution("4177252841", 4), "775841")