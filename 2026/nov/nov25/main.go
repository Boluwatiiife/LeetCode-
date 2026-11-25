// 4111. Count Consistent Subarrays I
package main

import "fmt"

func countConsistent(nums []int) any {
	ans := len(nums)
	minn, andd := nums[0], nums[0]
	dex := 1

	for i := 1; i < len(nums); i++ {
		if nums[i] < minn {
			minn = nums[i]
		}
		andd &= nums[i]
		if andd == minn {
			ans++
		}
		if i == len(nums)-1 {
			andd = nums[dex]
			minn = nums[dex]
			i = dex
			dex++
		}
	}
	return ans
}

func main() {
	fmt.Println(countConsistent([]int{5, 3, 1, 2}))
	fmt.Println(countConsistent([]int{1, 1, 1}))
	fmt.Println(countConsistent([]int{0}))
}
