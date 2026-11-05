package main

import (
	"fmt"
	"math"
)

// 4070. Minimum Rotations to Dial a Number I

func minRotations(s string) any {
	ans := 0

	for i := 1; i < len(s); i++ {
		no, prev := int(s[i]), int(s[i-1])
		ans += min(int(math.Abs(float64(no-prev))), (min(no, prev)-0)+((9-max(prev, no))+1))
	}
	ans += min(int(s[0]-'0'), (9-int(s[0]-'0'))+1)
	return ans
}

func main() {
	fmt.Println(minRotations("0192837465"))
	fmt.Println(minRotations("1200210200"))
	fmt.Println(minRotations("6042195975"))
}
