// 4030. Check ASCII Palindromic
package main

import "fmt"

func isPalindromic(s string) any {
	strr := ""

	for _, ch := range s {
		no := fmt.Sprintf("%08b", int(ch))
		strr += no
	}
	front, back := 0, len(strr)-1

	for front <= back {
		if strr[front] != strr[back] {
			return false
		}
		front++
		back--
	}

	return true
}

func main() {
	fmt.Println(isPalindromic("ff"))
	fmt.Println(isPalindromic("leet"))
}
