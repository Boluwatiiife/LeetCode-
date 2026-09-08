// 228. Summary Ranges
package main

import "fmt"

func summaryRanges(nums []int) []string {
	ans := []string{}

	temp := []int{nums[0]}

	for i := 1; i < len(nums); i++ {
		if nums[i]+1 != (temp[len(temp)-1] - 1) {
			if len(temp) == 1 {
				x := string(temp[0])
				ans = append(ans, x)
			} else {
				x := string(temp[0]) + "->" + string(temp[len(temp)-1])
				ans = append(ans, x)
			}
			temp = []int{nums[i]}
		} else {
			temp = append(temp, nums[i])
		}
	}
	return ans
}

func main() {
	fmt.Println(summaryRanges([]int{0, 1, 2, 4, 5, 7}))
	fmt.Println(summaryRanges([]int{0, 2, 3, 4, 6, 8, 9}))
}
