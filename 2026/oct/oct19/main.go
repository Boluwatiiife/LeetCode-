// 4048. Count Values With Equally Spaced Occurrences I
package main

import "fmt"

func countSpecialIntegers(nums []int) any {
	arr := make([][]int, 101)

	for i, no := range nums {
		arr[no] = append(arr[no], i)
	}
	ans := 0

	for _, num := range arr {
		if len(num) == 3 {
			if num[1]-num[0] == num[2]-num[1] {
				ans++
			}
		}
	}

	return ans
}

func main() {
	fmt.Println(countSpecialIntegers([]int{1, 8, 1, 5, 1, 5, 8, 5}))
	fmt.Println(countSpecialIntegers([]int{8, 8, 8, 8}))
	fmt.Println(countSpecialIntegers([]int{8, 6, 6, 8, 8}))
}
