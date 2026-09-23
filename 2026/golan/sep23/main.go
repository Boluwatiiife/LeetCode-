// 1658. Minimum Operations to Reduce X to Zero
package main

import "fmt"

func minOperations(nums []int, x int) any {
	total := 0
	for _, no := range nums {
		total += no
	}
	target := total - x
	if target < 0 {
		return -1
	}
	left, right := 0, 0
	sum := 0
	ans := -1

	for right < len(nums) {
		sum += nums[right]
		for sum > target && left <= right {
			sum -= nums[left]
			left++
		}
		if sum == target {
			ans = max(ans, right-left+1)
		}
		right++
	}

	if ans != -1 {
		return len(nums) - ans
	}
	return -1
}

func main() {
	fmt.Println(minOperations([]int{1, 1, 4, 2, 3}, 5))
	fmt.Println(minOperations([]int{5, 6, 7, 8, 9}, 4))
	fmt.Println(minOperations([]int{3, 2, 20, 1, 1, 3}, 10))
	fmt.Println(minOperations([]int{1, 2, 3, 4, 5}, 6))
}
