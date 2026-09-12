// 283. Move Zeroes
package main

import "fmt"

func moveZeroes(nums []int) []int {
	l := 0
	for r := 0; r < len(nums); r++ {
		if nums[r] != 0 {
			nums[l], nums[r] = nums[r], nums[l]
			l++
		}
	}

	return nums
}

func main() {
	fmt.Println(moveZeroes([]int{0, 1, 0, 3, 12}))
	fmt.Println(moveZeroes([]int{0}))
}
