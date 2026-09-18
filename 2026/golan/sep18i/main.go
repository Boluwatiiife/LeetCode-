// 387. First Unique Character in a String
package main

import (
	"fmt"
)

// func firstUniqChar(s string) int {
func firstUniqChar(s string) any {
	mapp := make([]int, 26)

	for i := 0; i < len(s); i++ {
		mapp[s[i]-'a']++
	}
	for i := 0; i < len(s); i++ {
		if mapp[s[i]-'a'] == 1 {
			return i
		}
	}

	return -1
}

func main() {
	fmt.Println(firstUniqChar("leetcode"))
	fmt.Println(firstUniqChar("loveleetcode"))
	fmt.Println(firstUniqChar("aabb"))
}
