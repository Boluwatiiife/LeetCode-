// 268. Missing Number
package main

import "fmt"

func missingNumber(nums []int) int {
	arr := make([]int, len(nums)+1)

	for _, val := range nums {
		arr[val]++
	}
	for i, val := range arr {
		if val == 0 {
			return i
		}
	}
	return 0
}

func main() {
	fmt.Println(missingNumber([]int{3, 0, 1}))
	fmt.Println(missingNumber([]int{0, 1}))
	fmt.Println(missingNumber([]int{9, 6, 4, 2, 3, 5, 7, 0, 1}))
}
