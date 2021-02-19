# Introduction-To-Algorithms

```yarn test```

## Foundations

### 1. Bubble Sort
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

#### Complexity

| Worst Time Complexity | Worst Space Complexity |
| --------------------- | ---------------------- |
| O(n<sup>2</sup>)      | O(1)                   |

### 2. Insertion Sort
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

#### Complexity

| Worst Time Complexity | Worst Space Complexity |
| --------------------- | ---------------------- |
| O(n<sup>2</sup>)      | O(1)                   |


### 3. Merge Sort
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

#### Complexity

| Worst Time Complexity | Worst Space Complexity |
| --------------------- | ---------------------- |
| O(n log(n))           | O(n)                   |

### 4. Maximum Crossing SubArray
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

#### Complexity

| Worst Time Complexity | Worst Space Complexity |
| --------------------- | ---------------------- |
| O(n log(n))           | O(1)                   |

### 5. Matrix multiplication
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
#### Complexity

| Worst Time Complexity | Worst Space Complexity |
| --------------------- | ---------------------- |
| O(n<sup>3</sup>)      | O(n)                   |

### 6. Fibonacci sequence
> For n > 1, each number is the sum of the two preceding ones, starting from 0 and 1.

##### 6.1 Fibonacci Loop
```
1.  function fibonacciLoop(n)
2.      if n < 1 return n
3.      fib = Array[0, 1]
4.      for i = 3 to n
5.          fib[i] = fib[i - 1] + fib[i - 2]
6.      return fib[fib.length]
```
* Example ```fibonacciLoop(6)```
```
3.  [0, 1]
5.  [0, 1, 1]
5.  [0, 1, 1, 2]
5.  [0, 1, 1, 2, 3]
5.  [0, 1, 1, 2, 3, 5]
5.  [0, 1, 1, 2, 3, 5, 8]
6.  8
```
| Worst Time Complexity | Worst Space Complexity |
| --------------------- | ---------------------- |
| 0(n)                  | 0(1)                   |

##### 6.2 Fibonacci Recursive
```
1.  function fibonacciRecursive(n)
2.      if n < 1 return n
3.      return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
```
* Example ```fibonacciRecursive(6)```
```
1.  6
1.  5
1.  4
1.  3
1.  2
1.  1
1.  0
1.  1
1.  2
1.  1
1.  0
1.  3
1.  2
1.  1
1.  0
1.  1
1.  4
1.  3
1.  2
1.  1
1.  0
1.  1
1.  2
1.  1
1.  0
3.  8
```
| Worst Time Complexity | Worst Space Complexity |
| --------------------- | ---------------------- |
| 0(2<sup>n</sup>)      | 0(n)                   |

##### 6.3 Fibonacci Recursive Memoization
```
1.  function fibonacciRecursiveMemoization(n, m)
2.      if n < 1 return n
3.      if (m[n]) return m[n]
4.      return m[n] = fibonacciRecursiveMemoization(n - 1, m) + fibonacciRecursiveMemoization(n - 2, m)
```
* Example ```fibonacciRecursiveMemoization(6)```
```
1.  6 {}
1.  5 {}
1.  4 {}
1.  3 {}
1.  2 {}
1.  1 {}
1.  0 {}
1.  1 { '2': 1 }
1.  2 { '2': 1, '3': 2 }
1.  3 { '2': 1, '3': 2, '4': 3 }
1.  4 { '2': 1, '3': 2, '4': 3, '5': 5 }
4.  8
```
| Worst Time Complexity | Worst Space Complexity |
| --------------------- | ---------------------- |
| 0(2n)                 | 0(n)                   |

* Benchmarks of 100k runs of fib(20)
```
    fibonacciLoop(20)                 : 23ms
    fibonacciRecursive(20)            : 10169ms
    fibonacciRecursiveMemoization(20) : 4ms
```

### 7. Heap
```
1.  function parent(i)
2.      return i >> 1
```
```
1.  function leftChild(i)
2.      return i << 1
```
```
1.  function rightChild(i)
2.      return (i << 1) + 1
```

### 8. Quicksort
```
1.  function quickSort(A, p, r)
2.      if (p < r)
3.          q = partition(A, p, r)
4.          quickSort(A, p, q - 1)
5.          quickSort(A, q + 1, r)
6.      return A
7.
8.  function partition(A, p, r)
9.      x = A[r]
10.     i = p - 1
11.     for j = p to r - 1
12.     if A[j] <= x
13.         i = i + 1
14.         tmp = A[i]
15.         A[i] = A[j]
16.         A[j] = tmp
17.     tmp = A[i + 1]
18.     A[i + 1] = A[r]
19.     A[r] = tmp
20.     return i + 1
```

