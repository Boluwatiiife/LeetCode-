package leetcode

import "fmt"

func primee(num int) bool {
	if num <= 1 {
		return false
	}
	if num <= 3 {
		return true
	}
	if num%2 == 0 || num%3 == 0 {
		return false
	}

	for i := 5; i*i <= num; i += 6 {
		if num%i == 0 || num%(i+2) == 0 {
			return false
		}
	}
	return true

}

func main() {
	fmt.Println(primee(1))
	fmt.Println(primee(2))
	fmt.Println(primee(25))
	fmt.Println(primee(97))
	fmt.Println(primee(100))
}
