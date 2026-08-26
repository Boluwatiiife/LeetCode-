// 3069. Distribute Elements Into Two Arrays I
package leetcode

import "fmt"

func resultArray(nums []int) []int {
	one := []int{nums[0]}
	two := []int{nums[1]}

	for i := 2; i < len(nums); i++ {
		if one[len(one)-1] > two[len(two)-1] {
			one = append(one, nums[i])
		} else {
			two = append(two, nums[i])
		}
	}

	return append(one, two...)
}

func main() {
	fmt.Println(resultArray([]int{2, 1, 3}))
	fmt.Println(resultArray([]int{5, 4, 3, 8}))
}
