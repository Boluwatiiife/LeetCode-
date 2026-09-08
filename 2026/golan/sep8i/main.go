// 219. Contains Duplicate II
package main

import (
	"fmt"
)

// func containsNearbyDuplicate(nums []int, k int) bool {
func containsNearbyDuplicate(nums []int, k int) any {
	hashh := make(map[int]int, len(nums))

	for i := 0; i < len(nums); i++ {
		j, ok := hashh[nums[i]]

		if ok {
			if i-j <= k {
				return true
			}
		}
		hashh[nums[i]] = i
	}

	return false
}

func main() {
	fmt.Println(containsNearbyDuplicate([]int{1, 2, 3, 1}, 3))
	fmt.Println(containsNearbyDuplicate([]int{1, 0, 1, 1}, 1))
	fmt.Println(containsNearbyDuplicate([]int{1, 2, 3, 1, 2, 3}, 2))
}
