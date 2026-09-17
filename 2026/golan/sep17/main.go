// 367. Valid Perfect Square
package main

import "fmt"

func isPerfectSquare(num int) bool {
	if num == 1 {
		return true
	}
	no := num / 2

	for no > 0 {
		if no*no == num {
			return true
		}
		no--
	}
	return false
}

func main() {
	fmt.Println(isPerfectSquare(16))
	fmt.Println(isPerfectSquare(14))
	fmt.Println(isPerfectSquare(4))
	fmt.Println(isPerfectSquare(100))
}
