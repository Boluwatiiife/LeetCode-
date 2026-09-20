// 414. Third Maximum Number
package main

import (
	"fmt"
	"slices"
)

// func thirdMax(nums []int) int {
func thirdMax(nums []int) any {
	mapp := make(map[int]int)
	for _, no := range nums {
		mapp[no]++
	}
	arr := []int{}

	for x := range mapp {
		arr = append(arr, x)
	}
	slices.Sort(arr)
	if len(arr) > 2 {
		return arr[len(arr)-3]
	}
	return arr[len(arr)-1]
}

func main() {
	fmt.Println(thirdMax([]int{3, 2, 1}))
	fmt.Println(thirdMax([]int{3, 2, 1, 3, 3, 3}))
	fmt.Println(thirdMax([]int{1, 2}))
	fmt.Println(thirdMax([]int{1, 2, 5, 5}))
}
