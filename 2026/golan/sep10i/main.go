// 242. Valid Anagram
package main

import (
	"fmt"
	"strings"
)

// func isAnagram(s string, t string) bool {
func isAnagram(s string, t string) any {
	if len(s) != len(t) {
		return false
	}
	one := strings.Split(s, "")
	two := strings.Split(t, "")
	xx := make(map[string]int, len(one))
	yy := make(map[string]int, len(one))

	for i := 0; i < len(one); i++ {
		xx[one[i]]++
		yy[two[i]]++
	}
	for _, val := range one {
		if xx[val] != yy[val] {
			return false
		}
	}

	return true

	// fmt.Println(xx)
	// fmt.Println(yy)
	// return xx["t"] == yy["t"]
	// return arr["g"] == 2
	// return [][]string{one, two}
}

func main() {
	fmt.Println(isAnagram("anagram", "nagaram"))
	fmt.Println(isAnagram("rat", "car"))
	fmt.Println(isAnagram("bolu", "lubo"))
	fmt.Println(isAnagram("a", "ab"))
}
