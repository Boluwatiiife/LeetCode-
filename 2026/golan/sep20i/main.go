// 3498. Reverse Degree of a String
package main

import "fmt"

func reverseDegree(s string) int {
	ans := 0
	for i, x := range s {
		ans += (i + 1) * (27 - int(x-'a'+1))
	}

	return ans
}

func main() {
	fmt.Println(reverseDegree("abc"))
	fmt.Println(reverseDegree("zaza"))
}
