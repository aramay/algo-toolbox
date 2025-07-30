/**
 * Link: https://neetcode.io/problems/top-k-elements-in-list?list=neetcode150
 * TY: https://www.youtube.com/watch?v=YPTqKIgVk-k
 * leetcode: https://leetcode.com/problems/top-k-frequent-elements/
 * 
 * Top K Frequent Elements
Given an integer array nums and an integer k, return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.

Example 1:

Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]
Example 2:

Input: nums = [7,7], k = 1

Output: [7]
Constraints:

1 <= nums.length <= 10^4.
-1000 <= nums[i] <= 1000
1 <= k <= number of distinct elements in nums.

 */
const topKFrequentBucketSort = (nums, k) => {
    console.log("num ", nums)
    const result = []
    let buckets = []
    // 1. count the frequency of each element
    const frequencyMap = new Map()
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
    }
    // 2. create bucket where index is the fequency of num
    // value at index is the item
    // The maximum possible frequency is nums.length
    buckets = Array.from({length: nums.length + 1}, () => [])
console.log("buckets ", buckets)
    for (const [ele, frequency] of frequencyMap.entries()) {
        buckets[frequency].push(ele)
    }
    console.log("buckets ", buckets)
    // 3. Iterate from the highest frequency bucket downwards
    
    for (let i = buckets.length -1; i >= 0 && result.length < k; i--) {
        if(buckets[i].length > 0) {
            // add all elements from this bucket to the result
            for (const element of buckets[i]) {
                result.push(element) 
                    if (result.length === k) {
                        break;
                    }
            }
        }
    }
    return result
}

// Example Usage:
console.log("\n--- Hash Map + Bucket Sort ---");
// Expected: [1,2] (order might vary for same freq)
console.log(`nums = [1,1,1,2,2,3,3], k = 2 -> ${topKFrequentBucketSort([1,1,1,2,2,3,3], 2)}`);
// Expected: [1]
// console.log(`nums = [1], k = 1 -> ${topKFrequentBucketSort([1], 1)}`);
// // Expected: [0]
// console.log(`nums = [3,0,1,0], k = 1 -> ${topKFrequentBucketSort([3,0,1,0], 1)}`);
// // Expected: [-1,2] (or [2,-1])
// console.log(`nums = [4,1,-1,2,-1,2,3], k = 2 -> ${topKFrequentBucketSort([4,1,-1,2,-1,2,3], 2)}`);

/**
 * LEETCODE ANSWER
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // Phase 1: Frequency Counting using a Map
    let fs = new Map(); // 'fs' stands for frequencies (or frequency map)
    for (let n of nums) {
        let f = (fs.get(n) || 0) + 1; // Get current frequency or 0 if not present, then increment
        fs.set(n, f); // Store the updated frequency for number 'n'
    }
    // Time Complexity for Phase 1: O(N), where N is the length of nums.
    // Each Map operation (get, set) is O(1) on average.
    // Space Complexity for Phase 1: O(U), where U is the number of unique elements in nums (at most N).

    // Phase 2: Populating Buckets based on Frequencies
    let buckets = []; // Initialize an empty array to serve as our buckets
    for (let [n, f] of fs.entries()) { // Iterate through the [number, frequency] pairs in the frequency map
        buckets[f] = buckets[f] || []; // If bucket at index 'f' doesn't exist (is undefined), initialize it as an empty array
        buckets[f].push(n); // Add the number 'n' to the list of numbers having frequency 'f'
    }
    // Time Complexity for Phase 2: O(U), where U is the number of unique elements.
    // Each push operation is O(1) on average.
    // Space Complexity for Phase 2: O(N) in the worst case (if all elements have distinct frequencies or many elements share the same frequency and are stored).
    // The 'buckets' array can have up to nums.length + 1 indices.

    // Phase 3: Collecting the Top K Frequent Elements
    let res = []; // Initialize an empty array to store the result
    // Iterate from the highest possible frequency (buckets.length - 1) down to 0
    for (let i = buckets.length - 1; i >= 0; i--) {
        // Optimization: If we've already collected 'k' elements, we can stop and return
        if (res.length >= k) return res;

        // Check if the current bucket 'buckets[i]' exists and has elements
        // The `buckets.length` check in `if (buckets[i] && buckets.length)` is redundant here
        // because `i` is always less than `buckets.length` in the loop, and `buckets.length`
        // will be at least 1 if `nums` is not empty. The key is `buckets[i]` being defined.
        if (buckets[i]) { // Check if the bucket at this frequency index is defined (not undefined)
            // Concatenate all elements from the current bucket to the result array
            res = res.concat(buckets[i]);
        }
    }
    // Time Complexity for Phase 3: O(N) in the worst case.
    // We iterate through the buckets array (up to N+1 times) and concatenate elements.
    // Concatenating arrays can take time proportional to the size of the arrays being concatenated.
    // In total, we add N elements at most.
    // Space Complexity for Phase 3: O(k) for the result array.

    return res; // Return the collected top K frequent elements
};


const topKFrequent = (nums, k) => {
    console.log(nums, k)
    const kFreq = new Map();

    for (let i = 0; i < nums.length; i++) {

        let temp = nums[i]

        kFreq.set(temp, (kFreq.get(temp) || 0) + 1)
    }
    console.log("kFreq ", kFreq)
}

/**
 * Example 1:

Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]
 */
// let nums = [1,2,2,3,3,3], k = 2
// const testcase1 = topKFrequent(nums, k)
// console.log("testcase1 ", testcase1)
