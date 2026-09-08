// 191. Number of 1 Bits
package main

import (
	"fmt"
	"strconv"
	"strings"
)

func hammingWeight(n int) int {
	num := strings.Split(strconv.FormatInt(int64(n), 2), "")
	ans := 0

	for _, val := range num {
		if val == "1" {
			ans++
		}
	}

	return ans
}

func main() {
	fmt.Println(hammingWeight(11))
	fmt.Println(hammingWeight(128))
	fmt.Println(hammingWeight(2147483645))
}
