// 441. Arranging Coins
package main

import "fmt"

func arrangeCoins(n int) int {
	ans := 1

	for n >= ans {
		n -= ans
		ans++
	}
	return ans - 1
}

func main() {
	fmt.Println(arrangeCoins(5))
	fmt.Println(arrangeCoins(8))
	fmt.Println(arrangeCoins(6))
}
