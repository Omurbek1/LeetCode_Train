
function reverseList(head: ListNode | null): ListNode | null {
    let prev = null
    while (head !== null) {
        let nextNode = head.next;
        head.next = prev;
        prev = head;
        head=nextNode
        
    }
    return prev
};