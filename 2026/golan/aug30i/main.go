// 69. Sqrt(x)
package main

import "fmt"

func mySqrt(x int) int {
	one, two := 1, 1

	for {
		if one*two > x {
			break
		}
		one++
		two++
	}

	return one - 1
}

func main() {
	fmt.Println(mySqrt(4))
	fmt.Println(mySqrt(8))
	fmt.Println(mySqrt(9))
}
