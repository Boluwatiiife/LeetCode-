// 492. Construct the Rectangle
package main

import (
	"fmt"
	"math"
)

func constructRectangle(area int) []int {
	root := math.Floor(math.Sqrt(float64(area)))
	ans := []int{0, 0}
	for root > 0 {
		l := math.Floor(float64(area) / root)
		if l*root == float64(area) {
			ans[0], ans[1] = int(l), int(root)
			break
		}
		root--
	}

	return ans
}

func main() {
	fmt.Println(constructRectangle(4))
	fmt.Println(constructRectangle(37))
	fmt.Println(constructRectangle(122122))
}
