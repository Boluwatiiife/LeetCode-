// 461. Hamming Distance
package main

import (
	"fmt"
	"strconv"
)

func hammingDistance(x int, y int) any {
	one := strconv.FormatInt(int64(x), 2)
	two := strconv.FormatInt(int64(y), 2)

	i, j := len(one)-1, len(two)-1
	ans := 0

	for i >= 0 && j >= 0 {
		if one[i] != two[j] {
			ans++
		}
		i--
		j--
	}
	for i >= 0 {
		if one[i] == '1' {
			ans++
		}
		i--
	}
	for j >= 0 {
		if two[j] == '1' {
			ans++
		}
		j--
	}

	return ans
}

func main() {
	fmt.Println(hammingDistance(1, 4))
	fmt.Println(hammingDistance(3, 1))
}
