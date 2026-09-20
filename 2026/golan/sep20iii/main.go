// 448. Find All Numbers Disappeared in an Array
package main

import "fmt"

func findDisappearedNumbers(nums []int) []int {
	mapp := make([]int, len(nums)+1)
	for _, x := range nums {
		mapp[x]++
	}
	ans := []int{}

	for i := 1; i < len(mapp); i++ {
		if mapp[i] == 0 {
			ans = append(ans, i)
		}
	}
	return ans
}

func main() {
	fmt.Println(findDisappearedNumbers([]int{4, 3, 2, 7, 8, 2, 3, 1}))
	fmt.Println(findDisappearedNumbers([]int{1, 1}))
}
