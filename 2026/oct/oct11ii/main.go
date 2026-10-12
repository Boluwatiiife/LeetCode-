// 921. Minimum Add to Make Parentheses Valid
package main

import "fmt"

func minAddToMakeValid(s string) int {
	front := []int{}
	back := 0

	for i, ch := range s {
		if ch == '(' {
			front = append(front, i)
		} else {
			if len(front) > 0 {
				front = front[:len(front)-1]
			} else {
				back++
			}
		}
	}
	return len(front) + back
}

func main() {
	fmt.Println(minAddToMakeValid("())"))
	fmt.Println(minAddToMakeValid("((("))
}
