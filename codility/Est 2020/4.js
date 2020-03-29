function solution (S, C) {
  const obj = {}
  const company = C.toLowerCase()
  return S.split(';').map(v => {
    const name = v.trim()
    const vArr = name.toLowerCase().replace(/\-/g, '').split(' ')
    let id = `${vArr.pop()}_${vArr[0]}`
    obj[id] = obj[id] || 0
    obj[id] += 1
    if (obj[id] > 1) id += obj[id]
    return `${name} <${id}@${company}.com>`
  }).join('; ')
}

const S = "John Doe; Peter Benjamin Parker; Mary Jane Watson-Parker; John Elvis Doe; John Evan Doe; Jane Doe; Peter Brian Parker"
const C = "Example"
const resolve = `John Doe <doe_john@example.com>; Peter Benjamin Parker <parker_peter@example.com>; Mary Jane Watson-Parker <watsonparker_mary@example.com>; John Elvis Doe <doe_john2@example.com>; John Evan Doe <doe_john3@example.com>; Jane Doe <doe_jane@example.com>; Peter Brian Parker <parker_peter2@example.com>`
console.log(solution(S, C) === resolve)