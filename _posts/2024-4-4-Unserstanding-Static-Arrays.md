---
layout: post
author: Grant McAllister
title: Understanding Static Arrays
tags: [algo, data]
---

# Sharing What I Learned About Static Arrays

Hello everyone! I recently dove into the topic of static arrays while brushing up on some programming basics, and I thought it would be useful to share what I picked up. Static arrays are pretty foundational in coding, and getting a good handle on them has definitely helped me feel more confident. Let's take a relaxed stroll through the basics of static arrays, featuring some examples and challenges I came across.

## So, What Are Static Arrays?

Picture a row of mailboxes, each with a unique number. You can store something in them, and whenever you need to retrieve it, you just need to know the mailbox number. Static arrays in programming are quite similar. They are containers with a fixed size, where each slot holds one item and can be accessed using an index.

### Why Should You Even Care?

- **Fixed Size:** The size of a static array is determined when you create it and can’t be changed. This might seem limiting, but actually, it helps the computer manage memory more efficiently.
- **Instant Access:** Retrieving an item by its index is super quick.
- **Memory Friendly:** All elements are stored sequentially in memory, speeding up access times.

## When Are Static Arrays Handy?

Although simple, static arrays are incredibly useful in several common scenarios in coding:

- **Storing Temporary Data:** They are perfect when you need a temporary, fixed-size space to stash data.
- **Managing Data Buffers:** Whether you're processing large chunks of data or transferring it, static arrays can come in quite handy.
- **Performing Quick Lookups:** Knowing the index of what you need makes retrieval instant.
- **Returning Multiple Values from Functions:** You can use static arrays to return several values at once.
- **Dynamic Programming:** They are ideal for keeping track of intermediate computations in algorithms.

## A Quick Peek at Performance

- **Access Time:** O(1) - Retrieving an element if you know the index is instantaneous.
- **Search Time:** O(n) - If you need to find something without knowing its index, you might have to check each element, but this is generally quite fast.
- **Binary Search:** O(log(n)) -  If you're working with a sorted array, binary search offers a highly efficient alternative to standard searching techniques. By repeatedly dividing the search interval in half, binary search drastically reduces the time it takes to locate an item, making it much faster than linear searching strategies. This method is not only a fundamental algorithm in computer science but also proves extremely useful in various programming contexts, such as efficiently tracking down bugs in Git using git bisect.


## Trying My Hand at Some LeetCode Problems

I found that putting these concepts to use in solving some practical coding problems helped solidify my understanding. I tackled a couple of challenges on LeetCode that involved static arrays.

### Challenge 1: [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

This problem involved making sure all elements in a sorted array are unique. Here’s how I approached it:

**C++ Example:**

```cpp
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if (nums.empty()) return 0;
        int i = 0;
        for(int j = 1; j < nums.size(); j++) {
            if(nums[j] != nums[i]) {
                i++;
                nums[i] = nums[j];
            }
        }
        return i + 1;
    }
};
```

**JavaScript Example:**

```javascript
function removeDuplicates(nums) {
    let i = 0;
    for(let j = 1; j < nums.length; j++) {
        if(nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}
```

### Challenge 2: [Remove Element](https://leetcode.com/problems/remove-element/)

The goal here was to get rid of all occurrences of a specific value within an array:

**C++ Example:**

```cpp
class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int j = 0;
        for(int i = 0; i < nums.size(); i++) {
            if(nums[i] != val) {
                nums[j] = nums[i];
                j++;
            }
        }
        return j;
    }
};
```

**JavaScript Example:**

```javascript
function removeElement(nums, val) {
    let j = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] != val) {
            nums[j] = nums[i];
            j++;
        }
    }
    return j;
}
```

## Deepening My Understanding

While learning, I also found some videos that helped clarify things even more:

- [Introduction to Static Arrays](https://www.youtube.com/watch?v=PEnFFiQe1pM) - A great beginner-friendly video.
- [Detailed Exploration of Static Arrays](https://www.youtube.com/watch?v=Hw42GkHPyvk) - For those looking for a deeper dive.

Thanks for joining me on this journey through static arrays. Hopefully, my findings can help you as much as they've helped me. Dive in, play around with the code, and let's keep learning together! Happy coding!
