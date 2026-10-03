// 32. Longest Valid Parentheses
package main

import "fmt"

func longestValidParentheses(s string) any {
	one := []int{}
	mapp := make([]bool, len(s))

	for i, x := range s {
		ch := string(x)
		if ch == "(" {
			one = append(one, i)
		} else {
			if len(one) > 0 {
				mapp[one[len(one)-1]] = true
				mapp[i] = true
				one = one[:len(one)-1]
			}
		}

	}

	ans, count := 0, 0

	for _, x := range mapp {
		if x == true {
			count++
		} else {
			ans = max(ans, count)
			count = 0
		}
	}
	ans = max(ans, count)

	return ans
}

func main() {
	fmt.Println(longestValidParentheses("(()"))
	fmt.Println(longestValidParentheses(")()())"))
	fmt.Println(longestValidParentheses(""))
	fmt.Println(longestValidParentheses("((()))())"))
	fmt.Println(longestValidParentheses("()()((()(("))
}
