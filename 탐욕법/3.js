// https://programmers.co.kr/learn/courses/30/lessons/42883?language=javascript

function solution (nums, k) {
  const last = nums.length, len = last - k
  let left = 0, maxLeft = 0, num = ""
  for (let i = 0; i < len; i++) {
    let max = nums[left]
    while (left <= last - len + i) {
      if (max < nums[left]) max = nums[left], maxLeft = left
      left++
    }
    num += max, left = ++maxLeft
  }
  return num
}

console.log(solution("1924", 2), "94")
console.log(solution("1231234", 3), "3234")
console.log(solution("4177252841", 4), "775841")