// 496. Next Greater Element I
package main

import "fmt"

func nextGreaterElement(nums1 []int, nums2 []int) any {
	mapp := make(map[int]int)
	arr := []int{}

	for i := len(nums2) - 1; i >= 0; i-- {
		no := nums2[i]
		if len(arr) == 0 {
			mapp[no] = -1
		} else {
			for arr[len(arr)-1] <= no && len(arr) > 0 {
				arr = arr[:len(arr)-1]
				if len(arr) == 0 {
					break
				}
			}
			if len(arr) > 0 {
				mapp[no] = arr[len(arr)-1]
			} else {
				mapp[no] = -1
			}
		}
		arr = append(arr, no)
	}

	for i, no := range nums1 {
		nums1[i] = mapp[no]
	}

	return nums1
}

func main() {
	fmt.Println(nextGreaterElement([]int{4, 1, 2}, []int{1, 3, 4, 2}))
	fmt.Println(nextGreaterElement([]int{2, 4}, []int{1, 2, 3, 4}))
}
