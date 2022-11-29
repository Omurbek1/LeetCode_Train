const reverse = head => {
    let cur = head;
    let prev = null
    
    let next;

    while (cur) {
        next = cur.next
        cur.next = prev
        cur=next
    }
    return prev
}


function isPalindrome(head: ListNode | null): boolean {

    let fast = head
    let slow = head
    let startPointter = head
    let len = 0
    
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        len++
    }

    let mid = reverse(slow)
    
    while (len) {
        len--

        if (mid.val !== startPointter.val) return false
        mid = mid.next
        startPointter=startPointter.next
    }
    return true
};