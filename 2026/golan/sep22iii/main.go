// 476. Number Complement
package main

import (
	"fmt"
	"strconv"
)

func findComplement(num int) any {
	x := strconv.FormatInt(int64(num), 2)
	var xx string

	for _, i := range x {
		if i == '1' {
			xx += "0"
		}
		if i == '0' {
			xx += "1"
		}
	}

	ans, _ := strconv.ParseInt(xx, 2, 64)

	return int(ans)
}

func main() {
	fmt.Println(findComplement(5))
	fmt.Println(findComplement(1))
}
