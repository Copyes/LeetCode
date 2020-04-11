/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let head = new ListNode(-1);
  let current = head;
  let carry = 0;
  let curSum = 0;
  while (l1 || l2 || carry) {
    curSum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = curSum > 9 ? 1 : 0;
    curSum %= 10;

    if(l1) l1 = l1.next;
    if(l2) l2 = l2.next;

    current.next = new ListNode(curSum);
    current = current.next;
  }

  if(carry === 1) {
    current.next = new ListNode(1);
  }
  return head.next;
};