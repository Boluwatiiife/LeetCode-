// 345. Reverse Vowels of a String
package main

import (
	"fmt"
	"slices"
	"strings"
)

func reverseVowels(s string) string {
	arr := strings.Split(s, "")
	vowels := []string{"A", "E", "I", "O", "U", "a", "e", "i", "o", "u"}
	left, right := 0, len(arr)-1

	for left < right {
		if slices.Contains(vowels, arr[left]) && slices.Contains(vowels, arr[right]) {
			arr[left], arr[right] = arr[right], arr[left]
			left++
			right--
		} else {
			if !slices.Contains(vowels, arr[left]) {
				left++
			}
			if !slices.Contains(vowels, arr[right]) {
				right--
			}
		}
	}

	return strings.Join(arr, "")
}

func main() {
	fmt.Println(reverseVowels("IceCreAm"))
	fmt.Println(reverseVowels("leetcode"))
	fmt.Println(reverseVowels("BoluwA"))
}
