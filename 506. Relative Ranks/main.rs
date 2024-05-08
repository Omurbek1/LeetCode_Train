impl Solution {
    pub fn find_relative_ranks(score: Vec<i32>) -> Vec<String> {
        let mut heap = std::collections::BinaryHeap::from(score
            .iter()
            .enumerate()
            .map(|(index, value)| (*value, index))
            .collect::<Vec<_>>());

        let mut counter: i32 = 1;
        let mut ans: Vec<String> = vec!["".to_string(); score.len()];

        while let Some((value, idx)) = heap.pop() {
            match counter {
                1 => ans[idx] = "Gold Medal".to_string(),
                2 => ans[idx] = "Silver Medal".to_string(),
                3 => ans[idx] = "Bronze Medal".to_string(),
                _ => ans[idx] = counter.to_string(),
            }
            counter += 1;
        }
        return ans;
    }
}