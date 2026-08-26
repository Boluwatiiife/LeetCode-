// 3718. Smallest Missing Multiple of K

package leetcode

import (
	"fmt"
	"slices"
)

func missingMultiple(nums []int, k int) int {
	for i := 1; ; i++ {
		if i%k == 0 && !slices.Contains(nums, i) {
			return i
		}
	}
}

func main() {
	fmt.Println(missingMultiple([]int{8, 2, 3, 4, 6}, 2))
	fmt.Println(missingMultiple([]int{1, 4, 7, 10, 15}, 5))
}
