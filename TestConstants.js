const UNSORTED_ARRAY = [7, 4, 5, 2, 10, 1, -3, 945, 0];
const SORTED_ARRAY_ASC = [-3, 0, 1, 2, 4, 5, 7, 10, 945];
const SORTED_ARRAY_DESC = [945, 10, 7, 5, 4, 2, 1, 0, -3];

const MAX_SUB_ARRAY_SIMPLE = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const MAX_SUB_ARRAY_MEDIUM = [
  13,
  -3,
  -25,
  20,
  -3,
  -16,
  -23,
  18,
  20,
  -7,
  12,
  -5,
  -22,
  15,
  -4,
  7,
];
const MAX_SUB_ARRAY_MEDIUM_LEFT = [
  13,
  -3,
  -23,
  18,
  20,
  -7,
  12,
  -25,
  20,
  -3,
  -16,
  -5,
  -22,
  15,
  -4,
  7,
];

const MATRIX_A = [
  [1, 2],
  [3, 4],
];
const MATRIX_B = [
  [2, 0],
  [1, 2],
];

const MATRIX_3X3_A = [
  [10, 20, 10],
  [4, 5, 6],
  [2, 3, 5],
];
const MATRIX_3X3_B = [
  [3, 2, 4],
  [3, 3, 9],
  [4, 4, 2],
];

const MATRIX_4X4_A = [
  [5, 7, 9, 10],
  [2, 3, 3, 8],
  [8, 10, 2, 3],
  [3, 3, 4, 8],
];
const MATRIX_4X4_B = [
  [3, 10, 12, 18],
  [12, 1, 4, 9],
  [9, 10, 12, 2],
  [3, 12, 4, 10],
];

const MATRIX_A_X_B = [
  [4, 4],
  [10, 8],
];
const MATRIX_B_X_A = [
  [2, 4],
  [7, 10],
];

const MATRIX_3X3_A_X_B = [
  [130, 120, 240],
  [51, 47, 73],
  [35, 33, 45],
];
const MATRIX_4X4_A_X_B = [
  [210, 267, 236, 271],
  [93, 149, 104, 149],
  [171, 146, 172, 268],
  [105, 169, 128, 169],
];

const FIB_35 = 9227465;
const FIB_39 = 63245986;
const FIB_44 = 701408733;
const FIB_49 = 7778742049;
const FIB_54 = 86267571272;
const FIB_59 = 956722026041;
const FIB_63 = 6557470319842;
const FIB_68 = 72723460248141;
const FIB_73 = 806515533049393;
const FIB_78 = 8944394323791464;

const ARRAY_TO_HEAP = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
const LARGE_ARRAY_TO_HEAP = [
  4,
  1,
  3,
  2,
  16,
  9,
  10,
  14,
  8,
  7,
  99,
  88,
  77,
  14,
  55,
  23,
  67,
  56,
  18,
];
const MAX_HEAP = [16, 14, 9, 10, 8, 1, 4, 2, 3, 7];
const MAX_HEAP_SORTED = [1, 2, 3, 4, 7, 8, 9, 10, 14, 16];

const LINKED_LIST_ARRAY = [9, 8, 7, 6, 1, 2, 3, 4, 10, 11, 20, 19];
const SINGLY_LINKED_LIST_AS_STRING =
  "(HEAD)->9->8->7->6->1->2->3->4->10->11->20->19~TAIL~";
const APPENDED_SINGLY_LINKED_LIST_AS_STRING =
  "(HEAD)->66->88->77->9->8->7->6->1->2->3->4->10->11->20->19~TAIL~";
const DOUBLY_LINKED_LIST_AS_STRING =
  "(HEAD)--{null<-[9]->8}----{9<-[8]->7}----{8<-[7]->6}----{7<-[6]->1}----{6<-[1]->2}----{1<-[2]->3}----{2<-[3]->4}----{3<-[4]->10}----{4<-[10]->11}----{10<-[11]->20}----{11<-[20]->19}----{20<-[19]->null}--~TAIL~";
const APPENDED_DOUBLY_LINKED_LIST_AS_STRING =
  "(HEAD)--{null<-[66]->88}----{66<-[88]->77}----{88<-[77]->9}----{77<-[9]->8}----{9<-[8]->7}----{8<-[7]->6}----{7<-[6]->1}----{6<-[1]->2}----{1<-[2]->3}----{2<-[3]->4}----{3<-[4]->10}----{4<-[10]->11}----{10<-[11]->20}----{11<-[20]->19}----{20<-[19]->null}--~TAIL~";

module.exports = {
  UNSORTED_ARRAY,
  SORTED_ARRAY_ASC,
  SORTED_ARRAY_DESC,
  MAX_SUB_ARRAY_SIMPLE,
  MAX_SUB_ARRAY_MEDIUM,
  MAX_SUB_ARRAY_MEDIUM_LEFT,
  MATRIX_A,
  MATRIX_B,
  MATRIX_3X3_A,
  MATRIX_3X3_B,
  MATRIX_4X4_A,
  MATRIX_4X4_B,
  MATRIX_A_X_B,
  MATRIX_B_X_A,
  MATRIX_3X3_A_X_B,
  MATRIX_4X4_A_X_B,
  FIB_35,
  FIB_39,
  FIB_44,
  FIB_49,
  FIB_54,
  FIB_59,
  FIB_63,
  FIB_68,
  FIB_73,
  FIB_78,
  ARRAY_TO_HEAP,
  LARGE_ARRAY_TO_HEAP,
  MAX_HEAP,
  MAX_HEAP_SORTED,
  LINKED_LIST_ARRAY,
  SINGLY_LINKED_LIST_AS_STRING,
  APPENDED_SINGLY_LINKED_LIST_AS_STRING,
  DOUBLY_LINKED_LIST_AS_STRING,
  APPENDED_DOUBLY_LINKED_LIST_AS_STRING,
};
