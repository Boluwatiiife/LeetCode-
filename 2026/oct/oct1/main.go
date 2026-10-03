// 506. Relative Ranks
package main

import (
	"fmt"
	"slices"
	"strconv"
)

func findRelativeRanks(score []int) any {
	mapp := make(map[int]int)

	for i, no := range score {
		mapp[no] = i
	}
	slices.Sort(score)
	slices.Reverse(score)

	ans := make([]string, len(score))

	for i, no := range score {
		switch {
		case i == 0:
			ans[mapp[no]] = "Gold Medal"
		case i == 1:
			ans[mapp[no]] = "Silver Medal"
		case i == 2:
			ans[mapp[no]] = "Bronze Medal"
		default:
			ans[mapp[no]] = strconv.Itoa(i + 1)
		}
	}

	return ans
}

func main() {
	fmt.Println(findRelativeRanks([]int{5, 4, 3, 2, 1}))
	fmt.Println(findRelativeRanks([]int{10, 3, 8, 9, 4}))
}
