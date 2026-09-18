// 383. Ransom Note
package main

import (
	"fmt"
	"strings"
)

func canConstruct(ransomNote string, magazine string) bool {
	ransom := strings.Split(ransomNote, "")
	mag := strings.Split(magazine, "")

	mapp := make(map[string]int)
	for _, x := range mag {
		mapp[x]++
	}

	for _, x := range ransom {
		if mapp[x] < 1 {
			return false
		}
		mapp[x]--
	}

	return true
}

func main() {
	fmt.Println(canConstruct("a", "b"))
	fmt.Println(canConstruct("aa", "ab"))
	fmt.Println(canConstruct("aa", "aab"))
}
