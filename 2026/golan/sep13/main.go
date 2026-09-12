// 278. First Bad Version
package main

import (
	"fmt"
	"math"
)

func binarySearch(arr []int, n int) int {
	one, two := float64(0), float64(len(arr)-1)
	dex := n

	for one <= two {
		mid := math.Floor((one + two) / 2)
		if arr[int(mid)] < n {
			one = mid + 1

		} else {
			dex = int(mid)
			two = mid - 1
		}

	}
	return dex
}

// func isBadVersionn(arr []int, n int) int {
// 	one, two := float64(1), float64(n)
// 	firstBad := n

// 	for one <= two {
// 		mid := math.Floor((two + one) / 2)
// 		if isBadVersion(mid) {
// 			firstBad = int(mid)
// 			two = mid - 1
// 		} else {
// 			one = mid + 1
// 		}

// 	}
// 	return firstBad
// }

func main() {
	fmt.Println(binarySearch([]int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}, 4))
	fmt.Println(binarySearch([]int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}, 8))
	fmt.Println(binarySearch([]int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}, 5))
	fmt.Println(binarySearch([]int{5, 6, 7, 8, 9}, 5))
	fmt.Println(binarySearch([]int{5, 6, 7, 8, 9}, 6))
}
