package main

import (
	"fmt"
)

func removeElement(nums []int, val int) any {
	i := 0

	for j := 0; j < len(nums); j++ {
		if nums[j] != val {
			nums[i] = nums[j]
			i++
		}
	}

	return i
	// if len(nums) == 0 {
	// 	return 0
	// }
	// arr := []int{}

	// for i := 0; i < len(nums); i++ {
	// 	if nums[i] == val {
	// 		arr = append(arr, i)
	// 		nums[i] = 55
	// 	} else {
	// 		if len(arr) > 0 {
	// 			nums[arr[0]] = nums[i]
	// 			nums[i] = 55
	// 			arr = arr[1:]
	// 			arr = append(arr, i)
	// 		}
	// 	}
	// }
	// ans := slices.Index(nums, 55)
	// if ans >= 0 {
	// 	return ans
	// }
	// return len(nums)
}

func main() {
	fmt.Println(removeElement([]int{3, 2, 2, 3}, 3))
	fmt.Println(removeElement([]int{0, 1, 2, 2, 3, 0, 4, 2}, 2))
	fmt.Println(removeElement([]int{}, 0))
	fmt.Println(removeElement([]int{1}, 1))
	fmt.Println(removeElement([]int{2}, 3))
	fmt.Println(removeElement([]int{1, 2, 3, 4, 5, 6, 7}, 2))

}
