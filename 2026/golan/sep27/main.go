// 1190. Reverse Substrings Between Each Pair of Parentheses
package main

import (
	"fmt"
	"strings"
)

func reverseParentheses(s string) any {
	arr := strings.Split(s, "")

	dex := []int{}
	for i, letter := range s {
		switch {
		case letter == '(':
			dex = append(dex, i)
		case letter == ')':
			one, two := dex[len(dex)-1]+1, i-1
			for one < two {
				arr[one], arr[two] = arr[two], arr[one]
				one++
				two--
			}
			dex = dex[:len(dex)-1]
		}
	}

	ans := ""
	for _, x := range arr {
		if x != "(" && x != ")" {
			ans += x
		}
	}
	return ans
}

func main() {
	fmt.Println(reverseParentheses("(abcd)"))
	fmt.Println(reverseParentheses("(u(love)i)"))
	fmt.Println(reverseParentheses("(ed(et(oc))el)"))
	fmt.Println(reverseParentheses("a(bcdefghijkl(mno)p)q"))
	fmt.Println(reverseParentheses("yfgnxf"))
	fmt.Println(reverseParentheses("ta()usw((((a))))"))
}
