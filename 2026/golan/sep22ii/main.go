// 463. Island Perimeter
package main

import "fmt"

func islandPerimeter(grid [][]int) int {
	ans := 0

	for row := 0; row < len(grid); row++ {
		for col := 0; col < len(grid[0]); col++ {
			if grid[row][col] == 1 {
				ans += 4
				if col-1 >= 0 && grid[row][col-1] == 1 {
					ans--
				}
				if col+1 < len(grid[0]) && grid[row][col+1] == 1 {
					ans--
				}
				if row-1 >= 0 && grid[row-1][col] == 1 {
					ans--
				}
				if row+1 < len(grid) && grid[row+1][col] == 1 {
					ans--
				}
			}
		}
	}

	return ans
}

func main() {
	fmt.Println(islandPerimeter([][]int{{0, 1, 4, 0}, {1, 1, 1, 0}, {0, 1, 0, 0}, {1, 1, 0, 0}}))
	fmt.Println(islandPerimeter([][]int{{1}}))
	fmt.Println(islandPerimeter([][]int{{1, 0}}))
}
