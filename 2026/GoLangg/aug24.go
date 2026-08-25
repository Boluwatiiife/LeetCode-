// 20. Valid Parentheses
package main

import "fmt"

func isValid(s string) bool {
	arr := []string{}

	for _, v := range s {
		temp := string(v)

		if temp == "(" || temp == "{" || temp == "[" {
			arr = append(arr, temp)
		} else if temp == ")" {
			if len(arr) > 0 && arr[len(arr)-1] == "(" {
				arr = arr[:len(arr)-1]
			} else {
				return false
			}
		} else if temp == "}" {
			if len(arr) > 0 && arr[len(arr)-1] == "{" {
				arr = arr[:len(arr)-1]
			} else {
				return false
			}
		} else if temp == "]" {
			if len(arr) > 0 && arr[len(arr)-1] == "[" {
				arr = arr[:len(arr)-1]
			} else {
				return false
			}
		}

	}

	return len(arr) == 0
}

func main() {
	fmt.Println(isValid("()"))
	fmt.Println(isValid("()[]{}"))
	fmt.Println(isValid("(]"))
	fmt.Println(isValid("([])"))
	fmt.Println(isValid("([)]"))
	fmt.Println(isValid("]"))
	fmt.Println(isValid("["))
}
