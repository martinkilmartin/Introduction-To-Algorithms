# Introduction-To-Algorithms
## Insertion Sort

```
1.   for i = 2 to Array.length
2.       key = Array[i]
3.       j = i - 1
4.       while (j > 0 AND Array[j] > key)
5.           Array[j + 1] = Array[j]
6.           j = j - 1
7.       Array[j + 1] = key 
```

* Example 1
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


