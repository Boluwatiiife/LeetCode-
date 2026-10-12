// 32. Longest Valid Parentheses
package main

import (
	"fmt"
	"slices"
)

func longestValidParentheses(s string) any {
	arr := []int{}
	front := []int{}

	for i, ch := range s {
		if ch == '(' {
			front = append(front, i)
		} else {
			if len(front) > 0 {
				arr = append(arr, front[len(front)-1])
				arr = append(arr, i)
				front = front[:len(front)-1]
			}
		}
	}
	slices.Sort(arr)
	maxx, count := 0, 1

	for i := 1; i < len(arr); i++ {
		if arr[i] == arr[i-1]+1 {
			count++
		} else {
			maxx = max(maxx, count)
			count = 1
		}
	}
	if len(arr) > 0 {
		maxx = max(maxx, count)
	}
	return maxx
}

func main() {
	fmt.Println(longestValidParentheses("(()"))
	fmt.Println(longestValidParentheses(")()())"))
	fmt.Println(longestValidParentheses("))((())))"))
	fmt.Println(longestValidParentheses(""))
}
