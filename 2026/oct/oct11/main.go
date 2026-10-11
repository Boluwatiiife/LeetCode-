// 2778. Sum of Squares of Special Elements
package main

import "fmt"

func sumOfSquares(nums []int) int {
	ans := 0
	leng := len(nums)

	for i, no := range nums {
		if leng%(i+1) == 0 {
			ans += no * no
		}
	}

	return ans
}

func main() {
	fmt.Println(sumOfSquares([]int{1, 2, 3, 4}))
	fmt.Println(sumOfSquares([]int{2, 7, 1, 19, 18, 3}))
}
