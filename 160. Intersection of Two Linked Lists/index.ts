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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {

    if (headA || headB) return null

    let pointA = headA;
    let pointB = headB;

    while (pointA !== pointB) {
        if (pointA === null) {
            pointA = headB
        } else {
            pointA = pointA.next
        }
        if (pointB === null) {
            pointB = headA
        } else {
            pointB = pointB.next
        }
    }
    return pointA
};