// 389. Find the Difference
package main

import "fmt"

func findTheDifference(s string, t string) byte {
	mapp := make([]int, 26)
	var x byte
	for i := 0; i < len(s); i++ {
		mapp[s[i]-'a']++
	}

	for i := 0; i < len(t); i++ {
		if mapp[t[i]-'a'] == 0 {
			x = t[i]
			break
		}
		if mapp[t[i]-'a'] > 0 {
			mapp[t[i]-'a']--
		}
	}
	return x
}

func main() {
	fmt.Println(findTheDifference("abcd", "abcde"))
	fmt.Println(findTheDifference("", "y"))
}
