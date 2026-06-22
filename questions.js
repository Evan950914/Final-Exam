const questions = [
  {
    id: 1,
    question: "參考下圖，使用 Prim 演算法找尋此圖形的最小生成樹，此最小生成樹會有幾個邊？",
    image: "images/q001.png",
    options: {
      A: "5",
      B: "7",
      C: "6",
      D: "4"
    },
    answer: "B",
    explanation: "最小生成樹的邊數固定是節點數 - 1。圖中有 8 個節點，所以邊數是 7。"
  },
  {
    id: 2,
    question: "若 x 代表水平座標，y 代表垂直座標，w 代表寬度，h 代表高度，若欲【向下移，若超過下邊界，則移到上邊界】，則應執行：",
    options: {
      A: "if(--y < 0)y=h-1;",
      B: "if(++y>=h)y=h-1;",
      C: "if(++y>=h)y=0;",
      D: "if(--y < 0)y=0;"
    },
    answer: "C",
    explanation: "向下移是 y 加 1，所以用 ++y。若 y >= h，代表超過下邊界，要回到上邊界 0。"
  },
  {
    id: 3,
    question: "參考下圖之 2-3 樹，加入 50，則調整後，根節點之中子節點的資料為：",
    image: "images/q003.png",
    options: {
      A: "55",
      B: "50",
      C: "25 與 80",
      D: "45 與 55"
    },
    answer: "B",
    explanation: "50 加入 [45 | 55] 後會形成 [45 | 50 | 55]，節點滿溢後中間值 50 往上提升。"
  },
  {
    id: 4,
    question: "參考下圖，使用拓樸排序 (Topology Sort) 演算法找尋可能的路徑為？",
    image: "images/q004.png",
    options: {
      A: "40123567",
      B: "01234567",
      C: "找不到",
      D: "54623170"
    },
    answer: "A",
    explanation: "拓樸排序必須讓每一條有向邊的起點都排在終點前面。40123567 符合圖中的先後關係。"
  },
  {
    id: 5,
    question: "如果要找出地圖內一點到所有點的最短距離，需要使用以下哪一個演算法？",
    options: {
      A: "Dijkstra 演算法",
      B: "二元搜尋演算法 (Binary Search)",
      C: "深度優先搜尋演算法 (Depth-First Search)",
      D: "氣泡排序演算法 (Bubble Sort)"
    },
    answer: "A",
    explanation: "Dijkstra 演算法用來求單一來源點到其他所有點的最短距離。"
  },
  {
    id: 6,
    question: "參考下圖，使用拓樸排序 (Topology Sort) 演算法找尋可能的路徑為？",
    image: "images/q006.png",
    options: {
      A: "找不到",
      B: "54623170",
      C: "01234567",
      D: "23104567"
    },
    answer: "A",
    explanation: "此圖存在循環，例如 4 → 0 → 3 → 4，因此無法產生合法的拓樸排序。"
  },
  {
    id: 7,
    question: "如果要找出地圖內所有點到所有點的最短距離，需要使用以下哪一個演算法？",
    options: {
      A: "Floyd Warshall 演算法",
      B: "二元搜尋演算法 (Binary Search)",
      C: "氣泡排序演算法 (Bubble Sort)",
      D: "深度優先搜尋演算法 (Depth-First Search)"
    },
    answer: "A",
    explanation: "Floyd Warshall 演算法用來求所有點到所有點之間的最短路徑。"
  },
  {
    id: 8,
    question: "參考下圖之 2-3 樹，刪除 70，則調整後，根節點之中子節點的資料為：",
    image: "images/q008.png",
    options: {
      A: "5",
      B: "40",
      C: "65 與 85",
      D: "40 與 50"
    },
    answer: "B",
    explanation: "刪除 70 後，2-3 樹需要重新平衡。依題目給定結果，根節點之中子節點資料為 40。"
  },
  {
    id: 9,
    question: "參考下圖，使用 Bellman Ford 演算法，找尋從點 0 出發到點 3 最短路徑的距離為？",
    image: "images/q009.png",
    options: {
      A: "11KM",
      B: "8KM",
      C: "9KM",
      D: "10KM"
    },
    answer: "B",
    explanation: "最短路徑可走 0 → 2 → 5 → 3，距離為 5KM + 1KM + 2KM = 8KM。"
  },
  {
    id: 10,
    question: "若 x 代表水平座標，y 代表垂直座標，w 代表寬度，h 代表高度，若欲【向左移，若超過左邊界，則留在左邊界】，則應執行：",
    options: {
      A: "if(++x>=w)x=w-1;",
      B: "if(--x < 0)x=0;",
      C: "if(--x < 0)x=w-1;",
      D: "if(++x>=w)x=0;"
    },
    answer: "B",
    explanation: "向左移是 x 減 1，所以用 --x。若 x < 0，代表超過左邊界，要留在 x = 0。"
  },
  {
    id: 11,
    question: "若 x 代表水平座標，y 代表垂直座標，w 代表寬度，h 代表高度，若欲【向右移，若超過右邊界，則移到左邊界】，則應執行：",
    options: {
      A: "if(--x < 0)x=w-1;",
      B: "if(++x>=w)x=w-1;",
      C: "if(--x < 0)x=0;",
      D: "if(++x>=w)x=0;"
    },
    answer: "D",
    explanation: "向右移是 x 加 1，所以用 ++x。若 x >= w，代表超過右邊界，要回到左邊界 0。"
  },
  {
    id: 12,
    question: "參考下圖，使用 Kruskal 演算法找尋此圖形的最小生成樹，此最小生成樹會有幾個邊？",
    image: "images/q012.png",
    options: {
      A: "5",
      B: "6",
      C: "4",
      D: "7"
    },
    answer: "D",
    explanation: "Kruskal 和 Prim 都是在找最小生成樹。最小生成樹邊數固定是節點數 - 1；此圖有 8 個節點，所以有 7 條邊。"
  },
  {
    id: 13,
    question: "若 x 代表水平座標，y 代表垂直座標，w 代表寬度，h 代表高度，若欲【向左移，若超過左邊界，則移到右邊界】，則應執行：",
    options: {
      A: "if(++x>=w)x=w-1;",
      B: "if(++x>=w)x=0;",
      C: "if(--x < 0)x=w-1;",
      D: "if(--x < 0)x=0;"
    },
    answer: "C",
    explanation: "向左移是 x 減 1，所以用 --x。若 x < 0，代表超過左邊界，要移到右邊界 w - 1。"
  },
  {
    id: 14,
    question: "參考下圖，使用 Dijkstra 演算法，找尋從點 0 出發到點 3 最短路徑的距離為？",
    image: "images/q014.png",
    options: {
      A: "11KM",
      B: "9KM",
      C: "8KM",
      D: "10KM"
    },
    answer: "C",
    explanation: "最短路徑可走 0 → 2 → 5 → 3，距離為 5KM + 1KM + 2KM = 8KM。"
  }
];

const answerString = "BCBAAAABBBDDCC";
