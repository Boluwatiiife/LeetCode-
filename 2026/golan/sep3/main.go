// 169. Majority Element
package main

import (
	"fmt"
	"slices"
)

func majorityElement(nums []int) int {
	slices.Sort(nums)

	return nums[(len(nums)-1)/2]
}

func main() {
	fmt.Println(majorityElement([]int{3, 2, 3}))
	fmt.Println(majorityElement([]int{2, 2, 1, 1, 1, 2, 2}))
}
