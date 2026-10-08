// 60. Permutation Sequence
package main

import (
	"fmt"
	"strconv"
)

func getPermutation(n int, k int) string {
	arr := []int{}
	for i := 1; i <= n; i++ {
		arr = append(arr, i)
	}
	ans := ""
	kk, nn := k-1, n-1

	for len(arr) > 0 {
		per := 1
		for i := 1; i <= nn; i++ {
			per *= i
		}
		index := kk / per
		rem := kk - (per * index)
		ans += strconv.Itoa(arr[index])
		arr = append(arr[:index], arr[index+1:]...)
		kk = rem
		nn--
	}
	return ans
}

func main() {
	fmt.Println(getPermutation(3, 3))
	fmt.Println(getPermutation(4, 9))
	fmt.Println(getPermutation(3, 1))

	// one, two := float64(9), float64(6)
	// fmt.Println(0 / 1)
	// fmt.Println(one / two)
	// fmt.Println(math.Ceil(one / two))
	// fmt.Println(math.Floor(one / two))
}
