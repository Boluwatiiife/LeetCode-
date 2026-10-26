// 4056. Number of Intersecting Interval Pairs I
package main

import "fmt"

func countIntersectingIntervals(intervals [][]int) int {
	ans := 0

	for i, arr := range intervals {
		for j := i + 1; j < len(intervals); j++ {
			temp := intervals[j]
			if temp[0] <= arr[1] && temp[1] >= arr[0] {
				ans++
			}
		}
	}
	return ans
}

func main() {
	fmt.Println(countIntersectingIntervals([][]int{{1, 2}, {2, 3}, {3, 4}}))
	fmt.Println(countIntersectingIntervals([][]int{{1, 5}, {2, 4}, {3, 6}}))
	fmt.Println(countIntersectingIntervals([][]int{{1, 2}, {3, 4}, {5, 6}}))
}
