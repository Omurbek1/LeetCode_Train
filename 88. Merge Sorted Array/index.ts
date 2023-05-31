/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    let i=0, k=0, j=0;

    while(i<m && j<n){
        if(nums1[i]<nums2[j]){
            i++;

        }else{
            nums1[k++] = nums2[j++];
        }

    }
    while(i<m){
        nums1[k++] = nums1[i++];

    }

    while(j<n){
        nums1[k++] = nums2[j++];

    }


    

    

};