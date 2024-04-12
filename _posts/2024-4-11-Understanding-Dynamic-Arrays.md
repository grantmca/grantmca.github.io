---
layout: post
author: Grant McAllister
title: Understanding Dynamic Arrays
tags: [algo, data]
---

# Understanding Dynamic Arrays

Welcome back! If our exploration of static arrays sparked your interest, you're in for a treat as we dive into the dynamic counterparts that stretch and shrink according to our whims. As we continue on our software development saga, enriching our arsenal with dynamic arrays not only elevates our coding game but empowers us to solve a wider array of problems. Get ready for more coding examples, insights, and yes, our beloved LeetCode challenges courtesy of the fantastic platform, [NeetCode](https://neetcode.io/).

## Unpacking Dynamic Arrays

Picture your favorite expandable suitcase—an unassuming companion until you need that extra space for just one more souvenir. Dynamic arrays embody this principle in programming, automatically resizing to accommodate additional elements beyond their initial capacity.

### Why They're Awesome:
- **Flexibility:** Dynamic arrays can grow or shrink, giving you the freedom to add or remove elements on the go.
- **Efficiency:** With smart strategies like doubling the size when needed, dynamic arrays offer a good balance between flexibility and efficient memory use.
- **Ease of Use:** Offering the simplicity of accessing elements via indices, they combine the best of static arrays with the added advantage of resizeability.

## Dynamic Arrays in Action

Their versatility makes dynamic arrays a star player in varied programming scenarios:

- **Growing Collections:** Perfect for when you're unsure about the volume of data, like user input or files to process.
- **Stacks and Queues:** With dynamic arrays, implementing these structures becomes straightforward, adjusting size as needed.
- **String Manipulation:** Editing text? Dynamic arrays can smoothly handle modifications, adjusting to new string lengths seamlessly.

## Performance Insights

- **Adding Elements:** Typically O(1), but resizing requires O(n) due to copying elements to a new, bigger array. Thankfully, smart resizing strategies keep this rare and manageable.
- **Accessibility:** O(1) - Instant access to elements is still a thing, keeping operations quick and efficient.

## Coding Challenges: LeetCode and Beyond

To truly grasp dynamic arrays, nothing beats the enlightenment from solving real problems:

### Challenge: [Concatenation Array](https://leetcode.com/problems/concatenation-of-array/description/)

**C++ Solution:**

```cpp
class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        int length = nums.size();
        for (int i = 0; i < length; i++) {
            nums.push_back(nums[i]);
        }
        return nums;
    }
};
```

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        nums[i + length] = nums[i];
    }
    return nums;
};
```
