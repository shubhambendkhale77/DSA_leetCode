 function ListNode(val) {
      this.val = val;
      this.next = null;
  }
  var hasCycle = function(head) {
    let fast = head
    let slow = head

    while(fast!=null && fast.next!=null){
        fast=fast.next.next
        slow=slow.next

        if(fast == slow){
            return true
        }

    }
    return false
};

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
head.next.next.next.next = head.next; // Creating a cycle

console.log(hasCycle(head)); // This should return true
