# Introduction-To-Algorithms
## 1. Bubble Sort
> Incremental Algorithm Pseudocode

```
1.  for i = 1 to Array.length
2.      for j = Array.length downto i + 1
3.          if  Array[j] < Array[j - 1]
4.              swap Array[j] with Array[j - 1]
```
* Example intermediate states
``` [3,2,1] ```
```
1. i{1},j{3}: Array[j]{1} < Array[j - 1]{2}
2. {[3,1,2]}
```
```
3. i{1},j{2}: Array[j]{1} < Array[j - 1]{3}
4. {[1,3,2]}
```
```
3. i{2},j{3}: Array[j]{2} < Array[j - 1]{3}
4. {[1,2,3]}

```

### Complexity

| Worst Time Complexity | Worst Space Complexity |
| --------------------- | ---------------------- |
| O(n<sup>2</sup>)      | O(1)                   |

## 2. Insertion Sort
> Incremental Algorithm Pseudocode

```
1.   for i = 2 to Array.length
2.       key = Array[i]
3.       j = i - 1
4.       while j > 1 AND Array[j] > key
5.           Array[j + 1] = Array[j]
6.           j = j - 1
7.       Array[j + 1] = key 
```

* Example intermediate states 
``` [3,2,1] ```
``` 
1. key = {2} 
2. j = {1} 
3. Array[j]{3} > key{2}
4.      {[3,3,1]}
5.      j = {0}
6. {[2,3,1]}
```
```
2. key = {1}
3. j = {2}
4. Array[j]{3} > key{1}
5.      {[2,3,3]}
6.      j = {1}
```
```
4. Array[j]{2} > key{1}
5.      {[2,2,3]}
6.      j = {0}
7. {[1,2,3]}   
```

### Complexity

| Worst Time Complexity | Worst Space Complexity |
| --------------------- | ---------------------- |
| O(n<sup>2</sup>)      | O(1)                   |


## 3. Merge Sort
> Recursive Algorithm a.k.a. divide-and-conquer(and-combine) algorithm Pseudocode
> * **Divide** the **problem** into *sub-problems*
> * **Conquer** by solving the *smallest* sub-problems
> * **Combine** the *sub-solutions* into the **solution** 
> Pseudocode
```
1.  function sort(Array)
2.      if Array.length == 1 return Array
3.      LeftArray = Array.firstHalf
4.      RightArray = Array.rightHalf
5.      LeftSortedArray = sort(LeftArray)
6.      RightSortedArray = sort(RightArray)
7.      return merge(LeftSortedArray, RightSortedArray)
8.
9. function merge(LeftArray, RightArray)
10.     MergeArray[]
11.     while LeftArray AND RightArray
12.         if LeftArray[1] > RightArray[1]
13.             MergeArray.push(RightArray[1])
14.             RightArray.shift()
15.         else
16.             MergeArray.push(LeftArray[1])
17.             LeftArray.shift()
18.     while LeftArray
19.         MergeArray.push(LeftArray[1])
20.         LeftArray.shift()
21.     while RightArray
22.         MergeArray.push(RightArray[1])
23.         RightArray.shift()
24.     return MergeArray

```

* Example intermediate states 
``` [9,8,7,6,5,4,3,2,1] ```

```
Sort:             [9, 8, 7, 6, 5, 4, 3, 2, 1]
Sort:     [9, 8, 7, 6]            [5, 4, 3, 2, 1]
Sort:    [9, 8]   [7, 6]        [5, 4]    [3, 2, 1]
Sort:   [9]  [8] [7]  [6]      [5]  [4]  [3]  [2, 1]
Sort:                                        [2]  [1]
Merge:                                        [1, 2]
Merge:   [8, 9]   [6, 7]          [4, 5]   [1, 2, 3]
Merge:      [6, 7, 8, 9]           [1, 2, 3, 4, 5]
Merge:            [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Complexity

| Worst Time Complexity | Worst Space Complexity |
| --------------------- | ---------------------- |
| O(n log(n))           | O(n)                   |

## 4. Maximum Crossing SubArray
> Recursive Algorithm a.k.a. divide-and-conquer(and-combine) algorithm Pseudocode

```
1.  function findMaximumSubArray(Array, low, high)
2.      if (high == low) 
3.          return { low, high, Array[low] }
4.      else
5.          mid = (low + high) / 2
6.          { leftLow, leftHigh, leftSum } =
7.              findMaximumSubArray(Array, low, mid)
8.          { rightLow, rightHigh, rightSum } =
9.              findMaximumSubArray(Array, mid + 1, high)
10.         { crossLow, crossHigh, crossSum } =
11.             findMaxCrossingSubArray(Array, low, mid, high)
12.         if leftSum >= rightSum AND leftSum >= crossSum
13.             return { leftLow, leftHigh, leftSum }
14.         else if rightSum >= leftSum AND rightSum >= crossSum
15.             return { rightLow, rightHigh, rightSum }
16.         else
17.             return { crossLow, crossHigh, crossSum }
18.
19. function findMaxCrossingSubArray(A, low, mid, high)
20.     maxLeft = 0
21.     maxRight = 0
22.     sum = 0
23.     leftSum = -∞
24.     for i = mid downto low
25.         sum = sum + A[i]
26.         if sum > leftSum
27.             leftSum = sum
28.             maxLeft = i
29.     rightSum = -∞
30.     sum = 0
31.     for j = mid + 1 to high
31.         sum = sum + A[j]
33.         if sum > rightSum
34.             rightSum = sum
35.             maxRight = j
36.     sum = leftSum + rightSum
37.     return { maxLeft, maxRight, sum }
```
* Example
``` [-2,1,-3,4,-1,2,1,-5,4] ```

```
6.  {"leftLow":1,"leftHigh":1,"leftSum":-2}  =
7.      findMaxSubArray(1, 1)

