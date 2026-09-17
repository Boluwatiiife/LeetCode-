// 374. Guess Number Higher or Lower
package main

/**
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * func guess(num int) int;
 */

func guessNumber(n int) int {
	if guess(n) == 0 {
		return n
	}
	no := n / 2
	low, high := 1, n
	for {
		ans := guess(no)
		if ans == 1 {
			low = no
			no = (no + high) / 2
		}
		if ans == -1 {
			high = no
			no = (no + low) / 2
		}
		if ans == 0 {
			return no
		}
	}
}
func guess(num int) int
