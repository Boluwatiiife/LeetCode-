// 228. Summary Ranges
package main

import (
	"fmt"
	"strconv"
)

func summaryRanges(nums []int) []string {
	ans := []string{}

	temp := []int{nums[0]}

	for i := 1; i < len(nums); i++ {
		if nums[i] == temp[len(temp)-1]+1 {
			temp = append(temp, nums[i])
		} else {
			if len(temp) > 1 {
				one := temp[0]
				two := temp[len(temp)-1]
				x := strconv.Itoa(one) + "->" + strconv.Itoa(two)
				ans = append(ans, x)
			} else {
				ans = append(ans, strconv.Itoa(temp[0]))
			}
			temp = []int{nums[i]}
		}
	}
	if len(temp) > 0 {
		if len(temp) > 1 {
			one := temp[0]
			two := temp[len(temp)-1]
			x := strconv.Itoa(one) + "->" + strconv.Itoa(two)
			ans = append(ans, x)
		} else {
			ans = append(ans, strconv.Itoa(temp[0]))
		}
	}
	return ans
}

func main() {
	fmt.Println(summaryRanges([]int{0, 1, 2, 4, 5, 7}))
	fmt.Println(summaryRanges([]int{0, 2, 3, 4, 6, 8, 9}))
}
