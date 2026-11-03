// 4065. Rearrange Array by Removing Distinct Values
package main

import (
	"fmt"
)

func rearrangeArray(nums []int) any {
	maxx := 0
	for _, no := range nums {
		if no > maxx {
			maxx = no
		}
	}

	mapp := make([]int, maxx+1)
	for _, no := range nums {
		mapp[no]++
	}

	ans := []int{}

	dex := len(nums)
	for dex >= 0 {
		for i, no := range mapp {
			if no > 0 {
				ans = append(ans, i)
				mapp[i]--
			}
		}
		dex--
	}

	return ans
}

func main() {
	fmt.Println(rearrangeArray([]int{3, 1, 3, 2, 1, 3}))
	fmt.Println(rearrangeArray([]int{7, 7, 4, 4, 4}))
}
