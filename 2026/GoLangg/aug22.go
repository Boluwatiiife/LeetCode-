// 3622. Check Divisibility by Digit Sum and Product

package main

import (
	"fmt"
	"strconv"
)

func checkDivisibility(n int) bool {
	str := strconv.Itoa(n)
	digits := []int{}
	for _, num := range str {
		dig := int(num - '0')
		digits = append(digits, dig)
	}

	sum := 0
	product := 1

	for _, no := range digits {
		sum += no
		product *= no
	}

	return n%(sum+product) == 0
}

func main() {
	fmt.Println(checkDivisibility(99))
	fmt.Println(checkDivisibility(23))
	fmt.Println(checkDivisibility(8))
	fmt.Println(checkDivisibility(18))
}
