// 4020. Elevator Requests I
package main

import (
	"fmt"
	"math"
)

func elevatorRequests(n int, requests []int) int {
	ans := float64(requests[0])

	for i := 1; i < len(requests); i++ {
		ans += math.Abs(float64(requests[i] - requests[i-1]))
	}

	return int(ans)
}

func main() {
	fmt.Println(elevatorRequests(5, []int{2, 1, 4, 3}))
	fmt.Println(elevatorRequests(3, []int{2, 0, 0}))
}
