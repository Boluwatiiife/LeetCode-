// 3364. Minimum Positive Sum Subarray
package main

import "fmt"

func minimumSumSubarray(nums []int, l int, r int) int {
	ans, min := -1, 1001*len(nums)

	for i := l; i <= r; i++ {
		temp := checkk(nums, i)
		if temp < min {
			min = temp
			ans = temp
		}
	}
	return ans
}

func checkk(arr []int, xx int) int {
	min := 1001 * len(arr)
	dex, count, sum := 0, 0, 0

	for _, no := range arr {
		sum += no
		count++

		if count == xx {
			if sum < min && sum > 0 {
				min = sum
			}
		}
		if count > xx {
			sum -= arr[dex]
			dex++
			count--
			if sum < min && sum > 0 {
				min = sum
			}
		}
	}
	return min
}

func main() {
	fmt.Println(minimumSumSubarray([]int{3, -2, 1, 4}, 2, 3))
	fmt.Println(minimumSumSubarray([]int{-2, 2, -3, 1}, 2, 3))
	fmt.Println(minimumSumSubarray([]int{1, 2, 3, 4}, 2, 4))
	fmt.Println(minimumSumSubarray([]int{-12, 8}, 1, 1))
	fmt.Println(minimumSumSubarray([]int{-3, 17}, 1, 2))
	fmt.Println(minimumSumSubarray([]int{-2, 2, -3, 1}, 2, 3))
	fmt.Println(minimumSumSubarray([]int{-23, 3}, 2, 2))
	fmt.Println(minimumSumSubarray([]int{6, 19, 4}, 2, 2))
	fmt.Println(minimumSumSubarray([]int{17, 13}, 1, 2))
}
