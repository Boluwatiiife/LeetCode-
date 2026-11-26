// 3360. Stone Removal Game
package main

import "fmt"

func canAliceWin(n int) bool {
	num, turn := 10, 0

	for n > 0 {
		if n >= num {
			n -= num
			turn++
			num--
		} else {
			break
		}
	}
	if turn%2 != 0 {
		return true
	}
	return false
}

func main() {
	fmt.Println(canAliceWin(12))
	fmt.Println(canAliceWin(1))
}
