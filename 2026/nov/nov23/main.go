// 4097. Minimum Value of Merged Integers
package main

import (
	"fmt"
	"strconv"
)

func minMergedInteger(nums []int) int {
	ans, _ := strconv.Atoi(strconv.Itoa(nums[0]) + strconv.Itoa(nums[1]))

	for i := 2; i < len(nums); i += 2 {
		num, _ := strconv.Atoi(strconv.Itoa(nums[i]) + strconv.Itoa(nums[i+1]))
		if num < ans {
			ans = num
		}
	}
	return ans
}

func main() {
	fmt.Println(minMergedInteger([]int{23, 55, 42, 21}))
	fmt.Println(minMergedInteger([]int{34, 7, 11, 11}))
	fmt.Println(minMergedInteger([]int{9, 20}))
}
