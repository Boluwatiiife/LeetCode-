// 90. Reverse Bits
package main

import (
	"fmt"
	"strconv"
	"strings"
)

// func reverseBits(n int) int {
func reverseBits(n int) any {
	num := strings.Split(strconv.FormatInt(int64(n), 2), "")
	arr := []string{}

	for i := len(num) - 1; i >= 0; i-- {
		arr = append(arr, num[i])
	}
	for {
		if len(arr) < 32 {
			arr = append(arr, "0")
		} else {
			break
		}
	}
	arrr := strings.Join(arr, "")

	result, _ := strconv.ParseInt(arrr, 2, 64)

	return int(result)
}

func main() {
	fmt.Println(reverseBits(43261596))
	fmt.Println(reverseBits(2147483644))
}