* Example 
```
[ 7, 4, 5, 2, 10, 1, -3, 945, 0 ] -3 0 
[ -3, 4, 5, 2, 10, 1, 7, 945, 0 ] 7 0 
[ -3, 0, 5, 2, 10, 1, 7, 945, 4 ] 2 4 
[ -3, 0, 2, 5, 10, 1, 7, 945, 4 ] 5 4 
[ -3, 0, 2, 5, 10, 1, 7, 945, 4 ] 1 4 
[ -3, 0, 2, 1, 10, 5, 7, 945, 4 ] 5 4 
[ -3, 0, 1, 2, 4, 5, 7, 945, 10 ] 2 10 
[ -3, 0, 1, 2, 4, 5, 7, 945, 10 ] 2 10 
[ -3, 0, 1, 2, 4, 5, 7, 945, 10 ] 4 10 
[ -3, 0, 1, 2, 4, 5, 7, 945, 10 ] 4 10 
[ -3, 0, 1, 2, 4, 5, 7, 945, 10 ] 5 10 
[ -3, 0, 1, 2, 4, 5, 7, 945, 10 ] 5 10 
[ -3, 0, 1, 2, 4, 5, 7, 945, 10 ] 7 10 
[ -3, 0, 1, 2, 4, 5, 7, 945, 10 ] 7 10 
[ -3, 0, 1, 2, 4, 5, 7, 10, 945 ] 2 7 
[ -3, 0, 1, 2, 4, 5, 7, 10, 945 ] 2 7 
[ -3, 0, 1, 2, 4, 5, 7, 10, 945 ] 4 7 
[ -3, 0, 1, 2, 4, 5, 7, 10, 945 ] 4 7 
[ -3, 0, 1, 2, 4, 5, 7, 10, 945 ] 5 7 
[ -3, 0, 1, 2, 4, 5, 7, 10, 945 ] 5 7 
[ -3, 0, 1, 2, 4, 5, 7, 10, 945 ] 2 5 
[ -3, 0, 1, 2, 4, 5, 7, 10, 945 ] 2 5 
[ -3, 0, 1, 2, 4, 5, 7, 10, 945 ] 4 5 
[ -3, 0, 1, 2, 4, 5, 7, 10, 945 ] 4 5 
[ -3, 0, 1, 2, 4, 5, 7, 10, 945 ] 2 4 
[ -3, 0, 1, 2, 4, 5, 7, 10, 945 ] 2 4 
[ -3, 0, 1, 2, 4, 5, 7, 10, 945 ] 5 7 
[ -3, 0, 1, 2, 4, 5, 7, 10, 945 ] 5 7 
[ -3, 0, 1, 2, 4, 5, 7, 10, 945 ] 10 945 
[ -3, 0, 1, 2, 4, 5, 7, 10, 945 ] 10 945 
[ -3, 0, 1, 2, 4, 5, 7, 10, 945 ]
```

## Data Structures
* Operations on dynamic Sets

| Queries                       | Modifying Operations   |
| ---------------------         | ---------------------- |
| **search**(Set, value)        | **insert**(Set, value) |
| **minimum**(Set)              | **delete**(Set, value) |
| **maximum**(Set)              |                        |
| **successor**(Set, element)   |                        |
| **predecessor**(Set, element) |                        |


### 9. Stacks
* LIFO
```
1.  function stackEmpty(S)
2.      if S.top == 0
3.          return true
4.      return false
5. 
6.  function push(S, x)
7.      S.top = S.top + 1
8.      S[S.top] = x
9. 
10. function pop(S)
11.     if stackEmpty(S)
12.         return Error("UnderFlow")
13.     else
14.         S.top = S.top - 1
15.     return S[S.top + 1]
```

### 10. Queues
* FIFO
```
1.  function enQueue(Q, x)
2.      Q[Q.tail] = x
3.      if Q.tail == Q.length
4.          Q.tail = 1
5.      else
6.          Q.tail = Q.tail + 1
7. 
8.  function deQueue(Q)
9.      x = Q[Q.head]
10.     if Q.head == Q.length
11.         Q.head = 1
12.     else
13.         Q.head = Q.head + 1
14.     return x
```

### 11. Linked Lists
```
1.  LinkedList = {
2.      HEAD: LinkedListNode
3.  }
```
#### 11.1. Singly Linked List
```
1.  SinglyLinkedListNode = {
2.      value: x
3.      next: SinglyLinkedListNode | null
4.  }
```
#### 11.2. Doubly Linked List
```
1.  DoublyLinkedListNode = {
2.     value: x
3.     next: DoublyLinkedListNode | null
4.     prev: DoublyLinkedListNode | null
5.  }
```

### 12. Binary Search Trees