var longestPalindrome = function(s) {
    if (!s || s.length === 0) return "";
    let res = s[0];
    const dp = [];
    for (let i = s.length - 1; i >= 0; i--) {
      dp[i] = [];
      for (let j = i; j < s.length; j++) {
        if (j - i === 0) {
            console.log(i,"iiiiiiiiii"+j)
            dp[i][j] = true;
        }
        else if (j - i === 1 && s[i] === s[j]) {
            dp[i][j] = true;
        } 
        else if (s[i] === s[j] && dp[i + 1][j - 1]) {
          dp[i][j] = true;
        }
  
        if (dp[i][j] && j - i + 1 > res.length) {
          res = s.slice(i, j + 1);
        }
      }
    }
  
    return res;
};
var longestPalindrome = function(s) {
    function expandAroundCenter(s, left, right) {
        while (left >= 0 && right < s.length && s.charAt(left) == s.charAt(right)) {
            --left;
            ++right;
        }
        return right - left - 1;
    }
    if (s == null || s.length() < 1) {
        return "";
    }
    let start = 0, end = 0;
    for (let i = 0; i < s.length(); i++) {
        let len1 = expandAroundCenter(s, i, i);
        let len2 = expandAroundCenter(s, i, i + 1);
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - (len - 1) / 2;
            end = i + len / 2;
        }
    }
    return s.substring(start, end + 1);
}



console.log(longestPalindrome("babad"))