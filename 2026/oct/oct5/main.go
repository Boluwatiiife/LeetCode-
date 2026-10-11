// 856. Score of Parentheses
package main

import "fmt"

func scoreOfParentheses(s string) int {
	ans := 0
	for _, x := range s {
		if x == '(' {
			ans++
		}
	}
	return ans
}

func main() {
	fmt.Println(scoreOfParentheses("()"))
	fmt.Println(scoreOfParentheses("(())"))
	fmt.Println(scoreOfParentheses("()()"))
}
