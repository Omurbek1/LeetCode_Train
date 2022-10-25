const deleteDuplicates = function(head) {

    let dummy = new List(-Infinity, head)
    let curr = head
    let prev = dummy;

    while (curr) {
        if (curr.val === prev.val) {
            while (curr && curr.val===prev.val) {
                curr = curr.next;

            }
            prev.next=curr
             
        } else {
            prev.next = curr
            curr=curr.next
        }
        
    }
return dummy.next
};