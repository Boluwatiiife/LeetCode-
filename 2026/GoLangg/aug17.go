// 4. Longest Common Prefix
package leetcode

import "fmt"

func longestCommonPrefix(strs []string) string {
	ans := ""
	temp := string(strs[0][0])
	dex := 0

	for true {
		usee := ""
		for _, word := range strs {
			usee = string(word[dex])
			if string(word[dex]) == temp {
				ans += string(word[dex])
			} else {
				break
			}
		}
		temp = usee
		dex++
	}

	return ans
}

func main() {
	fmt.Println(longestCommonPrefix([]string{"flower", "flow", "flight"}))
	fmt.Println(longestCommonPrefix([]string{"dog", "racecar", "car"}))
}
