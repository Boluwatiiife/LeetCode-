// 258. Add Digits
package main

import (
	"fmt"
)

// func addDigits(num int) int {
func addDigits(num int) any {
	// temp := strconv.Itoa(num)

	// for {
	// 	if len(temp) == 1 {
	// 		ans, _ := strconv.Atoi(temp)
	// 		return ans
	// 	}
	// 	arr := strings.Split(temp, "")
	// 	x := 0
	// 	for _, val := range arr {
	// 		a, _ := strconv.Atoi(val)
	// 		x += a
	// 	}
	// 	temp = strconv.Itoa(x)
	// }

	if num == 0 {
		return 0
	}
	if num%9 == 0 {
		return 9
	}
	return num % 9
}

func main() {
	fmt.Println(addDigits(38))
	fmt.Println(addDigits(0))
	fmt.Println(addDigits(78))
}
