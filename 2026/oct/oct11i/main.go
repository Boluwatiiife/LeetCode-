// 1021. Remove Outermost Parentheses
package main

import "fmt"

func removeOuterParentheses(s string) string {
	arr := []int{}
	front, back := 0, 0
	front_dex := 0

	for i, ch := range s {
		if ch == '(' {
			front++
		} else if ch == ')' {
			back++
		}
		if front == back {
			arr = append(arr, front_dex)
			arr = append(arr, i)
			front_dex = i + 1
		}
	}

	ans := ""
	dex := 0

	for i, ch := range s {
		if i == arr[dex] {
			dex++
		} else {
			ans += string(ch)
		}
	}

	return ans
}

func main() {
	fmt.Println(removeOuterParentheses("(()())(())"))
	fmt.Println(removeOuterParentheses("(()())(())(()(()))"))
	fmt.Println(removeOuterParentheses("()()"))
}
