// 485. Max Consecutive Ones
package main

import "fmt"

func findMaxConsecutiveOnes(nums []int) int {
	ans := 0
	count := 0

	for _, no := range nums {
		if no == 1 {
			count++
		} else {
			ans = max(ans, count)
			count = 0
		}
	}
	ans = max(ans, count)
	return ans
}

func main() {
	fmt.Println(findMaxConsecutiveOnes([]int{1, 1, 0, 1, 1, 1}))
	fmt.Println(findMaxConsecutiveOnes([]int{1, 0, 1, 1, 0, 1}))
}
