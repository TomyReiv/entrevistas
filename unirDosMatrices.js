var merge = function (nums1, m, nums2, n) {
    /*  num1.length = m + n;
     num2.length = n; */

    nums1.splice(m); // Eliminar los elementos adicionales en nums1


    nums1.push(...nums2);
    nums1.sort((a, b) => a - b);
};