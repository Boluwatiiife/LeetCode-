//28. Find the Index of the First Occurrence in a String

package main

import (
	"fmt"
	"strings"
)

func strStr(haystack string, needle string) any {
	return strings.Index(haystack, needle)
}

func main() {
	fmt.Println(strStr("sadbutsad", "sad"))
	fmt.Println(strStr("sabutsad", "sad"))
	fmt.Println(strStr("leetcode", "leeto"))
	fmt.Println(strStr("backtechh", "tech"))
	fmt.Println(strStr("mississippi", "issip"))
	fmt.Println(strStr("a", "a"))
}
