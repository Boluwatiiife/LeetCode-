// 263. Ugly Number
package main

import "fmt"

func isUgly(n int) bool {
	if n <= 0 {
		return false
	}

	temp := n
	for {
		if temp%2 == 0 {
			temp /= 2
		}
		if temp%3 == 0 {
			temp /= 3
		}
		if temp%5 == 0 {
			temp /= 5
		}
		if temp == 1 {
			return true
		}
		if temp%2 != 0 && temp%3 != 0 && temp%5 != 0 {
			return false
		}
	}

}

func main() {
	fmt.Println(isUgly(6))
	fmt.Println(isUgly(1))
	fmt.Println(isUgly(14))
	fmt.Println(isUgly(5))
	fmt.Println(isUgly(-2147483648))
	fmt.Println(isUgly(937351770))
	fmt.Println(isUgly(9))
	fmt.Println(isUgly(15))
	fmt.Println(isUgly(11))
}
