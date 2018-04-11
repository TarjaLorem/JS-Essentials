 function BubbleSort(arr) {
     const sortArr = Array.from(arr);
     var swap;
     var len = sortArr.length-1;
     do {
         swap = false;
         for (var i = 0; i < len; i++) {
             if (sortArr[i] < sortArr[i+1]) {
                 var temp = sortArr[i];
                 sortArr[i] = sortArr[i + 1];
                 sortArr[i + 1] = temp;
                 swap = true;
             };
         } len-- ;
     } while (swap)
     return sortArr;
 };
 console.log(BubbleSort([33, 112, 9, 5,1,54,87,43,21,10]));
