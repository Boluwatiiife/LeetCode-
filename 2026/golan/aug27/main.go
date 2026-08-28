//28. Find the Index of the First Occurrence in a String

package main

import (
	"fmt"
	"strings"
)

func strStr(haystack string, needle string) any {
	hay := strings.Split(haystack, "")
	need := strings.Split(needle, "")

	for i := 0; i < len(hay); i++ {
		if i+len(need) <= len(hay) {
			arr := hay[i : len(need)+i]
			temp := strings.Join(arr, "")
			if temp == needle {
				return i
			}
		}
	}

	return -1
}

func main() {
	fmt.Println(strStr("sadbutsad", "sad"))
	fmt.Println(strStr("sabutsad", "sad"))
	fmt.Println(strStr("leetcode", "leeto"))
	fmt.Println(strStr("backtechh", "tech"))
	fmt.Println(strStr("mississippi", "issip"))
	fmt.Println(strStr("a", "a"))
}
