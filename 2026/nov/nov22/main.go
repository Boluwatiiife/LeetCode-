// 2124. Check if All A's Appears Before All B's
package main

import "fmt"

func checkString(s string) bool {
	b_dex := []int{}

	for i, ch := range s {
		if ch == 'b' {
			b_dex = append(b_dex, i)
		}
		if ch == 'a' {
			if len(b_dex) > 0 {
				return false
			}
		}
	}
	return true
}

func main() {
	fmt.Println(checkString("aaabbb"))
	fmt.Println(checkString("abab"))
	fmt.Println(checkString("bbb"))
}
