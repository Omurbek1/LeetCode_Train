var deleteMiddle = function(head) {
    let prev
    let slow = head
    let fast = head
    while (fast && fast.next) {
        prev = slow
        slow = slow.next
        fast=fast.next.next
    }
    if (!prev) return null
    prev.next = slow.next
    return head
};