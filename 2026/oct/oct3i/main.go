// 20. Valid Parentheses
package main

import "fmt"

func isValid(s string) any {
	mapp := make(map[string]string)
	mapp["]"] = "["
	mapp["}"] = "{"
	mapp[")"] = "("

	one := []string{}

	for _, x := range s {
		ch := string(x)

		if ch == ")" || ch == "}" || ch == "]" {
			if len(one) > 0 && mapp[ch] != one[len(one)-1] {
				return false
			} else {
				if len(one) > 0 {
					one = one[:len(one)-1]
				} else {
					return false
				}
			}
		} else {
			one = append(one, ch)
		}
	}

	return len(one) == 0
}

func main() {
	fmt.Println(isValid("()"))
	fmt.Println(isValid("()[]{}"))
	fmt.Println(isValid("(]"))
	fmt.Println(isValid("([])"))
	fmt.Println(isValid("([)]"))
	fmt.Println(isValid("([]))"))
	fmt.Println(isValid("("))
	fmt.Println(isValid("(("))
}
