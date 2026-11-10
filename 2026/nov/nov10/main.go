// 4088. Difference Between Peaks and Valleys
package main

import "fmt"

func peakValleyDifference(nums []int) int {
	peak, valley := 0, 0

	for i := 1; i < len(nums)-1; i++ {
		if nums[i] < nums[i-1] && nums[i] < nums[i+1] {
			valley += nums[i]
		}
		if nums[i] > nums[i-1] && nums[i] > nums[i+1] {
			peak += nums[i]
		}
	}
	return peak - valley
}

func main() {
	fmt.Println(peakValleyDifference([]int{1, 5, 2, 4, 1, 3, 0}))
	fmt.Println(peakValleyDifference([]int{-5, -6, -1, -2, 5, 3, 2}))
	fmt.Println(peakValleyDifference([]int{6, 5, 2, 5, 5, 3, 6}))
}
