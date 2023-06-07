class Solution {
public:
   int minFlips(int a, int b, int c) {
        int ans = 0;
        for (int i = 0; i < 31; ++i) {
            if ((c >> i) & 1) ans += ((a >> i) & 1) == 0 && ((b >> i) & 1) == 0;
            else ans += ((a >> i) & 1) + ((b >> i) & 1);
        }
        return ans;
    }
};