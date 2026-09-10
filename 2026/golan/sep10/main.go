// 231. Power of Two
package main

import "fmt"

func isPowerOfTwo(n int) bool {
	if n == 1 || n == 2 {
		return true
	}
	x := 2

	for {
		x *= 2
		if x == n {
			return true
		}
		if x > n {
			return false
		}
	}
}

func main() {
	fmt.Println(isPowerOfTwo(1))
	fmt.Println(isPowerOfTwo(16))
	fmt.Println(isPowerOfTwo(3))
}
