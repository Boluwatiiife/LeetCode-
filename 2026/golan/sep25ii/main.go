// 495. Teemo Attacking
package main

import "fmt"

func findPoisonedDuration(timeSeries []int, duration int) int {
	ans := 0

	for i := 0; i < len(timeSeries)-1; i++ {
		if timeSeries[i+1]-timeSeries[i] < duration {
			ans += timeSeries[i+1] - timeSeries[i]
		} else {
			ans += duration
		}
	}
	ans += duration
	return ans
}

func main() {
	fmt.Println(findPoisonedDuration([]int{1, 4}, 2))
	fmt.Println(findPoisonedDuration([]int{1, 2}, 2))
	fmt.Println(findPoisonedDuration([]int{1, 2}, 3))
	fmt.Println(findPoisonedDuration([]int{1, 2, 7}, 3))
	fmt.Println(findPoisonedDuration([]int{1, 2, 3, 4, 5, 6, 7, 8, 9}, 1))
	fmt.Println(findPoisonedDuration([]int{89, 231}, 5))
}
