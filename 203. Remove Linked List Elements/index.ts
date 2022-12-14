/**
 * Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

 

Example 1:


Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
Example 2:

Input: head = [], val = 1
Output: []
Example 3:
Input: head = [7,7,7,7], val = 7
Output: []
 * @param head 
 * @param val 
 * @returns 
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
    let dummy = new ListNode(-1)
    
    dummy.next = head
    let prev = dummy
    let cur = head
    
    while (cur) {
        if (cur.val === val) {
            prev.next = cur.next;
            cur = cur.next;
        }
        else {
            prev = cur;
            cur = cur.next;
        }
    }
    return dummy.next
};