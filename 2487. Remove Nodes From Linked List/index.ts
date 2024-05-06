/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNodes(head: ListNode | null): ListNode | null {
  const stack: ListNode[] = [];
  while (head !== null) {
    while (stack.length > 0 && stack[stack.length - 1].val < head.val) {
      stack.pop();
    }
    stack.push(head);
    head = head.next;

  }
  stack.reduce((prev, curr) => {
    prev.next = curr;
    return curr
  })
  return stack[0]
}
