// 678. Valid Parenthesis String
package main

import "fmt"

func checkValidString(s string) any {
	front := []int{}
	star := []int{}

	for i, x := range s {
		ch := string(x)

		switch {
		case ch == "(":
			front = append(front, i)
		case ch == ")":
			if len(front) > 0 {
				front = front[:len(front)-1]
			} else if len(star) > 0 {
				star = star[:len(star)-1]
			} else {
				return false
			}
		case ch == "*":
			star = append(star, i)
		}
	}
	fron, sta := len(front)-1, len(star)-1

	for fron >= 0 && sta >= 0 {
		if star[sta] < front[fron] {
			return false
		}
		fron--
		sta--
	}
	return fron == -1
}

func main() {
	fmt.Println(checkValidString("()"))
	fmt.Println(checkValidString("(*)"))
	fmt.Println(checkValidString("(*))"))
	fmt.Println(checkValidString("("))
	fmt.Println(checkValidString("(()*"))
	fmt.Println(checkValidString("(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"))
	fmt.Println(checkValidString("((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()"))
}
