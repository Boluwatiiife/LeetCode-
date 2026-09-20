// 434. Number of Segments in a String
package main

import (
	"fmt"
	"strings"
)

func countSegments(s string) any {
	return len(strings.Fields(s))
}

func main() {
	fmt.Println(countSegments("Hello, my name is John"))
	fmt.Println(countSegments("hello"))
	fmt.Println(countSegments(""))
	fmt.Println(countSegments("                "))
}
