// 4078. Three Fibonacci Sum
package main

import "fmt"

func threeFibonacciSum(n int) bool {
	arr := []int{0, 1}

	for true {
		temp := arr[len(arr)-1] + arr[len(arr)-2]
		arr = append(arr, temp)
		ans := arr[len(arr)-1] + arr[len(arr)-2] + arr[len(arr)-3]
		if ans == n {
			return true
		}
		if ans > n {
			break
		}

	}
	return false
}

func main() {
	fmt.Println(threeFibonacciSum(16))
	fmt.Println(threeFibonacciSum(8))
	fmt.Println(threeFibonacciSum(2))
}
