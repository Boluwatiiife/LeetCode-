package main

import (
	"fmt"
)

// 26. Remove Duplicates from Sorted Array

func removeDuplicates(nums []int) int {
	if len(nums) == 0 {
		return 0
	}
	count := 1

	for i := 1; i < len(nums); i++ {
		if nums[i] != nums[count-1] {
			nums[count] = nums[i]
			count++
		}
	}

	return count
}

func main() {
	fmt.Println(removeDuplicates([]int{1, 1, 2}))
	fmt.Println(removeDuplicates([]int{0, 0, 1, 1, 1, 2, 2, 3, 3, 4}))
}
