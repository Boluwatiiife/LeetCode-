// 350. Intersection of Two Arrays II
package main

import (
	"fmt"
	"slices"
)

// func intersection(nums1 []int, nums2 []int) []int {
func intersection(nums1 []int, nums2 []int) any {
	arr := []int{}
	set := make(map[int]int)

	for _, val := range nums1 {
		set[val]++
	}

	for _, val := range nums2 {
		if slices.Contains(nums1, val) {
			if set[val] > 0 {
				arr = append(arr, val)
				set[val]--
			}
		}
	}

	return arr
}

func main() {
	fmt.Println(intersection([]int{1, 2, 2, 1}, []int{2, 2}))
	fmt.Println(intersection([]int{4, 9, 5}, []int{9, 4, 9, 8, 4}))
	fmt.Println(intersection([]int{4, 7, 9, 7, 6, 7}, []int{5, 0, 0, 6, 1, 6, 2, 2, 4}))
	fmt.Println(intersection([]int{1, 2, 2, 1}, []int{2}))
	fmt.Println(intersection([]int{3, 1, 2}, []int{1, 1}))

}
