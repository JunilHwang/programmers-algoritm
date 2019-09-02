// https://programmers.co.kr/learn/courses/30/lessons/42883?language=javascript

function solution (nums, k) {
  const last = nums.length, len = last - k
  let left = 0, n = nums.substr(left, len), max = n, maxLeft = 0
  do {
    if (max < n) {
      max = n
      maxLeft = left
    }
    n = nums.substr(++left, len)
  } while (n.length === len)
  let num = max[0]
  for (let i = 1; i < len; i++) {
    left = maxLeft = maxLeft+1
    max = n = nums.substr(left, len - i)
    do {
      if (max < n) {
        max = n
        maxLeft = left
      }
      n = nums.substr(++left, len - i)
    } while (n.length === len - i)
    num += max[0]
  }
  return num
}

//console.log(solution("1924", 2), "94")
//console.log(solution("1231234", 3), "3234")
console.log(solution("4177252841", 4), "775841")
72528