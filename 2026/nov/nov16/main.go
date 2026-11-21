// 2243. Calculate Digit Sum of a String
package main

import "fmt"

func digitSum(s string, k int) any {
	arr := ""

	count, temp := 0, 0
	for _, no := range s {
		temp += int(no - '0')
		count++
		if count == k {
			arr += string(temp)
			count = 0
			temp = 0
		}
	}
	arr += string(temp)

	count, temp = 0, 0
	for len(arr) > 3 {
	}
	return arr
}

func main() {
	fmt.Println(digitSum("11111222223", 3))
	fmt.Println(digitSum("00000000", 3))
}
