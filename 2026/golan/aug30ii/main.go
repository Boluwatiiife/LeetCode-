// 70. Climbing Stairs

package main

import "fmt"

func climbStairs(n int) int {
	arr := make([]int, n+1)
	arr[0] = 1
	arr[1] = 1

	for i := 2; i < len(arr); i++ {
		arr[i] = arr[i-1] + arr[i-2]
	}

	return arr[n]
}

func main() {
	fmt.Println(climbStairs(2))
	fmt.Println(climbStairs(3))
	fmt.Println(climbStairs(45))
}
