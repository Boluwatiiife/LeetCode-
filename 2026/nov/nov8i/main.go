// 4083. Minimum Deletions to Make Array Sharp
package main

import "fmt"

func minDeletions(nums []int) int {
	count := 0

	for i := 1; i < len(nums); i++ {
		if nums[i] == nums[i-1] {
			count++
		}
	}
	return count
}

func main() {
	fmt.Println(minDeletions([]int{1, 1, 2, 2, 2, 3}))
	fmt.Println(minDeletions([]int{4, 4, 9, 4}))
}
