// 3550. Smallest Index With Digit Sum Equal to Index
package main

import (
	"fmt"
	"math"
)

func smallestIndex(nums []int) int {
	for i, no := range nums {
		x := summ(no)
		if x == i {
			return x
		}
	}
	return -1
}

func summ(num int) int {
	var ans int

	switch {
	case num >= 10 && num < 100:
		x := int(math.Floor(float64(num) / 10))
		ans += x
		ans += num - (x * 10)
	case num >= 100 && num < 1000:
		x := int(math.Floor(float64(num) / 100))
		ans += x
		xx := int(math.Floor(float64(num-(x*100)) / 10))
		ans += xx
		ans += num - (x * 100) - (xx * 10)
	case num == 1000:
		ans += 1
	default:
		ans = num
	}
	return ans
}

func main() {
	fmt.Println(summ(99))
	fmt.Println(smallestIndex([]int{1, 3, 2}))
	fmt.Println(smallestIndex([]int{1, 10, 11}))
	fmt.Println(smallestIndex([]int{1, 2, 3}))
	fmt.Println(smallestIndex([]int{319, 116, 74, 753, 203, 11, 774, 261, 632, 384, 658, 121, 33, 894, 699, 30, 401, 525, 99}))
}
