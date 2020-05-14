/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 两个链表相交
 * 解题思路： 两次遍历，先遍历一个链表，给链表中的每个节点都增加一个标志位，然后遍历另外一个链表，遍历到第一个已被标志过的节点为两链表相交的起始节点。
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    while (headA) {
      headA.flag = true;
      headA = headA.next;
    }
    while (headB) {
      if(headB.flag) return headB;
      headB = headB.next;
    }
    return null;
};

var getIntersectionNode2 = function(headA, headB) {
  let pA = headA;
  let pB = headB;

  while (pA || pB) {
    if(pA === pB) return pA;
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return null;
}