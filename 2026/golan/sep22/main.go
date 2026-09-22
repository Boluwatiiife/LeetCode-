// 459. Repeated Substring Pattern
package main

import (
	"fmt"
	"strings"
)

func repeatedSubstringPattern(s string) bool {
	return strings.Contains(s[1:]+s[:len(s)-1], s)
}

func main() {
	fmt.Println(repeatedSubstringPattern("abab"))
	fmt.Println(repeatedSubstringPattern("aba"))
	fmt.Println(repeatedSubstringPattern("abcabcabcabc"))
}
