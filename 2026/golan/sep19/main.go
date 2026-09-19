// 392. Is Subsequence
package main

import "fmt"

func isSubsequence(s string, t string) bool {
	dex := 0

	for i := 0; i < len(t); i++ {
		if dex == len(s) {
			break
		}
		if t[i] == s[dex] {
			dex++
		}
	}
	return dex == len(s)
}

func main() {
	fmt.Println(isSubsequence("abc", "ahbgdce"))
	fmt.Println(isSubsequence("axc", "ahbgdc"))
	fmt.Println(isSubsequence("", "ahbgdc"))
	fmt.Println(isSubsequence("ace", "kaeesce"))
}
