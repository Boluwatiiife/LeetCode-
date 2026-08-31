// 88. Merge Sorted Array

package main

import (
	"fmt"
	"slices"
)

func merge(nums1 []int, m int, nums2 []int, n int) any {
	dex := 0

	for i := m; i < len(nums1); i++ {
		nums1[i] = nums2[dex]
		dex++
	}
	slices.Sort(nums1)

	return nums1
}

func main() {
	fmt.Println(merge([]int{1, 2, 3, 0, 0, 0}, 3, []int{2, 5, 6}, 3))
	fmt.Println(merge([]int{1}, 1, []int{}, 0))
	fmt.Println(merge([]int{0}, 0, []int{1}, 1))
	fmt.Println(merge([]int{-1, -1, 0, 0, 0, 0}, 4, []int{-1, 0}, 2))
}
