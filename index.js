
let array = [1,2,3,4,5]

const rotateLeft = (array, rotations) => {
  const rotatedArray = array.concat()
  for(let i = 0; i < rotations; i++) {
    let frontItem = rotatedArray.shift()
    rotatedArray.push(frontItem)
  }
  return rotatedArray
}
console.log(rotateLeft(array , 4))