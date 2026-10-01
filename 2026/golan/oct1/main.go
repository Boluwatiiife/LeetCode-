// 507. Perfect Number
package main

import (
	"fmt"
	"math"
)

func checkPerfectNumber(num int) any {
	if num == 1 {
		return false
	}
	ans := 0

	for i := 1; i <= int(math.Sqrt(float64(num))); i++ {
		if num%i == 0 {
			ans += i
			ans += num / i
		}
	}

	return ans-num == num
}

func main() {
	fmt.Println(checkPerfectNumber(28))
	fmt.Println(checkPerfectNumber(7))
}
