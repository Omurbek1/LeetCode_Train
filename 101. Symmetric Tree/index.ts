var isSymmetric = function (left_tree, right_tree = left_tree) {

    /* -------------------------------------------------------------------------- */
    /*                             101. Symmetric Tree                            */
    /* -------------------------------------------------------------------------- */

    /**
     * @author  Samuel Hinchliffe
     * @see    {@link linkedin.com/in/samuel-hinchliffe-🚀-2bb5801a5/ | Author's Linkedin }
     * @see    {@link github.com/Samuel-Hinchliffe}
    */

     // https://leetcode.com/submissions/detail/684314946/

    // Both are trees are the same
    if (!left_tree && !right_tree) {
        return true;
    }

    // One exists without another?
    if (!left_tree || !right_tree) {
        return false;
    }

    // Are left and right of same value?
    // If not return false
    if (left_tree.val != right_tree.val) {
        return false;
    }

    // Do all the left trees and right trees
    let outer_tree = isSymmetric(left_tree.left,  right_tree.right);
    let inner_tree = isSymmetric(left_tree.right, right_tree.left);

    // Are both trees the same?
    return outer_tree && inner_tree;
};
