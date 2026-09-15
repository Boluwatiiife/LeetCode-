// 344. Reverse String
package main

import (
	"fmt"
)

func reverseString(s []string) []string {
	// slices.Reverse(s)
	// return s
	n := len(s)
	left, right := 0, n-1

	for left < right {
		s[left], s[right] = s[right], s[left]
		left++
		right--
	}
	return s
}

func main() {
	fmt.Println(reverseString([]string{"h", "e", "l", "l", "o"}))
	fmt.Println(reverseString([]string{"H", "a", "n", "n", "a", "h"}))
}
