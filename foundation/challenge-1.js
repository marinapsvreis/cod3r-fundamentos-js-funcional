//Create a range function
//range(5) -> [1, 2, 3, 4, 5]
//range(6, 11) -> [6, 7, 8, 9, 10, 11]
//range(10, 19, 2) -> [10, 12, 14, 16, 18]
//range(6, 2) -> [6, 5, 4, 3, 2]
//range(8, -3, 4) -> [8, 4, 0]
function range(...nums) {
  let result = []
  if (nums[1] === undefined) {
    for (let i = 1; i <= nums[0]; i++) {
      result.push(i)
    }
  } else if (nums[2] === undefined) {
    if (nums[0] < nums[1]) {
      while (nums[0] <= nums[1]) {
        result.push(nums[0])
        nums[0]++
      }
    } else {
      if (nums[0] > nums[1]) {
        while (nums[0] >= nums[1]) {
          result.push(nums[0])
          nums[0]--
        }
      }
    }
  } else {
    if (nums[0] < nums[1]) {
      while (nums[0] <= nums[1]) {
        if (nums[0] % nums[2] == 0) {
          result.push(nums[0])
        }
        nums[0]++
      }
    } else {
      if (nums[0] > nums[1]) {
        while (nums[0] >= nums[1]) {
          if (nums[0] % nums[2] == 0) {
            result.push(nums[0])
          }
          nums[0]--
        }
      }
    }
  }
  return result
}

console.log(range(5))
console.log(range(6, 11))
console.log(range(10, 19, 2))
console.log(range(6, 2))
console.log(range(8, -3, 4))
