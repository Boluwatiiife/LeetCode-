// 509. Fibonacci Number
package main

import "fmt"

func fib(n int) int {
	one, two := 1, 1

	for i := 2; i < n; i++ {
		prev := two
		two = one + two
		one = prev
	}
	return two
}

func main() {
	fmt.Println(fib(2))
	fmt.Println(fib(3))
	fmt.Println(fib(4))
	fmt.Println(fib(9))
}
