// 4024. Nearest Available Drone
package main

import (
	"fmt"
	"math"
)

func nearestDrone(drones [][]int, target []int) any {
	arr := []int{}
	dex := -1

	for i, a := range drones {
		one, two, rang := a[0], a[1], a[2]
		ans := math.Abs(float64(one-target[0])) + math.Abs(float64(two-target[1]))
		if ans <= float64(rang) {
			if len(arr) > 0 {
				if int(ans) < arr[len(arr)-1] {
					dex = i
				} else {
					arr = append(arr, int(ans))
				}
			} else {
				dex = i
				arr = append(arr, int(ans))
			}
		}
	}
	return dex
}

func main() {
	fmt.Println(nearestDrone([][]int{{0, 0, 8}, {2, 2, 9}}, []int{3, 4}))
	fmt.Println(nearestDrone([][]int{{2, 1, 5}, {4, 4, 5}, {6, 6, 8}}, []int{5, 5}))
	fmt.Println(nearestDrone([][]int{{4, 4, 5}}, []int{8, 6}))
	fmt.Println(nearestDrone([][]int{{-2, -3, 95}, {12, -24, 98}, {15, -4, 49}}, []int{-19, 2}))

	// fmt.Println(math.Abs(15 - (-19)))
	// fmt.Println(math.Abs(2 - (-4)))
}
