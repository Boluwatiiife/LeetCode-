// 119. Pascal's Triangle II
package main

import "fmt"

func generate(num int) []int {
	arr := [][]int{{1}, {1, 1}}

	for i := 2; i <= num; i++ {
		temp := []int{1}
		n := len(arr)
		one := arr[n-1]
		for j := 1; j < len(one); j++ {
			temp = append(temp, one[j]+one[j-1])
		}
		temp = append(temp, 1)
		arr = append(arr, temp)
	}

	return arr[num]
}

func main() {
	fmt.Println(generate(3))
	fmt.Println(generate(0))
	fmt.Println(generate(1))
}
