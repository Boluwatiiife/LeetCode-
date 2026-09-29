// 500. Keyboard Row
package main

import "fmt"

func findWords(words []string) any {
	one := "qwertyuiopQWERTYUIOP"
	two := "asdfghjklASDFGHJKL"
	three := "zxcvbnmZXCVBNM"

	mapp := make(map[string]int)

	for _, x := range one {
		mapp[string(x)] = 1
	}
	for _, x := range two {
		mapp[string(x)] = 2
	}
	for _, x := range three {
		mapp[string(x)] = 3
	}

	ans := []string{}

	for _, word := range words {
		xx := mapp[string(word[0])]
		count := 0
		for _, ch := range word {
			if mapp[string(ch)] != xx {
				count++
				break
			}
		}
		if count == 0 {
			ans = append(ans, word)
		}
	}

	return ans
}

func main() {
	fmt.Println(findWords([]string{"Hello", "Alaska", "Dad", "Peace"}))
	fmt.Println(findWords([]string{"omk"}))
	fmt.Println(findWords([]string{"adsdf", "sfd"}))
}
