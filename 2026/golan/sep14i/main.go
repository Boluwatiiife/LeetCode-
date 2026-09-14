// 292. Nim Game
package main

import "fmt"

func canWinNim(n int) bool {
	if n%4 == 0 {
		return false
	}
	return true
}

func main() {
	fmt.Println(canWinNim(4))
	fmt.Println(canWinNim(1))
	fmt.Println(canWinNim(2))
	fmt.Println(canWinNim(6))
	fmt.Println(canWinNim(8))
	fmt.Println(canWinNim(24))
}
