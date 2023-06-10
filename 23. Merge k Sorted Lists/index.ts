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

type ListNode = any
function getMinNodeIndex(lists: Array<ListNode | null>): number {
    let min = Infinity;
    let minIndex = -1;

    // We will skip this, if the lists array is empty
    for (let i = 0; i < lists.length; i += 1) {
        // We will skip this, if every list now points to null
        if (lists[i]?.val < min) {
            min = lists[i].val;
            minIndex = i;
        }
    }

    return minIndex;
}
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let mergedCurrent: any = null;
    let mergedRoot = null;

    while (true) {
        const minIndex = getMinNodeIndex(lists);

        if (minIndex === -1) {
            return mergedRoot;
        } else {
            // Create next node
            let nextNode = lists[minIndex];
            // Move doner list along
            lists[minIndex] = nextNode.next;
            // Sever connection
            nextNode.next = null;
            // Move merged list along
            if (mergedCurrent) {
                mergedCurrent.next = nextNode;
            } else {
                mergedRoot = nextNode;
            }
            mergedCurrent = nextNode;
        }
    }
};