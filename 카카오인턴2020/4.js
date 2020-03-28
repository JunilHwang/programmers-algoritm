function solution(k, room_number) {
  const room = new Array(k);
  for (let i = 0; i < k; i++) room[i] = 0

  const solution = room_number.map(v => {
    if (!room[v]) {
      room[v] = 1
      return v
    }
    const k = room.indexOf(0, v+1)
    room[k] = 1
    return k
  })
  return solution
}
console.log(solution(10, [1,3,4,1,3,1]).toString() === [1,3,4,2,5,6].toString())
// const last = 10 ** 12
// console.log(solution(last, [1,3,4,1,3,1]).toString() === [1,3,4,2,5,6].toString())