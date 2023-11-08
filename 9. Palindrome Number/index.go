func isPalindrome(x int) bool {
	let := strconv.Itoa(x)
	for i, j := 0, len(let)-1; i < j; i, j = i+1, j-1 {
		if let[i] != let[j] {
			return false
		}
	}
	return true
    
}