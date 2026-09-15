// 326. Power of Three
package main

import "fmt"

// func isPowerOfThree(n int) bool {
func isPowerOfThree(n int) any {
	if n <= 0 {
		return false
	}
	for n%3 == 0 {
		n /= 3
	}
	return n == 1
}

func main() {
	fmt.Println(isPowerOfThree(27))
	fmt.Println(isPowerOfThree(0))
	fmt.Println(isPowerOfThree(-1))
	fmt.Println(isPowerOfThree(32))
	fmt.Println(isPowerOfThree(9))
	fmt.Println(isPowerOfThree(3))
	fmt.Println(isPowerOfThree(45))
}
