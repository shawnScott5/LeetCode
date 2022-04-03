/* Instructions:
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

// Solution:
/*
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let max_len = 0;
    let curr = 0;
    let hash = {}; 
    if(s.length < 2) {
        return s.length;
    }
    for(let i = 0; i < s.length;  i++) {
        if(hash[s[i]] == null) {
            curr += 1;
        } else {
            curr = Math.min(i - hash[s[i]], curr + 1);
        }
        max_len = Math.max(max_len, curr);
        hash[s[i]] = i; //save the index
    }
    return max_len;
};