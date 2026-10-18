// 4038. Count Integers Appearing in a Single Block
package main

import "fmt"

func countSpecialIntegers(nums []int) any {
	mapp := make([][]int, 100)

	for i, no := range nums {
		mapp[no] = append(mapp[no], i)
	}

	count := 0

	for _, arr := range mapp {
		if len(arr) > 0 {
			if checkk(arr) {
				count++
			}
		}
	}

	return count
}

func checkk(nums []int) bool {
	if len(nums) == 1 {
		return true
	}

	for i := 1; i < len(nums); i++ {
		if nums[i] != (nums[i-1] + 1) {
			return false
		}
	}
	return true
}

func main() {
	fmt.Println(countSpecialIntegers([]int{1, 2, 2, 1}))
	fmt.Println(countSpecialIntegers([]int{3, 3, 1, 2, 2, 1}))
	fmt.Println(countSpecialIntegers([]int{19, 19, 19}))
	fmt.Println(countSpecialIntegers([]int{22}))
}
