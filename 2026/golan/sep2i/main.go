// 136. Single Number
package main

import (
	"fmt"
)

func singleNumber(nums []int) int {
	ans := 0

	for _, no := range nums {
		ans ^= no
	}

	return ans
}

func main() {
	fmt.Println(singleNumber([]int{2, 2, 1}))
	fmt.Println(singleNumber([]int{4, 1, 2, 1, 2, 5, 5}))
	fmt.Println(singleNumber([]int{1}))
}
