package leetcode

import "testing"

func removeElement(nums []int, val int) int {

	return 223
}

func TestReoveDuplicates(t *testing.T) {
	nums := []int{1, 1, 2}
	expected := 2

	k := removeDuplicates(nums)

	if k != expected {
		t.Errorf("expected %d, got %d", expected, k)
	}
}
