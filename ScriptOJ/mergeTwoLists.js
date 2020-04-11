/**
 * 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
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
var mergeTwoLists = function(l1, l2) {
  if(l1 === null) {
    return l2
  }

  if(l2 === null) {
    return l1;
  }

  if(l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2
  } 
};

var mergeTwoLists = function(l1, l2) {
  let head = current =  new ListNode('head');
  while(l1 || l2) {
    if(!l2) {
      current.next = new ListNode(l1.val);
      l1 = l1.next;
    } else if(!l1) {
      current.next = new ListNode(l2.val);
      l2 = l2.next;
    } else if(l1.val > l2.val) {
      current.next = new ListNode(l2.val);
      l2 = l2.next;
    } else {
      current.next = new ListNode(l1.val);
      l1 = l1.next;
    }
    current = current.next;
  }
  return head.next;
}