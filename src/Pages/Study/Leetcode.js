import React from 'react'

function Leetcode() {
  return (
    <div>
         <div className="container">
            <h1 className="heading"><u>Leetcode problems which i have completed.</u></h1>
        </div>
       
        <div className="container-fluid">
        <div className="row detail">
        <h1><b className='leet'>Linked list Problems</b></h1>
        </div>
            <div className="row detail">
            <p><b>Problem 1:</b> Given the head of a singly linked list, return true if it is a palindrome or false otherwise || <span className='title'><a className='ankr'  href="https://leetcode.com/problems/palindrome-linked-list/">Palindrome Linked List</a></span></p>
            <p><b>Problem 2:</b> Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node. || <span className='title'><a className='ankr'  href="https://leetcode.com/problems/middle-of-the-linked-list/">Middle of the Linked List</a></span></p>
            <p><b>Problem 3:</b> Given the head of a singly linked list, reverse the list, and return the reversed list. || <span className='title'><a className='ankr'  href="https://leetcode.com/problems/reverse-linked-list/">Reverse Linked List</a></span></p>
            <p><b>Problem 4:</b> You are given the head of a singly linked-list. The list can be represented as: L0 → L1 → … → Ln - 1 → Ln Reorder the list to be on the following form: L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → … You may not modify the values in the list's nodes. Only nodes themselves may be changed. || <span className='title'><a className='ankr' href="https://leetcode.com/problems/reorder-list/submissions/">Reorder List</a></span></p>
            <p><b>Problem 5:</b> Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well. || <span className='title'><a className='ankr' href="https://leetcode.com/problems/remove-duplicates-from-sorted-list/submissions/">Remove Duplicates from Sorted List</a></span></p>
            <p><b>Problem 6:</b> You are given the heads of two sorted linked lists list1 and list2. || Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists. || Return the head of the merged linked list.. || <span className='title'><a className='ankr' href="https://leetcode.com/problems/merge-two-sorted-lists/">Merge Two Sorted Lists</a></span></p>
            <p><b>Problem 7:</b> Given the head of a linked list, rotate the list to the right by k places. || <span className='title'><a className='ankr' href="https://leetcode.com/problems/rotate-list/">Rotate List</a></span></p>

            </div>
        </div>
        <hr/>

        <div className="container-fluid">
        <div className="row detail">
            <h1><b className='leet'>Stack Problems</b></h1>
        </div>
            <div className="row detail">
            <p><b>Problem 1:</b> Evaluate the value of an arithmetic expression in Reverse Polish Notation. || Valid operators are +, -, *, and /. Each operand may be an integer or another expression. || <span className='title'><a className='ankr'  href="https://leetcode.com/problems/evaluate-reverse-polish-notation/">Evaluate Reverse Polish Notation</a></span></p>
            <p><b>Problem 2:</b> We are given an array asteroids of integers representing asteroids in a row. || For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed. || <span className='title'><a className='ankr'  href="https://leetcode.com/problems/asteroid-collision/">Asteroid Collision</a></span></p>
            <p><b>Problem 3:</b> Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. || <span className='title'><a className='ankr'  href="https://leetcode.com/problems/valid-parentheses/">Valid Parentheses</a></span></p>
            <p><b>Problem 4:</b> Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise || <span className='title'><a className='ankr' href="https://leetcode.com/problems/validate-stack-sequences/">Validate Stack Sequences</a></span></p>
            <p><b>Problem 5:</b> You are given a string s consisting only of characters 'a' and 'b'​​​​. || You can delete any number of characters in s to make s balanced. s is balanced if there is no pair of indices (i,j)|| Return the minimum number of deletions needed to make s balanced. || <span className='title'><a className='ankr' href="https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/"> Minimum Deletions to Make String Balanced</a></span></p>
            <p><b>Problem 6:</b> At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5. || <span className='title'><a className='ankr' href="https://leetcode.com/problems/lemonade-change/">Lemonade Change </a></span></p>
            <p><b>Problem 7:</b> There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i]. || You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations. || <span className='title'><a className='ankr' href="https://leetcode.com/problems/gas-station/">Gas Station</a></span></p>
            {/* <p><b>Problem 8:</b>  || <span className='title'><a className='ankr' href=""> </a></span></p> */}

            </div>
        </div><hr/>

        <div className="container-fluid">
        <div className="row detail">
            <h1><b className='leet'>Queue Problems</b></h1>
        </div>
            <div className="row detail">
            <p><b className='detail'>From GFG</b></p>
            <p><b>Problem 1:</b> Given a number N. The task is to generate and print all binary numbers with decimal values from 1 to N. || <span className='title'><a className='ankr'  href="https://practice.geeksforgeeks.org/problems/generate-binary-numbers-1587115620/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article">Generate Binary Numbers</a></span></p>
            <p><b>Problem 2:</b> Given an array A[] of size N and a positive integer K, find the first negative integer for each and every window(contiguous subarray) of size K. || <span className='title'><a className='ankr'  href="https://practice.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1 ">First negative integer in every window of size k</a></span></p>
            <p><b>Problem 3:</b> Given an array A[] of size N and a positive integer K, find the first negative integer for each and every window(contiguous subarray) of size K. || <span className='title'><a className='ankr'  href="https://leetcode.com/problems/valid-parentheses/">Valid Parentheses</a></span></p>
            {/* <p><b>Problem 4:</b> You are given the head of a singly linked-list. The list can be represented as: L0 → L1 → … → Ln - 1 → Ln Reorder the list to be on the following form: L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → … You may not modify the values in the list's nodes. Only nodes themselves may be changed. || <span className='title'><a className='ankr' href="https://leetcode.com/problems/reorder-list/submissions/">Reorder List</a></span></p>
            <p><b>Problem 5:</b> Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well. || <span className='title'><a className='ankr' href="https://leetcode.com/problems/remove-duplicates-from-sorted-list/submissions/">Remove Duplicates from Sorted List</a></span></p> */}

            </div>
        </div><hr/>


        <div className="container-fluid">
        <div className="row detail">
            <h1><b className='leet'>Tree Problems</b></h1>
        </div>
            <div className="row detail">
            {/* <p><b className='detail'>From GFG</b></p> */}
            <p><b>Problem 1:</b> Given the root of a binary tree, return the preorder traversal of its nodes' values. || <span className='title'><a className='ankr'  href="https://leetcode.com/problems/binary-tree-preorder-traversal/">Binary Tree Preorder Traversal</a></span></p>
            <p><b>Problem 2:</b> Given the root of a binary tree, return the postorder traversal of its nodes' values. || <span className='title'><a className='ankr'  href="https://leetcode.com/problems/binary-tree-postorder-traversal/">Binary Tree Postorder Traversal</a></span></p>
            <p><b>Problem 3:</b> Given the root of a binary tree, return the inorder traversal of its nodes' values. || <span className='title'><a className='ankr'  href="https://leetcode.com/problems/binary-tree-inorder-traversal/">Binary Tree Inorder Traversal</a></span></p>
            <p><b>Problem 4:</b> Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level). || <span className='title'><a className='ankr'  href="https://leetcode.com/problems/binary-tree-level-order-traversal/">Binary Tree Level Order Traversal</a></span></p>
            <p><b>Problem 5:</b> Given the roots of two binary trees p and q, write a function to check if they are the same or not. || Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.|| <span className='title'><a className='ankr'  href="https://leetcode.com/problems/same-tree/">Same Tree</a></span></p>
            <p><b>Problem 6:</b> Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center). || <span className='title'><a className='ankr'  href="https://leetcode.com/problems/symmetric-tree/">Symmetric Tree</a></span></p>
           
            <p><b>Problem 7:</b> Given the root of a binary tree, return its maximum depth. || A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.|| <span className='title'><a className='ankr'  href="https://leetcode.com/problems/maximum-depth-of-binary-tree/">Maximum Depth of Binary Tree</a></span></p>
            <p><b>Problem 8:</b> A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root. || The path sum of a path is the sum of the node's values in the path. || Given the root of a binary tree, return the maximum path sum of any non-empty path.|| <span className='title'><a className='ankr'  href="https://leetcode.com/problems/binary-tree-maximum-path-sum/">Binary Tree Maximum Path Sum</a></span></p>
            <p><b>Problem 9:</b> You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST. || Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.|| <span className='title'><a className='ankr'  href="https://leetcode.com/submissions/detail/860603854/">Insert into a Binary Search Tree</a></span></p>
            <p><b>Problem 10:</b> Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.|| <span className='title'><a className='ankr'  href="https://leetcode.com/submissions/detail/860617630/">Construct Binary Tree from Preorder and Inorder Traversal</a></span></p>
            {/* <p><b>Problem 11:</b> Given the roots of two binary trees p and q, write a function to check if they are the same or not. || Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.|| <span className='title'><a className='ankr'  href="https://leetcode.com/problems/same-tree/">Same Tree</a></span></p>
            <p><b>Problem 12:</b> Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center). || <span className='title'><a className='ankr'  href="https://leetcode.com/problems/symmetric-tree/">Symmetric Tree</a></span></p>*/}
            </div> 
        </div><hr/>


    </div>
  )
}

export default Leetcode;