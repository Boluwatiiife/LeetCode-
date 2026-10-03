// 20. Valid Parentheses
package main

import "fmt"

func isValid(s string) bool {
	return true
}

func main() {
	fmt.Println(isValid("()"))
	fmt.Println(isValid("()[]{}"))
	fmt.Println(isValid("(]"))
	fmt.Println(isValid("([])"))
}
