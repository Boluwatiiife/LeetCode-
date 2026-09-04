// 3903. Smallest Stable Index I
package main

import (
	"fmt"
	"slices"
)

func firstStableIndex(nums []int, k int) int {
	for i := 0; i < len(nums); i++ {
		one := nums[:i+1]
		two := nums[i:]
		maxx := slices.Max(one)
		minn := slices.Min(two)
		if maxx-minn <= k {
			return i
		}
	}
	return -1
}

func main() {
	fmt.Println(firstStableIndex([]int{5, 0, 1, 4}, 3))
	fmt.Println(firstStableIndex([]int{3, 2, 1}, 1))
	fmt.Println(firstStableIndex([]int{0}, 0))
}
