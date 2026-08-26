// 2996. Smallest Missing Integer Greater Than Sequential Prefix Sum

package leetcode

import (
	"fmt"
	"slices"
)

func missingInteger(nums []int) int {
	sum := nums[0]

	for i := 1; i < len(nums); i++ {
		if nums[i-1]+1 == nums[i] {
			sum += nums[i]
		} else {
			break
		}
	}
	for {
		if slices.Contains(nums, sum) {
			sum++
		} else {
			break
		}
	}
	return sum
}

func main() {
	fmt.Println(missingInteger([]int{1, 2, 3, 2, 5}))
	fmt.Println(missingInteger([]int{3, 4, 5, 1, 12, 14, 13}))
}
