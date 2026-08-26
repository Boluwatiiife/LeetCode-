// 3345. Smallest Divisible Digit Product I
package leetcode

import (
	"fmt"
)

func smallestNumber(n int, t int) int {

	for x := n; ; x++ {
		if digitProduct(x)%t == 0 {
			return x
		}
	}
}
func digitProduct(x int) int {
	product := 1
	for {
		product *= x % 10
		x /= 10
		if x == 0 {
			break
		}
	}
	return product
}

func main() {
	fmt.Println(smallestNumber(10, 2))
	fmt.Println(smallestNumber(15, 3))
}
