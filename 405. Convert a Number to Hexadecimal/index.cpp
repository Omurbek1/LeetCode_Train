class Solution{
    public:
        string toHex(int num){
            if(num == 0) return "0";
            string ans = "";
            string hex = "0123456789abcdef";
            while(num && ans.size() < 8){
                ans = hex[num & 0xf] + ans;
                num >>= 4;
            }
            return ans;
        };
};
