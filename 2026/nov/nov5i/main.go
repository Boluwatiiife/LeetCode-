package main

import "fmt"

// 4074. Maximum Product Pair With Target Sum

func maxProductPair(nums []int, target int) []int {
	ans := []int{-1, -1}
	temp := -10001
	for i, one := range nums {
		for j, two := range nums {
			if one > two && one+two == target {
				if one*two > temp {
					temp = one * two
					ans[0], ans[1] = i, j
				}
			}
		}
	}
	return ans
}

func main() {
	fmt.Println(maxProductPair([]int{1, 2, 3, 4}, 5))
	fmt.Println(maxProductPair([]int{-3, -1, 4, 2}, 1))
	fmt.Println(maxProductPair([]int{3, 3, 5}, 6))
}
