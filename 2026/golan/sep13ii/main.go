// 290. Word Pattern
package main

import (
	"fmt"
	"strings"
)

func wordPattern(pattern string, s string) bool {
	one := strings.Split(pattern, "")
	two := strings.Split(s, " ")
	if len(one) != len(two) {
		return false
	}
	arr := make(map[string]string)
	arr[one[0]] = two[0]

	for i := 1; i < len(one); i++ {
		_, n := arr[one[i]]
		if n && arr[one[i]] != two[i] {
			return false
		}
		xx := contains(arr, two[i])
		if !n && xx {
			return false
		}
		arr[one[i]] = two[i]
	}
	return true
}
func contains(m map[string]string, word string) bool {
	for _, v := range m {
		if v == word {
			return true
		}
	}
	return false
}

func main() {
	fmt.Println(wordPattern("abba", "dog cat cat dog"))
	fmt.Println(wordPattern("abba", "dog cat cat fish"))
	fmt.Println(wordPattern("aaaa", "dog cat cat dog"))
	fmt.Println(wordPattern("abba", "dog dog dog dog"))
}
