// 4010. Maximize Pair Strength Using GCD
package main

import "fmt"

func maxPairStrength(nums []int) int64 {
	arr := []int{nums[0]}
	ans := 0

	for i := 1; i < len(nums); i++ {
		no := nums[i]
		for _, x := range arr {
			gcd := gcd(no, x)
			ans = max(ans, (no*x)/(gcd*gcd))
		}
		arr = append(arr, no)
	}
	return int64(ans)
}

func main() {
	fmt.Println(maxPairStrength([]int{2, 3, 5}))
	fmt.Println(maxPairStrength([]int{4, 6, 8}))
	fmt.Println(maxPairStrength([]int{3, 3}))
	fmt.Println(maxPairStrength([]int{5, 9, 6}))

	fmt.Println(gcd(9, 6))
	fmt.Println(gcd(9, 5))
	fmt.Println(gcd(6, 3))
}

func gcd(x, y int) int {
	no := min(x, y)
	ans := 0

	for i := 1; i*i <= no; i++ {
		if x%i == 0 && y%i == 0 {
			ans = max(ans, i)
		}
		if i != no/i {
			if x%(no/i) == 0 && y%(no/i) == 0 {
				ans = max(ans, no/i)
			}
		}
	}

	return ans
}
