# Introduction-To-Algorithms
## 1. Bubble Sort
> Incremental Algorithm


## 2. Insertion Sort
> Incremental Algorithm

```
1.   for i = 2 to Array.length
2.       key = Array[i]
3.       j = i - 1
4.       while (j > 0 AND Array[j] > key)
5.           Array[j + 1] = Array[j]
6.           j = j - 1
7.       Array[j + 1] = key 
```

* Example
``` [3,2,1] ```

``` 
2. key = {2} 
3. j = {0} 
4. Array[j]{3} > key{2}
5.      {[3,3,1]}
6.      j = {-1}
7. {[2,3,1]}
```
```
2. key = {1}
3. j = {1}
4. Array[j]{3} > key{1}
5.      {[2,3,3]}
6.      j = {0}
4. Array[j]{2} > key{1}
5.      {[2,2,3]}
6.      j = {-1}
7. {[1,2,3]}   
```

### Complexity

| Worst Time Complexity | Worst Space Complexity |
| --------------------- | ---------------------- |
| O(n<sup>2</sup>)      | O(1)                   |


## 3. Merge Sort
> Recursive Algorithm a.k.a. the divide-and-conquer algorithm

```
1.  function sort(Array) {
2.      if (Array.length == 1) return Array
3.      LeftArray = Array.firstHalf
4.      RightArray = Array.rightHalf
5.      LeftSortedArray = sort(LeftArray)
6.      RightSortedArray = sort(RightArray)
7.      return merge(LeftSortedArray, RightSortedArray)
8.  }
9.
10. function merge(LeftArray, RightArray) {
11.     MergeArray[]
12.     while (LeftArray AND RightArray) {
13.         if (LeftArray[0] > RightArray[0]) {
14.             MergeArray.push(RightArray[0])
15.             RightArray.shift()
16.         } else {
17.             MergeArray.push(LeftArray[0])
18.             LeftArray.shift()
19.         }
20.     }
21.     while (LeftArray) {
22.         MergeArray.push(LeftArray[0])
23.         LeftArray.shift()
24.     }
25.     while (RightArray) {
26.         MergeArray.push(RightArray[0])
27.         RightArray.shift()
28.     }
29.     return MergeArray
30. }

```

* Example
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
> Recursive Algorithm a.k.a. the divide-and-conquer algorithm

