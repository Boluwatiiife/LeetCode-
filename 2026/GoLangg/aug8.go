package leetcode

import "fmt"

func twoSum(nums []int, target int) []int {
	ans := []int{}
	for k, v := range nums {
		for key, val := range nums {
			if v+val == target && k != key {
				ans = append(ans, k, key)
				return ans
			}
		}
	}
	return ans
}

func main() {
	fmt.Println(twoSum([]int{2, 7, 11, 15}, 9))
	fmt.Println(twoSum([]int{3, 2, 4}, 6))
	fmt.Println(twoSum([]int{3, 3}, 6))
	fmt.Println(twoSum([]int{1, 2, 3}, 9))
}

// func main() {
// 	twoSum([]int{2, 7, 11, 15}, 9)
// 	// fmt.Println()
// }
