/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if(lists.length === 0) {
    return null;
  }
  let k = lists.length;
  while (k > 1) {
    for (let i = 0; i < ~~(k/2); i++) {
      lists[i] = mergeTwoLists(lists[i], lists[i + ~~((k+1)/2)]);
    }
    k = ~~((k+1)/2);
  }
  return lists[0];
};

var mergeTwoLists = function(l1, l2) {
  if(l1 === null) {
    return l2;
  }

  if(l2 === null) {
    return l1;
  }

  if(l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}