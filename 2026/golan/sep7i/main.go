// 205. Isomorphic Strings
package main

import (
	"fmt"
	"slices"
	"strings"
)

// func isIsomorphic(s string, t string) bool {
func isIsomorphic(s string, t string) any {
	one := strings.Split(s, "")
	two := strings.Split(t, "")

	on := []string{one[0]}
	tw := []string{two[0]}

	for i := 1; i < len(one); i++ {
		if slices.Contains(on, one[i]) || slices.Contains(tw, two[i]) {
			dex := max(slices.Index(on, one[i]), slices.Index(tw, two[i]))
			if tw[dex] != two[i] || on[dex] != one[i] {
				return false
			}
		} else {
			on = append(on, one[i])
			tw = append(tw, two[i])
		}
	}

	return true
}

func main() {
	fmt.Println(isIsomorphic("egg", "add"))
	fmt.Println(isIsomorphic("f11", "b23"))
	fmt.Println(isIsomorphic("paper", "title"))
	fmt.Println(isIsomorphic("bbbaaaba", "aaabbbba")) // false
	fmt.Println(isIsomorphic("badc", "baba"))         // false
	fmt.Println(isIsomorphic("babc", "baba"))         // false
	fmt.Println(isIsomorphic("baba", "baba"))         // false

	// one := []string{"a", "b"}
	// two := []string{"a", "c"}
	// fmt.Println(one[0] == two[0])
	// fmt.Println(one[1] == two[1])
}
