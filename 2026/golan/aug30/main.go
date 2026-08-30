// 2091. Removing Minimum and Maximum From Array
package main

import (
	"fmt"
	"math"
)

func minimumDeletions(nums []int) int {
	minn := math.MaxInt
	maxx := math.MinInt
	var dexMin int
	var dexMax int
	n := len(nums)

	for i := 0; i < n; i++ {
		if nums[i] < minn {
			dexMin = i
			minn = nums[i]
		}
		if nums[i] > maxx {
			dexMax = i
			maxx = nums[i]
		}
	}
	mi := min(dexMax, dexMin)
	ma := max(dexMax, dexMin)
	ans := math.MaxInt

	ans = min(ans, ma+1)
	ans = min(ans, n-mi)
	ans = min(ans, (n - ma + mi + 1))

	return ans
}

func main() {
	fmt.Println(minimumDeletions([]int{2, 10, 7, 5, 4, 1, 8, 6}))
	fmt.Println(minimumDeletions([]int{0, -4, 19, 1, 8, -2, -3, 5}))
	fmt.Println(minimumDeletions([]int{101}))
}
