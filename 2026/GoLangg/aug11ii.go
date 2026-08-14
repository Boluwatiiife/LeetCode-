// 9. Palindrome Number
package main

import (
	"fmt"
	"strconv"
)

func isPalindrome(x int) bool {
	str := strconv.Itoa(x)
	rev := ""

	for i := len(str) - 1; i >= 0; i-- {
		rev += string(str[i])
	}

	return str == rev
}

func main() {
	fmt.Println(isPalindrome(121))
	fmt.Println(isPalindrome(-121))
	fmt.Println(isPalindrome(10))
}
