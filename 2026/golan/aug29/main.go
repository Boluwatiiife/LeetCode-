// 67. Add Binary

package main

import (
	"fmt"
	"strconv"
	"strings"
)

func addBinary(a string, b string) any {
	maxx := max(len(a), len(b))
	arr11, arr22 := strings.Split(a, ""), strings.Split(b, "")
	arr1 := make([]int, len(arr11))
	arr2 := make([]int, len(arr22))

	for i, s := range arr11 {
		val, _ := strconv.Atoi(s)
		arr1[i] = val
	}
	for i, s := range arr22 {
		val, _ := strconv.Atoi(s)
		arr2[i] = val
	}

	if len(arr1) < len(arr2) {
		count := maxx - len(arr1)
		pref := make([]int, count)

		arr1 = append(pref, arr1...)
	}
	if len(arr2) < len(arr1) {
		count := maxx - len(arr2)
		pref := make([]int, count)

		arr2 = append(pref, arr2...)
	}
	arr1 = append([]int{0}, arr1...)
	arr2 = append([]int{0}, arr2...)

	ans := []int{}

	for i := maxx; i >= 0; i-- {
		switch {
		case arr1[i]+arr2[i] == 0:
			{
				ans = append([]int{0}, ans...)
			}
		case arr1[i]+arr2[i] == 1:
			{
				ans = append([]int{1}, ans...)
			}
		case arr1[i]+arr2[i] == 2:
			{
				ans = append([]int{0}, ans...)
				arr1[i-1]++
			}
		case arr1[i]+arr2[i] == 3:
			{
				ans = append([]int{1}, ans...)
				arr1[i-1]++
			}
		}
	}

	for i, val := range ans {
		if val > 0 {
			ans = ans[i:]
			break
		}
	}

	var sb strings.Builder
	for _, no := range ans {
		sb.WriteString(strconv.Itoa(no))
	}

	result := sb.String()
	if ans[0] == 0 {
		return "0"
	}
	return result
}

func main() {
	fmt.Println(addBinary("11", "1"))
	fmt.Println(addBinary("1010", "1011"))
	fmt.Println(addBinary("1111", "1111"))
	fmt.Println(addBinary("0", "0"))
	fmt.Println(addBinary("0001", "0000"))
	fmt.Println(addBinary("00000", "0000"))
}