```
```
8.  {"rightLow":2,"rightHigh":2,"rightSum":1} =
9.      findMaxSubArray(2, 2)
```
```
10. {"crossLow":1,"crossHigh":2,"crossSum":-1} =
11.     findMaxCrossingSubArray(1, 1, 2)
```
```
6.  {"leftLow":2,"leftHigh":2,"leftSum":1}  =
7.      findMaxSubArray(1, 2)
```
```
8.  {"rightLow":3,"rightHigh":3,"rightSum":-3} =
9.      findMaxSubArray(3, 3)
```
```
10. {"crossLow":2,"crossHigh":3,"crossSum":-2} =
11.     findMaxCrossingSubArray(1, 2, 3)
```
```
6.  {"leftLow": 2,"leftHigh":2,"leftSum":1}  =
7.      findMaxSubArray(1, 3)
```
```
6.  {"leftLow":4,"leftHigh":4,"leftSum":4}  =
7.      findMaxSubArray(4, 4)
```
```
8.  {"rightLow":5,"rightHigh":5,"rightSum":-1} =
9.      findMaxSubArray(5, 5)
```
```
10. {"crossLow":4,"crossHigh":5,"crossSum":3} =
11.     findMaxCrossingSubArray(4, 4, 5)
```
```
8.  {"rightLow":4,"rightHigh":4,"rightSum":4} =
9.      findMaxSubArray(4, 5)
```
```
10. {"crossLow":2,"crossHigh":4,"crossSum":2} =
11.     findMaxCrossingSubArray(1, 3, 5)
```
```
6.  {"leftLow":4,"leftHigh":4,"leftSum":4}  =
7.      findMaxSubArray(1, 5)
```
```
6.  {"leftLow":6,"leftHigh":7,"leftSum":2}  =
7.      findMaxSubArray(6, 6)
```
```
8.  {"rightLow":7,"rightHigh":8,"rightSum":1} =
9.      findMaxSubArray(7, 7)
```
```
10. {"crossLow":6,"crossHigh":7,"crossSum":3} =
11.     findMaxCrossingSubArray(6, 6, 7)
```
```
6.  {"leftLow":6,"leftHigh":7,"leftSum":3}  =
7.      findMaxSubArray(6, 7)
```
```
6.  {"leftLow":8,"leftHigh":8,"leftSum":-5}  =
7.      findMaxSubArray(8, 8)
```
```
8.  {"rightLow":9,"rightHigh":9,"rightSum":4} =
9.  findMaxSubArray(9, 9)
```
```
6.  {"crossLow":8,"crossHigh":9,"crossSum":-1} =
7.      findMaxCrossingSubArray(8, 8, 9)
```
```
8.  {"rightLow":9,"rightHigh":9,"rightSum":4} =
9.      findMaxSubArray(8, 9)
```
```
10. {"crossLow":6,"crossHigh":9,"crossSum":2} =
11.     findMaxCrossingSubArray(6, 7, 9)
```
```
8.  {"rightLow":9,"rightHigh":9,"rightSum":4} =
9.      findMaxSubArray(6, 9)
```
```
10. {"crossLow":4,"crossHigh":7,"crossSum":6} =
11.     findMaxCrossingSubArray(1, 5, 9)
```
```
17. { maxLeft: 4, maxRight: 7, sum: 6 }
```

### Complexity

| Worst Time Complexity | Worst Space Complexity |
| --------------------- | ---------------------- |
| O(n log(n))           | O(1)                   |

## 5. Matrix multiplication
> An iterative algorithm

```
1.  function squareMatrixMultiply(A, B)
2.      rowCount = A.rows
3.      C = Matrix[n x n]
4.      for i = 1 to rowCount
5.          for j = 1 to rowCount
6.              for k = 1 to rowCount
7.                  C[ij] = C[ij] + A[ik] * B[kj]
8.      return C
```
* Example A * B
``` [ [1, 2], [3, 4] ] * [ [2, 0], [1, 2] ] ```

```
7.    [ [ 2 ] ]
7.    [ [ 4 ] ]
7.    [ [ 4, 0 ] ]
7.    [ [ 4, 4 ] ]
7.    [ [ 4, 4 ], [ 6 ] ]
7.    [ [ 4, 4 ], [ 10 ] ]
7.    [ [ 4, 4 ], [ 10, 0 ] ]
7.    [ [ 4, 4 ], [ 10, 8 ] ]
```
* Example B * A
``` [[2, 0], [1, 2]] * [[1, 2], [3, 4]] ```
```
7.    [ [ 2 ] ]
7.    [ [ 2 ] ]
7.    [ [ 2, 4 ] ]
7.    [ [ 2, 4 ] ]
7.    [ [ 2, 4 ], [ 1 ] ]
7.    [ [ 2, 4 ], [ 7 ] ]
7.    [ [ 2, 4 ], [ 7, 2 ] ]
7.    [ [ 2, 4 ], [ 7, 10 ] ]

```
### Complexity

| Worst Time Complexity | Worst Space Complexity |
| --------------------- | ---------------------- |
| O(n<sup>3</sup>)      | O(n)                   |

## 6. Strassen’s algorithm for matrix multiplication
> Strassen's great recursive algorithm for multiplying n x n matrices that runs in O(n<sup>lg7</sup>) time, which is asymptotically better than O(n<sup>3</sup>) of the previous matrix multiplication algorithm shown.
```
1.  function squareMatrixMultiply(A, B)
2.    
3.
```

| Worst Time Complexity | Worst Space Complexity |
| --------------------- | ---------------------- |
| O(n<sup>lg7</sup>)      | O(n)                   |