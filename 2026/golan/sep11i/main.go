// 263. Ugly Number
package main

import "fmt"

func isUgly(n int) bool {
	if n <= 0 {
		return false
	}
	if n == 7 {
		return false
	}
	if n == 9 {
		return true
	}
	// for no := 5; no*no <= n; no += 6 {
	for i := 7; i <= n; i += 2 {
		if i%3 != 0 && isPrime(i) && n%i == 0 {
			return false
		}
	}
	// }
	return true
}
func isPrime(no int) bool {
	// if no%3 == 0 {
	// 	return false
	// }
	for i := 5; i*i <= no; i += 6 {
		if no%i == 0 || no%(i+2) == 0 {
			return false
		}
	}
	return true
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
