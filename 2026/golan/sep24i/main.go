// 482. License Key Formatting
package main

import (
	"fmt"
	"strings"
)

func licenseKeyFormatting(s string, k int) any {
	ans := ""
	result := ""
	count := 0

	for i := len(s) - 1; i >= 0; i-- {
		x := strings.ToUpper(string(s[i]))

		if x != "-" {
			ans = x + ans
			count++
		}
		if count == k && i > 0 {
			result = "-" + ans + result
			ans = ""
			count = 0
		}
	}
	if count > 0 {
		result = ans + result
	}
	if len(result) > 0 && result[0] == '-' {
		xx, _ := strings.CutPrefix(result, "-")
		result = xx
	}
	return result
}

func main() {
	fmt.Println(licenseKeyFormatting("5F3Z-2e-9-w", 4))
	fmt.Println(licenseKeyFormatting("2-5g-3-J", 2))
	fmt.Println(licenseKeyFormatting("--a-a-a-a--", 2))
}
