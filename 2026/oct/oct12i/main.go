// 4006. Count Valid Prefixes
package main

import (
	"fmt"
	"math"
)

func countValidPrefixes(s string) int {
	one, zero, ans := 0, 0, 0

	for _, x := range s {
		if x == '1' {
			one++
		} else {
			zero++
		}
		if math.Abs(float64(one-zero)) <= 1 {
			ans++
		}
	}
	return ans
}

func main() {
	fmt.Println(countValidPrefixes("00101"))
	fmt.Println(countValidPrefixes("101"))
}
