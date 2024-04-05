---
layout: post
author: Grant McAllister
title: Understanding Static Arrays
tags: [algo, data]
---

# A Friendly Dive into Static Arrays

Hey there! Today, we're venturing into the fascinating world of static arrays. If you're like me, embarking on this software development journey, you'll find that understanding the basics not only boosts your confidence but also lays a solid foundation for tackling more complex topics. So, let's unravel the mystery of static arrays together, spiced up with some coding examples and my personal encounters with LeetCode challenges, especially from the awesome collection at [NeetCode](https://neetcode.io/).

## What's All the Fuss About Static Arrays?

Imagine having a box where you can store your most prized possessions, but there's a catch—the box's size is fixed. That's essentially what static arrays are in the world of programming: fixed-length containers that neatly store a specific number of elements, which you can quickly grab by their unique spots, known as indices.

### Why You Should Care:
- **Fixed Size:** Once you decide how many items your static array can hold, that's it—no take-backs. This constraint is actually a blessing in disguise, ensuring efficient memory usage.
- **Instant Retrieval:** Fancy getting any item at lightning speed? Thanks to indices, grabbing any element from a static array is a breeze.
- **Cozy Neighbors:** All elements in a static array live side-by-side in memory, making access super fast.

## Where Do Static Arrays Shine?

Despite their simplicity, static arrays play a heroic role in various programming scenarios. Here's where they truly make a difference:

- **Juggling Data:** Need to hold onto data temporarily while your algorithm does its magic? Static arrays to the rescue.
- **Buffers:** Perfect for managing chunks of data, whether you're processing it or sending it across the digital universe.
- **Quick Lookups:** Static arrays can serve as secret maps, helping you retrieve information at record speeds.
- **Multi-Value Returns:** Functions can use pointers to static arrays to hand back multiple values. Handy, right?
- **Storing Success:** In dynamic programming, static arrays keep track of intermediate results, making problem-solving a cinch.

## Performance at a Glance

- **Reaching In:** O(1) - Grabbing an element by its index is instantaneous.
- **Seek and Find:** O(n) - Searching through the array might require checking each item, but it's well worth it for the treasure you'll find.

## Real-World Practice with LeetCode Challenges

Nothing cements understanding like diving hands-on into coding problems. I took a swing at some LeetCode problems, curated by the fantastic folks at NeetCode, and boy, was it enlightening!

### Problem Solving 1: [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

Here, the challenge is to declutter a sorted array, making sure each jewel (element) is unique.

**C++ Solution:**

```cpp
class Solution {
public:
    int removeDuplicates(vector<int>& array) {
        int i = 0;
        int size = array.size();
        for (int k = i + 1; k < size; k++) {
            if (array[i] != array[k]) {
                array[i + 1] = array[k];
                i++;
            }
        }
        return i + 1;
    }
};
```

**JavaScript Solution:**

```javascript
var removeDuplicates = function(nums) {
  let i = 0;
  for (let k = 1; k < nums.length; k++) {
    if (nums[i] != nums[k]) {
      nums[i + 1] = nums[k];
      i++;
    }
  }
  return i + 1;
};
```

### Problem Solving 2: [Remove Element](https://leetcode.com/problems/remove-element/)

The goal here is to vanish all instances of a certain value from an array, making it as compact as possible.

**C++ Solution:**

```cpp
class Solution {
public:
    int removeElement(vector<int>& array, int val) {
        int j = 0;
        for (int i = 0; i < array.size(); i++) {
            if (array[i] != val) {
                array[j] = array[i];
                j++;
            }
        }
        return j;
    }
};
```

**JavaScript Solution:**

```javascript
var removeElement = function(nums, val) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
                nums[j] = nums[i];
                j++;
            }
        }
        return j;
    };
```

## Keep the Learning Alive

I've found that sometimes, diving into a topic visually adds another layer of understanding. So, here are a couple of YouTube gems that further demystify static arrays:
- Get your feet wet with this [overview of static arrays](https://www.youtube.com/watch?v=PEnFFiQe1pM).
- For a deeper dive, this [detailed exploration](https://www.youtube.com/watch?v=Hw42GkHPyvk) is just what you need.

Thank you for joining me on this static array adventure. Whether you're learning or teaching, embracing these fundamental concepts opens up a whole new world of programming possibilities. Happy coding!
