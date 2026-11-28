// 4116. Assign Umbrella on Rainy Days
package main

import "fmt"

func assignUmbrella(rain []int) []string {
	ans := []string{}
	alice, bob := 0, 0

	for i := 0; i < len(rain)-1; i++ {
		switch {
		case rain[i] == rain[i+1] && rain[i+1] == 1:
			if alice <= bob {
				ans = append(ans, "Alice")
				alice++
			} else {
				ans = append(ans, "Bob")
				bob++
			}
		case rain[i] == rain[i+1] && rain[i+1] == 1:
			ans = append(ans, "Alice")
			alice++
		case rain[i] == 1:
			ans = append(ans, "Bob")
			bob++
		case rain[i] == 0:
			ans = append(ans, "None")
		}
	}
	if rain[len(rain)-1] == 1 {
		ans = append(ans, "Bob")
	}
	if rain[len(rain)-1] == 0 {
		ans = append(ans, "None")
	}

	return ans
}

func main() {
	fmt.Println(assignUmbrella([]int{1, 1, 0, 1, 1}))
	fmt.Println(assignUmbrella([]int{0, 1, 0, 1}))
	fmt.Println(assignUmbrella([]int{1, 1, 1}))
}
