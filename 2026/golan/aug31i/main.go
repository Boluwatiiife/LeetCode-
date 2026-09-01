// 118. Pascal's Triangle
package main

import "fmt"

func generate(numRows int) [][]int {
	arr := [][]int{{1}, {1, 1}}
	if numRows == 1 {
		return arr[:1]
	}

	for i := 2; i < numRows; i++ {
		temp := arr[len(arr)-1]
		neww := []int{1}
		for j := 1; j < len(temp); j++ {
			neww = append(neww, temp[j]+temp[j-1])
		}
		neww = append(neww, 1)
		arr = append(arr, neww)

	}
	return arr
}

func main() {
	fmt.Println(generate(5))
	fmt.Println(generate(1))
}
