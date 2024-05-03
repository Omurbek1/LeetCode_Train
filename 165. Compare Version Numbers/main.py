class Solution(object):
    def compareVersion(self, version1, version2):
        """
        :type version1: str
        :type version2: str
        :rtype: int
        """
        
        v1 = list(map(int, version1.split('.')))
        v2 = list(map(int, version2.split('.')))

        for i in range(max(len(v1), len(v2))):
            x = v1[i] if i < len(v1) else 0
            y = v2[i] if i < len(v2) else 0
            if x < y:
                return -1
            elif x > y:
                return 1
        return 0



