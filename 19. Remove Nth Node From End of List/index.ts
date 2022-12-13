
// 19. Remove Nth Node From End of List

const removeNthFromEnd = function (head, n) {
    let dummyHead = new ListNode(-Infinity)
    dummyHead.next = head
    let resultHead = dummyHead
    let counnt = 0;
    let tail = head

    while (counnt < n) {
        counnt ++
        tail = tail.next
    }
    let removedNode = head
    let prev = dummyHead;

    while (tail) {
        tail = tail.next
        removedNode = removedNode.next
        prev = prev.next
    }
    prev.next = removedNode.next
    return resultHead.next
};