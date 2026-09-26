// 1807. Evaluate the Bracket Pairs of a String
package main

import "fmt"

func evaluate(s string, knowledge [][]string) any {
	mapp := map[string]string{}
	for _, x := range knowledge {
		mapp[x[0]] = x[1]
	}
	ans := ""

	for i := 0; i < len(s); i++ {
		x := s[i]
		if x == '(' {
			temp := ""
			var k int
			for j := i + 1; ; j++ {
				if s[j] == ')' {
					k = j
					break
				}
				temp += string(s[j])
			}
			if mapp[temp] != "" {
				ans += mapp[temp]
			} else {
				ans += "?"
			}
			i = k
		} else if x != ')' {
			ans += string(x)
		}
	}

	return ans
}

func main() {
	fmt.Println(evaluate("(name)is(age)yearsold", [][]string{{"name", "bob"}, {"age", "two"}}))
	fmt.Println(evaluate("hi(name)", [][]string{{"a", "b"}}))
	fmt.Println(evaluate("(a)(a)(a)aaa", [][]string{{"a", "yes"}}))
}
