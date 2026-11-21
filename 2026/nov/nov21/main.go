// 4092. Binary Digit Score
package main

import (
	"fmt"
	"strconv"
)

func calculateScore(a int, b int) int {
	onee, twoo := strconv.FormatInt(int64(a), 2), strconv.FormatInt(int64(b), 2)
	one, two := 0, 0
	for _, x := range onee {
		if x == '1' {
			one++
		}
	}
	for _, x := range twoo {
		if x == '1' {
			two++
		}
	}

	if one >= two {
		return one * two
	}
	return two / one
}

func main() {
	fmt.Println(calculateScore(14, 6))
	fmt.Println(calculateScore(5, 15))
	fmt.Println(calculateScore(10, 12))
}
