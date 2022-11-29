/**
 * 234. Palindrome Linked List
Easy
12.5K
700
Companies
Given the head of a singly linked list, return true if it is a 
palindrome
 or false otherwise.

 

Example 1:


Input: head = [1,2,2,1]
Output: true
Example 2:


Input: head = [1,2]
Output: false
 * @param head 
 * @returns 
 */


const reverse = head => {
    let cur = head;
    let prev = null
    let next;

    while (cur) {
        next = cur.next
        cur.next = prev
        prev=cur
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
        if (mid.val!== startPointter.val) return false
        mid = mid.next
        startPointter=startPointter.next
    }
    return true
};