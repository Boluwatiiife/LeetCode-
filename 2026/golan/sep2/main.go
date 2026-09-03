// 125. Valid Palindrome
package main

import (
	"fmt"
	"strings"
	"unicode"
)

func isPalindrome(s string) bool {
	s = strings.ToLower(s)
	var builder strings.Builder
	for _, r := range s {
		if unicode.IsLetter(r) || unicode.IsNumber(r) {
			builder.WriteRune(r)
		}
	}
	word := builder.String()
	arr := strings.Split(word, "")

	front, back := 0, len(arr)-1

	for {
		if front <= back {
			if arr[front] == arr[back] {
				front++
				back--
			} else {
				return false
			}
		} else {
			break
		}

	}
	return true
}

func main() {
	fmt.Println(isPalindrome("A man, a plan, a canal: Panama"))
	fmt.Println(isPalindrome("race a car"))
	fmt.Println(isPalindrome(" "))
	fmt.Println(isPalindrome("QWEEQQQQfefeoo"))
}
