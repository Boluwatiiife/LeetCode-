// 3483. Unique 3-Digit Even Numbers
package main

import (
	"fmt"
	"slices"
	"strconv"
)

// func totalNumbers(digits []int) int {
func totalNumbers(digits []int) any {
	ans := 0
	arr := []int{}

	for i := 0; i < len(digits); i++ {
		for j := 0; j < len(digits); j++ {
			for k := 0; k < len(digits); k++ {
				if i != j && j != k && i != k && digits[i] != 0 && digits[k]%2 == 0 {
					x := strconv.Itoa(digits[i]) + strconv.Itoa(digits[j]) + strconv.Itoa(digits[k])
					y, _ := strconv.Atoi(x)
					if !slices.Contains(arr, y) {
						ans++
					}
					arr = append(arr, y)
				}
			}
		}
	}

	// return arr
	return ans
}

func main() {
	fmt.Println(totalNumbers([]int{1, 2, 3, 4}))
	fmt.Println(totalNumbers([]int{0, 2, 2}))
	fmt.Println(totalNumbers([]int{6, 6, 6}))
	fmt.Println(totalNumbers([]int{1, 3, 5}))
	fmt.Println(totalNumbers([]int{9, 5, 2}))
}
