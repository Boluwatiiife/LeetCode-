// 4061. Minimum Queen Moves to Reach Target
package main

import (
	"fmt"
	"math"
)

func minQueenMoves(source []int, target []int) int {
	one, two, onee, twoo := source[0], source[1], target[0], target[1]
	switch {
	case one == onee && two == twoo:
		return 0
	case one == twoo && two == onee:
		return 1
	case math.Abs(float64(one-onee)) == math.Abs(float64(two-twoo)):
		return 1
	case one == onee || two == twoo:
		return 1
	default:
		return 2
	}
}

func main() {
	fmt.Println(minQueenMoves([]int{8, 1}, []int{1, 8}))
	fmt.Println(minQueenMoves([]int{4, 2}, []int{1, 3}))
	fmt.Println(minQueenMoves([]int{1, 1}, []int{1, 1}))
	fmt.Println(minQueenMoves([]int{4, 4}, []int{4, 5}))
}
