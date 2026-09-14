// 836. Rectangle Overlap
package main

import "fmt"

func isRectangleOverlap(rec1 []int, rec2 []int) bool {
	r1x1, r1y1, r1x2, r1y2 := rec1[0], rec1[1], rec1[2], rec1[3]
	r2x1, r2y1, r2x2, r2y2 := rec2[0], rec2[1], rec2[2], rec2[3]

	if r1y1 > r2y2 {
		if r1y1 < r2y2 && r1x1 < r2x2 && r2x2 > r1x1 {
			return true
		}
	} else {
		if r2y1 < r1y2 && r2x1 < r1x2 && r2x2 > r1x1 {
			return true
		}
	}

	return false
}

func main() {
	fmt.Println(isRectangleOverlap([]int{0, 0, 2, 2}, []int{1, 1, 3, 3}))
	fmt.Println(isRectangleOverlap([]int{0, 0, 1, 1}, []int{1, 0, 2, 1}))
	fmt.Println(isRectangleOverlap([]int{0, 0, 1, 1}, []int{2, 2, 3, 3}))
	fmt.Println(isRectangleOverlap([]int{1, 1, 3, 4}, []int{2, 3, 3, 5}))
	fmt.Println(isRectangleOverlap([]int{0, 0, 4, 4}, []int{1, 0, 2, 3}))
	fmt.Println(isRectangleOverlap([]int{2, 17, 6, 20}, []int{3, 8, 6, 20}))
	fmt.Println(isRectangleOverlap([]int{5, 15, 8, 18}, []int{0, 3, 7, 9}))
	fmt.Println(isRectangleOverlap([]int{4, 0, 6, 6}, []int{-5, -3, 4, 2}))
	fmt.Println(isRectangleOverlap([]int{5, 0, 6, 6}, []int{-5, -3, 4, 2}))
}
