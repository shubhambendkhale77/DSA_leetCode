var deleteDuplicates = function(head) {
    if (!head) return head;

    let current = head;
    let prev = null;
    let seen = new Set();

    while (current) {
        if (seen.has(current.val)) {
            prev.next = current.next; // Remove duplicate node
        } else {
            seen.add(current.val);
            prev = current;
        }
        current = current.next;
    }

    return head;
}

console.log(deleteDuplicates([1,1,2]))

