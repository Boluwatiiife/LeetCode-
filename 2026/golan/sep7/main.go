// 202. Happy Number
package main

import (
	"fmt"
	"slices"
	"strconv"
	"strings"
)

func isHappy(n int) bool {
	temp := n
	check := []int{}

	for {
		arr := strings.Split(strconv.Itoa(temp), "")
		num := 0
		for _, val := range arr {
			no, _ := strconv.Atoi(val)
			num += (no * no)
		}
		boo := slices.Contains(check, num)
		if boo {
			return false
		}
		if num == 1 {
			return true
		}
		temp = num
		check = append(check, num)
	}

	// return true
}

func main() {
	fmt.Println(isHappy(19))
	fmt.Println(isHappy(2))
	fmt.Println(isHappy(43))
}
