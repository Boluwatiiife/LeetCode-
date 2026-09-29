// 1614. Maximum Nesting Depth of the Parentheses
package main

import "fmt"

func maxDepth(s string) int {
	ans := 0
	maxx := 0

	for _, x := range s {
		if x == '(' {
			ans++
			maxx = max(ans, maxx)
		} else if x == ')' {
			ans--
		}
	}
	return maxx
}

func main() {
	fmt.Println(maxDepth("(1+(2*3)+((8)/4))+1"))
	fmt.Println(maxDepth("(1)+((2))+(((3)))"))
	fmt.Println(maxDepth("()(())((()()))"))
}
