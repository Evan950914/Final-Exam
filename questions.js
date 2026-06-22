const questions = [
  {
    "id": 1,
    "question": "參考下圖，使用 Prim 演算法找尋此圖形的最小生成樹，此最小生成樹會有幾個邊？",
    "image": "images/q001.png",
    "options": {
      "A": "5",
      "B": "7",
      "C": "6",
      "D": "4"
    },
    "answer": "B",
    "explanation": "最小生成樹的邊數固定是節點數 - 1。圖中有 8 個節點，所以邊數是 7。",
    "source": "第7章14題",
    "originalNo": 1
  },
  {
    "id": 2,
    "question": "若 x 代表水平座標，y 代表垂直座標，w 代表寬度，h 代表高度，若欲【向下移，若超過下邊界，則移到上邊界】，則應執行：",
    "options": {
      "A": "if(--y < 0)y=h-1;",
      "B": "if(++y>=h)y=h-1;",
      "C": "if(++y>=h)y=0;",
      "D": "if(--y < 0)y=0;"
    },
    "answer": "C",
    "explanation": "向下移是 y 加 1，所以用 ++y。若 y >= h，代表超過下邊界，要回到上邊界 0。",
    "source": "第7章14題",
    "originalNo": 2
  },
  {
    "id": 3,
    "question": "參考下圖之 2-3 樹，加入 50，則調整後，根節點之中子節點的資料為：",
    "image": "images/q003.png",
    "options": {
      "A": "55",
      "B": "50",
      "C": "25 與 80",
      "D": "45 與 55"
    },
    "answer": "B",
    "explanation": "50 加入 [45 | 55] 後會形成 [45 | 50 | 55]，節點滿溢後中間值 50 往上提升。",
    "source": "第7章14題",
    "originalNo": 3
  },
  {
    "id": 4,
    "question": "參考下圖，使用拓樸排序 (Topology Sort) 演算法找尋可能的路徑為？",
    "image": "images/q004.png",
    "options": {
      "A": "40123567",
      "B": "01234567",
      "C": "找不到",
      "D": "54623170"
    },
    "answer": "A",
    "explanation": "拓樸排序必須讓每一條有向邊的起點都排在終點前面。40123567 符合圖中的先後關係。",
    "source": "第7章14題",
    "originalNo": 4
  },
  {
    "id": 5,
    "question": "如果要找出地圖內一點到所有點的最短距離，需要使用以下哪一個演算法？",
    "options": {
      "A": "Dijkstra 演算法",
      "B": "二元搜尋演算法 (Binary Search)",
      "C": "深度優先搜尋演算法 (Depth-First Search)",
      "D": "氣泡排序演算法 (Bubble Sort)"
    },
    "answer": "A",
    "explanation": "Dijkstra 演算法用來求單一來源點到其他所有點的最短距離。",
    "source": "第7章14題",
    "originalNo": 5
  },
  {
    "id": 6,
    "question": "參考下圖，使用拓樸排序 (Topology Sort) 演算法找尋可能的路徑為？",
    "image": "images/q006.png",
    "options": {
      "A": "找不到",
      "B": "54623170",
      "C": "01234567",
      "D": "23104567"
    },
    "answer": "A",
    "explanation": "此圖存在循環，例如 4 → 0 → 3 → 4，因此無法產生合法的拓樸排序。",
    "source": "第7章14題",
    "originalNo": 6
  },
  {
    "id": 7,
    "question": "如果要找出地圖內所有點到所有點的最短距離，需要使用以下哪一個演算法？",
    "options": {
      "A": "Floyd Warshall 演算法",
      "B": "二元搜尋演算法 (Binary Search)",
      "C": "氣泡排序演算法 (Bubble Sort)",
      "D": "深度優先搜尋演算法 (Depth-First Search)"
    },
    "answer": "A",
    "explanation": "Floyd Warshall 演算法用來求所有點到所有點之間的最短路徑。",
    "source": "第7章14題",
    "originalNo": 7
  },
  {
    "id": 8,
    "question": "參考下圖之 2-3 樹，刪除 70，則調整後，根節點之中子節點的資料為：",
    "image": "images/q008.png",
    "options": {
      "A": "5",
      "B": "40",
      "C": "65 與 85",
      "D": "40 與 50"
    },
    "answer": "B",
    "explanation": "刪除 70 後，2-3 樹需要重新平衡。依題目給定結果，根節點之中子節點資料為 40。",
    "source": "第7章14題",
    "originalNo": 8
  },
  {
    "id": 9,
    "question": "參考下圖，使用 Bellman Ford 演算法，找尋從點 0 出發到點 3 最短路徑的距離為？",
    "image": "images/q009.png",
    "options": {
      "A": "11KM",
      "B": "8KM",
      "C": "9KM",
      "D": "10KM"
    },
    "answer": "B",
    "explanation": "最短路徑可走 0 → 2 → 5 → 3，距離為 5KM + 1KM + 2KM = 8KM。",
    "source": "第7章14題",
    "originalNo": 9
  },
  {
    "id": 10,
    "question": "若 x 代表水平座標，y 代表垂直座標，w 代表寬度，h 代表高度，若欲【向左移，若超過左邊界，則留在左邊界】，則應執行：",
    "options": {
      "A": "if(++x>=w)x=w-1;",
      "B": "if(--x < 0)x=0;",
      "C": "if(--x < 0)x=w-1;",
      "D": "if(++x>=w)x=0;"
    },
    "answer": "B",
    "explanation": "向左移是 x 減 1，所以用 --x。若 x < 0，代表超過左邊界，要留在 x = 0。",
    "source": "第7章14題",
    "originalNo": 10
  },
  {
    "id": 11,
    "question": "若 x 代表水平座標，y 代表垂直座標，w 代表寬度，h 代表高度，若欲【向右移，若超過右邊界，則移到左邊界】，則應執行：",
    "options": {
      "A": "if(--x < 0)x=w-1;",
      "B": "if(++x>=w)x=w-1;",
      "C": "if(--x < 0)x=0;",
      "D": "if(++x>=w)x=0;"
    },
    "answer": "D",
    "explanation": "向右移是 x 加 1，所以用 ++x。若 x >= w，代表超過右邊界，要回到左邊界 0。",
    "source": "第7章14題",
    "originalNo": 11
  },
  {
    "id": 12,
    "question": "參考下圖，使用 Kruskal 演算法找尋此圖形的最小生成樹，此最小生成樹會有幾個邊？",
    "image": "images/q012.png",
    "options": {
      "A": "5",
      "B": "6",
      "C": "4",
      "D": "7"
    },
    "answer": "D",
    "explanation": "Kruskal 和 Prim 都是在找最小生成樹。最小生成樹邊數固定是節點數 - 1；此圖有 8 個節點，所以有 7 條邊。",
    "source": "第7章14題",
    "originalNo": 12
  },
  {
    "id": 13,
    "question": "若 x 代表水平座標，y 代表垂直座標，w 代表寬度，h 代表高度，若欲【向左移，若超過左邊界，則移到右邊界】，則應執行：",
    "options": {
      "A": "if(++x>=w)x=w-1;",
      "B": "if(++x>=w)x=0;",
      "C": "if(--x < 0)x=w-1;",
      "D": "if(--x < 0)x=0;"
    },
    "answer": "C",
    "explanation": "向左移是 x 減 1，所以用 --x。若 x < 0，代表超過左邊界，要移到右邊界 w - 1。",
    "source": "第7章14題",
    "originalNo": 13
  },
  {
    "id": 14,
    "question": "參考下圖，使用 Dijkstra 演算法，找尋從點 0 出發到點 3 最短路徑的距離為？",
    "image": "images/q014.png",
    "options": {
      "A": "11KM",
      "B": "9KM",
      "C": "8KM",
      "D": "10KM"
    },
    "answer": "C",
    "explanation": "最短路徑可走 0 → 2 → 5 → 3，距離為 5KM + 1KM + 2KM = 8KM。",
    "source": "第7章14題",
    "originalNo": 14
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 1,
    "options": {
      "A": "佇列(Queue)",
      "B": "樹狀結構(Tree)",
      "C": "堆疊(Stack)",
      "D": "堆積(Heap)"
    },
    "answer": "B",
    "question": "檔案系統內的資料夾下可以有資料夾與檔案，與以下何種資料結構最為接近？",
    "id": 15,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 2,
    "options": {
      "A": "5",
      "B": "7",
      "C": "9",
      "D": "11"
    },
    "answer": "B",
    "question": "假設二元樹的節點都只可存放一筆資料，根(Root) 節點為第一層，根節點的子節點為第二層，以此類推，此樹最少需幾層才 能存放100 筆資料？",
    "id": 16,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 3,
    "options": {
      "A": "7",
      "B": "15",
      "C": "16",
      "D": "31"
    },
    "answer": "B",
    "question": "高度為4 的二元樹最多可包含多少個節點？ (假設根節點的高度為1)",
    "id": 17,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 4,
    "options": {
      "A": "8",
      "B": "7",
      "C": "6",
      "D": "5"
    },
    "answer": "D",
    "question": "二元樹中有4 個分支度(degree) 為2 的節點，則此二元樹有幾個葉節點",
    "id": 18,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 5,
    "options": {
      "A": "12",
      "B": "13",
      "C": "14",
      "D": "26"
    },
    "answer": "A",
    "question": "二元樹有13 個葉節點 (leaf node)，則會有幾個分支度為2 的節點？",
    "id": 19,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 6,
    "options": {
      "A": "ABCDEF",
      "B": "ACBDFE",
      "C": "ACDBFE",
      "D": "ABCDFE"
    },
    "answer": "C",
    "question": "對以下 樹狀結構進行前序(PreOrder) 走訪的顯示結果為何？",
    "image": "images/bank05_q006.png",
    "id": 20,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 7,
    "options": {
      "A": "ABCDEF",
      "B": "DCAFBE",
      "C": "DCABFE",
      "D": "ABCDFE"
    },
    "answer": "B",
    "question": "對以下 樹狀結構進行中序(InOrder) 走訪的顯示結果為何？",
    "image": "images/bank05_q007.png",
    "id": 21,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 8,
    "options": {
      "A": "DCFEBA",
      "B": "DCAFBE",
      "C": "DCABFE",
      "D": "DCABEF"
    },
    "answer": "A",
    "question": "對以下 樹狀結構進行後序(PostOrder) 走訪的顯示結果為何？",
    "image": "images/bank05_q008.png",
    "id": 22,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 9,
    "options": {
      "A": "BECDFA",
      "B": "BECFDA",
      "C": "ABCDEF",
      "D": "BCEFDA"
    },
    "answer": "B",
    "question": "二元樹內每一個節點都存放一個英文字母，前序(PreOrder) 走訪顯示結果為ACBEDF，中序(InOrder) 走訪顯示結果為 BCEAFD，則其後序(PostOrder) 走訪顯示結果為以下何者？",
    "id": 23,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 10,
    "options": {
      "A": "BECDFA",
      "B": "BCEFDA",
      "C": "ABCDEF",
      "D": "ACBEDF"
    },
    "answer": "D",
    "question": "二元樹內每一個節點都存放一個英文字母，後序(PostOrder) 走訪顯示結果為BECFDA，中序(InOrder) 走訪顯示結果為 BCEAFD，則其前序(PreOrder) 走訪顯示結果為以下何者？",
    "id": 24,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 11,
    "options": {
      "A": "Z",
      "B": "K",
      "C": "A",
      "D": "B"
    },
    "answer": "A",
    "question": "二元樹內每一個節點都存放一個英文字母，該二元樹後序走訪顯示結果為BACKZ，請問其樹根為何？",
    "id": 25,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 12,
    "options": {
      "A": "Z",
      "B": "K",
      "C": "A",
      "D": "B"
    },
    "answer": "D",
    "question": "二元樹內每一個節點都存放一個英文字母，該二元樹前序走訪顯示結果為BACKZ，請問其樹根為何？",
    "id": 26,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 13,
    "options": {
      "A": "51, 32, 76, 65, 89, 83",
      "B": "51, 76, 65, 89, 83",
      "C": "51, 76, 89, 83",
      "D": "51, 76, 89, 65, 83"
    },
    "answer": "C",
    "question": "以下 二元搜尋樹(Binary Search Tree)，若要找到數值83 的節點，請問搜尋 的過程會經過的節點為何？",
    "image": "images/bank05_q013.png",
    "id": 27,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 14,
    "options": {
      "A": "1, 6, 9, 13, 7, 16",
      "B": "1, 6, 7, 9, 13, 16",
      "C": "16, 13, 9, 7, 6, 1",
      "D": "7, 9, 6, 1, 13, 16"
    },
    "answer": "D",
    "question": "以下數列建立二元搜尋樹，其樹的高度較小？",
    "id": 28,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 15,
    "options": {
      "A": "AB*CD/+E-",
      "B": "AB*CD/-E+",
      "C": "AB/CD*-E+",
      "D": "AB/CD*-E+"
    },
    "answer": "B",
    "question": "將運算式「A * B - C / D + E」使用 二元樹表示如下，接著使用後序走 訪此二元樹結果顯示結果為何？",
    "image": "images/bank05_q015.png",
    "id": 29,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 16,
    "options": {
      "A": "邊的個數比節點的個數少1",
      "B": "沒有循環 (Cycle)",
      "C": "所有節點可以連通",
      "D": "邊的個數比節點的個數多1"
    },
    "answer": "D",
    "question": "下列何者不是樹狀結構的特性？",
    "id": 30,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 17,
    "options": {
      "A": "h-1",
      "B": "h",
      "C": "2h-1",
      "D": "2(h-1)-1"
    },
    "answer": "C",
    "question": "高度為 h 的二元樹最多可包含多少個節點？ (假設根節點的高度為 1)",
    "id": 31,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 18,
    "options": {
      "A": "h-1",
      "B": "h",
      "C": "2h-1",
      "D": "2(h-1)-1"
    },
    "answer": "B",
    "question": "高度為 h 的二元樹的最少節點個數？ (假設根節點的高度為 1)",
    "id": 32,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 19,
    "options": {
      "A": "ABCDEF",
      "B": "BADCFE",
      "C": "BDFECA",
      "D": "ACEBDF"
    },
    "answer": "A",
    "question": "以下 二元樹，若以前序的方式走訪之，則其輸出結果為",
    "image": "images/bank05_q019.png",
    "id": 33,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 20,
    "options": {
      "A": "BADCFE",
      "B": "ABCDEF",
      "C": "BDFECA",
      "D": "BACDFE"
    },
    "answer": "A",
    "question": "以下 二元樹，若以中序的方式走訪之，則其輸出結果為",
    "image": "images/bank05_q020.png",
    "id": 34,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 21,
    "options": {
      "A": "BDFECA",
      "B": "ABCDEF",
      "C": "BADCFE",
      "D": "BDFACE"
    },
    "answer": "A",
    "question": "以下 二元樹，若以後序的方式走訪之，則其輸出結果為",
    "image": "images/bank05_q021.png",
    "id": 35,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 22,
    "options": {
      "A": "36, 24, 20, 10, 35, 47, 56",
      "B": "10, 20, 24, 35, 36, 47, 56",
      "C": "10, 20, 35, 24, 56, 47, 36",
      "D": "56, 47, 36, 35, 24, 20, 10"
    },
    "answer": "A",
    "question": "以下 二元樹，若以前序的方式走訪之，則其輸出結果為",
    "image": "images/bank05_q022.png",
    "id": 36,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 23,
    "options": {
      "A": "10, 20, 24, 35, 36, 47, 56",
      "B": "36, 24, 20, 10, 35, 47, 56",
      "C": "10, 20, 35, 24, 56, 47, 36",
      "D": "56, 47, 36, 35, 24, 20, 10"
    },
    "answer": "A",
    "question": "以下 二元樹，若以中序的方式走訪之，則其輸出結果為",
    "image": "images/bank05_q023.png",
    "id": 37,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 24,
    "options": {
      "A": "10, 20, 35, 24, 56, 47, 36",
      "B": "10, 20, 24, 35, 36, 47, 56",
      "C": "36, 24, 20, 10, 35, 47, 56",
      "D": "56, 47, 36, 35, 24, 20, 10"
    },
    "answer": "A",
    "question": "以下 二元樹，若以後序的方式走訪之，則其輸出結果為",
    "image": "images/bank05_q024.png",
    "id": 38,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 25,
    "options": {
      "A": "BADGEICFH",
      "B": "GDAEIBCHF",
      "C": "GDIEAHFCB",
      "D": "ABCDEFGHI"
    },
    "answer": "A",
    "question": "以下 二元樹，若以前序的方式走訪之，則其輸出結果為",
    "image": "images/bank05_q025.png",
    "id": 39,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 26,
    "options": {
      "A": "GDAEIBCHF",
      "B": "BADGEICFH",
      "C": "GDIEAHFCB",
      "D": "ABCDEFGHI"
    },
    "answer": "A",
    "question": "以下 二元樹，若以中序的方式走訪之，則其輸出結果為",
    "image": "images/bank05_q026.png",
    "id": 40,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 27,
    "options": {
      "A": "GDIEAHFCB",
      "B": "BADGEICFH",
      "C": "GDAEIBCHF",
      "D": "ABCDEFGHI"
    },
    "answer": "A",
    "question": "以下 二元樹，若以後序的方式走訪之，則其輸出結果為",
    "image": "images/bank05_q027.png",
    "id": 41,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 28,
    "options": {
      "A": "ZAEFDQJL",
      "B": "EAFZQLJD",
      "C": "EFALJQDZ",
      "D": "ADEFJLQZ"
    },
    "answer": "A",
    "question": "以下 二元樹，若以前序的方式走訪之，則其輸出結果為",
    "image": "images/bank05_q028.png",
    "id": 42,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 29,
    "options": {
      "A": "EAFZQLJD",
      "B": "EFALJQDZ",
      "C": "ZAEFDQJL",
      "D": "ADEFJLQZ"
    },
    "answer": "A",
    "question": "以下 二元樹，若以中序的方式走訪之，則其輸出結果為",
    "image": "images/bank05_q029.png",
    "id": 43,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 30,
    "options": {
      "A": "EFALJQDZ",
      "B": "EAFZQLJD",
      "C": "ZAEFDQJL",
      "D": "ADEFJLQZ"
    },
    "answer": "A",
    "question": "以下 二元樹，若以後序的方式走訪之，則其輸出結果為",
    "image": "images/bank05_q030.png",
    "id": 44,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 31,
    "options": {
      "A": "需要8*25個，用了24個",
      "B": "需要8+25個，用了25個",
      "C": "需要8+25個，用了8個",
      "D": "需要25個，用了8個"
    },
    "answer": "A",
    "question": "有一棵樹，其分支度為8，並且有25個節點，請問這棵樹需要幾個鏈結欄位，實際上用了幾個鏈結欄位",
    "id": 45,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 32,
    "options": {
      "A": "是1棵二元樹",
      "B": "共有3個內部節點",
      "C": "節點F的高度為2",
      "D": "整棵樹的高度為7"
    },
    "answer": "A",
    "question": "如 何者正確",
    "image": "images/bank05_q032.png",
    "id": 46,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 33,
    "options": {
      "A": "共有4個葉節點",
      "B": "是full的",
      "C": "是complete的",
      "D": "是left skewed的"
    },
    "answer": "A",
    "question": "如 何者正確",
    "image": "images/bank05_q033.png",
    "id": 47,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 34,
    "options": {
      "A": "節點B的高度為2",
      "B": "是right skewed的",
      "C": "其所有節點之分支度均為2",
      "D": "節點E和節點F是Sibling"
    },
    "answer": "A",
    "question": "如 何者正確",
    "image": "images/bank05_q034.png",
    "id": 48,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 35,
    "options": {
      "A": "若其只有1個葉節點 則它必然是左傾的",
      "B": "最少也有7+1個節點",
      "C": "最多有(28)-1個節點",
      "D": "第6階度最多只有2(6-1)個節點"
    },
    "answer": "A",
    "question": "若一棵二元樹其高度為7 則何者錯誤",
    "id": 49,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 36,
    "options": {
      "A": "若其無分支度為1的節點 則它必然是complete的",
      "B": "若其第8階度有2(8-1)個節點 則它是full的",
      "C": "即使它有分支度為1的節點 它還是有可能是complete的",
      "D": "若其只有1個葉節點 則其所有內部節點的分支度均為1"
    },
    "answer": "A",
    "question": "若一棵二元樹其高度為7 則何者錯誤",
    "id": 50,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 37,
    "options": {
      "A": "ABDHECFIG",
      "B": "ABCDEFGHI",
      "C": "ABEFCGDHI",
      "D": "EFBGCHIDA"
    },
    "answer": "A",
    "question": "如 其前序追蹤為",
    "image": "images/bank05_q037.png",
    "id": 51,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 38,
    "options": {
      "A": "DHBEAFICG",
      "B": "FEGIHDCBA",
      "C": "ABCDEFGHI",
      "D": "BCDAFEHIG"
    },
    "answer": "A",
    "question": "如 其中序追蹤為",
    "image": "images/bank05_q038.png",
    "id": 52,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 39,
    "options": {
      "A": "HDEBIFGCA",
      "B": "DCBFIHGEA",
      "C": "ABDFGHIEC",
      "D": "FDHGIBEAC"
    },
    "answer": "A",
    "question": "如 其後序追蹤為",
    "image": "images/bank05_q039.png",
    "id": 53,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 40,
    "options": {
      "A": "NULL",
      "B": "節點I",
      "C": "節點E",
      "D": "節點G"
    },
    "answer": "A",
    "question": "如 節點D的左引線指向",
    "image": "images/bank05_q040.png",
    "id": 54,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 41,
    "options": {
      "A": "節點B",
      "B": "節點E",
      "C": "節點G",
      "D": "節點D"
    },
    "answer": "A",
    "question": "如 節點H的右引線指向",
    "image": "images/bank05_q041.png",
    "id": 55,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 42,
    "options": {
      "A": "節點A",
      "B": "節點G",
      "C": "節點D",
      "D": "節點H"
    },
    "answer": "A",
    "question": "如 節點F的左引線指向",
    "image": "images/bank05_q042.png",
    "id": 56,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 43,
    "options": {
      "A": "節點F",
      "B": "節點D",
      "C": "節點H",
      "D": "節點C"
    },
    "answer": "A",
    "question": "如 節點I的左引線指向",
    "image": "images/bank05_q043.png",
    "id": 57,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 44,
    "options": {
      "A": "節點C",
      "B": "節點D",
      "C": "節點A",
      "D": "節點E"
    },
    "answer": "A",
    "question": "若有1棵二元樹 其中序追蹤為為ECBDA 前序追蹤為ABCED，則該樹之節點B的左子節點為",
    "id": 58,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 45,
    "options": {
      "A": "節點D",
      "B": "節點A",
      "C": "節點E",
      "D": "NULL"
    },
    "answer": "A",
    "question": "若有1棵二元樹 其中序追蹤為為ECBDA 前序追蹤為ABCED，則該樹之節點B的右子節點為",
    "id": 59,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 46,
    "options": {
      "A": "NULL",
      "B": "節點A",
      "C": "節點B",
      "D": "節點C"
    },
    "answer": "A",
    "question": "若有1棵二元樹 其中序追蹤為為DFBAEGC 後序追蹤為FDBGECA，則該樹之節點E的左子節點為",
    "id": 60,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 47,
    "options": {
      "A": "節點G",
      "B": "節點C",
      "C": "節點D",
      "D": "節點F"
    },
    "answer": "A",
    "question": "若有1棵二元樹 其中序追蹤為為DFBAEGC 後序追蹤為FDBGECA，則該樹之節點E的右子節點為",
    "id": 61,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 48,
    "options": {
      "A": "節點F",
      "B": "NULL",
      "C": "節點A",
      "D": "節點B"
    },
    "answer": "A",
    "question": "若有1棵二元樹 其中序追蹤為為CDBAFEHG 前序追蹤為ABCDEFGH，則該樹之節點E的左子節點為",
    "id": 62,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 49,
    "options": {
      "A": "節點G",
      "B": "節點C",
      "C": "節點D",
      "D": "節點H"
    },
    "answer": "A",
    "question": "若有1棵二元樹 其中序追蹤為為CDBAFEHG 前序追蹤為ABCDEFGH，則該樹之節點E的右子節點為",
    "id": 63,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 50,
    "options": {
      "A": "把1掛在5之下",
      "B": "把5掛在1之下",
      "C": "整棵樹高度為2",
      "D": "整棵樹共有6個節點"
    },
    "answer": "A",
    "question": "若以節點個數加權法 將set的資料union成Tree，則在依序執行union(1,2)、union(3,4)、union(5,6)、union(1,3)後，若再 執行union(1,5)，則何者錯誤",
    "id": 64,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 51,
    "options": {
      "A": "節點C",
      "B": "節點D",
      "C": "節點F",
      "D": "節點H"
    },
    "answer": "A",
    "question": "將 轉為二元樹時 節點B的右子節點變成",
    "image": "images/bank05_q051.png",
    "id": 65,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 52,
    "options": {
      "A": "NULL",
      "B": "節點F",
      "C": "節點H",
      "D": "節點J"
    },
    "answer": "A",
    "question": "將 轉為二元樹時 節點E的左子節點變成",
    "image": "images/bank05_q052.png",
    "id": 66,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 53,
    "options": {
      "A": "NULL",
      "B": "節點H",
      "C": "節點J",
      "D": "節點K"
    },
    "answer": "A",
    "question": "將 轉為二元樹時 節點A的右子節點變成",
    "image": "images/bank05_q053.png",
    "id": 67,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 54,
    "options": {
      "A": "節點G",
      "B": "節點J",
      "C": "節點K",
      "D": "節點M"
    },
    "answer": "A",
    "question": "將 轉為二元樹時 節點C的左子節點變成",
    "image": "images/bank05_q054.png",
    "id": 68,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 55,
    "options": {
      "A": "3",
      "B": "1",
      "C": "2",
      "D": "4"
    },
    "answer": "A",
    "question": "將 之三元樹儲存在陣列中時，若將節點M放在陣列中的第0個位置，則節點W會被放在陣列中的第 幾個位置",
    "image": "images/bank05_q055.png",
    "id": 69,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 56,
    "options": {
      "A": "6",
      "B": "5",
      "C": "7",
      "D": "9"
    },
    "answer": "A",
    "question": "將 之三元樹儲存在陣列中時，若將節點M放在陣列中的第0個位置，則節點B會被放在陣列中的第幾 個位置",
    "image": "images/bank05_q056.png",
    "id": 70,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 57,
    "options": {
      "A": "8",
      "B": "10",
      "C": "11",
      "D": "12"
    },
    "answer": "A",
    "question": "將 之三元樹儲存在陣列中時，若將節點M放在陣列中的第0個位置，則節點P會被放在陣列中的第幾 個位置",
    "image": "images/bank05_q057.png",
    "id": 71,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 58,
    "options": {
      "A": "1位元",
      "B": "2位元",
      "C": "3位元",
      "D": "4位元"
    },
    "answer": "C",
    "question": "字串中每個字母的出現頻率為A 出現5 次，B 出現12 次，C 出現7 次，D 出現3 次。使用Huffman 編碼找出字母A 編碼長度 為？",
    "id": 72,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 59,
    "options": {
      "A": "1位元",
      "B": "2位元",
      "C": "3位元",
      "D": "4位元"
    },
    "answer": "A",
    "question": "字串中每個字母的出現頻率為A 出現5 次，B 出現12 次，C 出現7 次，D 出現3 次。使用Huffman 編碼找出字母B 編碼長度 為？",
    "id": 73,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 60,
    "options": {
      "A": "1位元",
      "B": "2位元",
      "C": "3位元",
      "D": "4位元"
    },
    "answer": "D",
    "question": "字串中每個字母的出現次數，表示該字母的出現頻率。使用Huffman 編碼找出以下字串之字母B 的編碼長度為？ AAABBCCCCDDDEEEEEE",
    "id": 74,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 61,
    "options": {
      "A": "1位元",
      "B": "2位元",
      "C": "3位元",
      "D": "4位元"
    },
    "answer": "B",
    "question": "字串中每個字母的出現次數，表示該字母的出現頻率。使用Huffman 編碼找出以下字串之字母E 的編碼長度為？ AAABBCCCCDDDEEEEEE",
    "id": 75,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 62,
    "options": {
      "A": "39位元",
      "B": "42位元",
      "C": "41位元",
      "D": "48位元"
    },
    "answer": "C",
    "question": "字串中每個字母的出現次數，表示該字母的出現頻率。使用Huffman 編碼找出以下字串之編碼長度為？ AAABBCCCCDDDEEEEEE",
    "id": 76,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 63,
    "options": {
      "A": "BDACDBB",
      "B": "BDBACDB",
      "C": "BDABCDB",
      "D": "ABDCDBC"
    },
    "answer": "C",
    "question": "已知Huffman 編碼將A 編碼為000，B 編碼為1，C 編碼為001，D 編碼為01，若收到訊息「1010001001011」，請問還原出 的字串為以下何者？",
    "id": 77,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 64,
    "options": {
      "A": "(圖A)",
      "B": "(圖B)",
      "C": "(圖C)",
      "D": "(圖D)"
    },
    "answer": "A",
    "question": "以下哪一個不是AVL 樹？",
    "image": "images/bank05_q064.png",
    "id": 78,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 65,
    "options": {
      "A": "(圖A)",
      "B": "(圖B)",
      "C": "(圖C)",
      "D": "(圖D)"
    },
    "answer": "B",
    "question": "以下 AVL 樹，當插入數字33 ，則AVL 樹調整後為以下何者？",
    "image": [
      "images/bank05_q065_1.png",
      "images/bank05_q065_2.png"
    ],
    "id": 79,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 66,
    "options": {
      "A": "(圖A)",
      "B": "(圖B)",
      "C": "(圖C)",
      "D": "(圖D)"
    },
    "answer": "B",
    "question": "以下 AVL 樹，當插入數字38 ，則AVL 樹調整後為以下何者？",
    "image": [
      "images/bank05_q066_1.png",
      "images/bank05_q066_2.png"
    ],
    "id": 80,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 67,
    "options": {
      "A": "AVL樹",
      "B": "2-3樹",
      "C": "B樹",
      "D": "B+樹"
    },
    "answer": "A",
    "question": "高度平衡二元樹 又稱為",
    "id": 81,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 68,
    "options": {
      "A": "中間值",
      "B": "最小值",
      "C": "最大值",
      "D": "依BFS追蹤 排在最後面的值"
    },
    "answer": "A",
    "question": "高度平衡二元樹 判定為LR型時，應將3個值的何者上移，使其成為其他值的父節點",
    "id": 82,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 69,
    "options": {
      "A": "左子樹中的最大值",
      "B": "右子樹中的最大值",
      "C": "依BFS追蹤 排在最後面的值",
      "D": "依DFS追蹤 排在最前面的值"
    },
    "answer": "A",
    "question": "二元搜尋樹刪除某值時 可將何者搬至被刪除處 以維持 二元搜尋樹的特性",
    "id": 83,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 70,
    "options": {
      "A": "氣泡排序",
      "B": "插入排序",
      "C": "快速排序",
      "D": "堆積排序"
    },
    "answer": "A",
    "question": "排序的過程如下，請問是以下哪一個排序演算法？ 3 5 4 6 2 → 3 4 5 2 6 → 3 4 2 5 6 → 3 2 4 5 6 → 2 3 4 5 6",
    "id": 84,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 71,
    "options": {
      "A": "氣泡排序",
      "B": "基數排序",
      "C": "快速排序",
      "D": "合併排序"
    },
    "answer": "A",
    "question": "以下哪一個演算法屬於in-place 的演算法？",
    "id": 85,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 72,
    "options": {
      "A": "2 3 4 7 5 1 8",
      "B": "2 3 5 4 7 1 8",
      "C": "2 3 5 7 4 1 8",
      "D": "5 2 4 1 3 7 8"
    },
    "answer": "C",
    "question": "使用氣泡排序演算法，由小到大排序數列「3 2 5 7 8 4 1」，請問外層迴圈跑一次後的結果為以下哪一個數列？",
    "id": 86,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 73,
    "options": {
      "A": "2 3 4 1 5 7 8",
      "B": "2 3 5 4 1 7 8",
      "C": "2 3 5 7 4 1 8",
      "D": "5 2 4 1 3 7 8"
    },
    "answer": "B",
    "question": "使用氣泡排序演算法，由小到大排序數列「3 2 5 7 8 4 1」，請問外層迴圈跑二次後的結果為以下哪一個數列？",
    "id": 87,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 74,
    "options": {
      "A": "10",
      "B": "15",
      "C": "18",
      "D": "21"
    },
    "answer": "D",
    "question": "使用氣泡排序演算法，由小到大排序數列「3 2 5 7 8 4 1」，總共需要比較幾次？",
    "id": 88,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 75,
    "options": {
      "A": "8",
      "B": "10",
      "C": "13",
      "D": "15"
    },
    "answer": "B",
    "question": "使用氣泡排序演算法，由小到大排序數列「3 2 5 7 8 4 1」，總共需要交換幾次？",
    "id": 89,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 76,
    "options": {
      "A": "90 82 60 50 44",
      "B": "44 50 60 82 90",
      "C": "44 82 60 50 90",
      "D": "82 90 44 60 50"
    },
    "answer": "A",
    "question": "請問以下程式執行結果為何？ A=[60,90,44,82,50] for i in range(len(A)-1,0,-1): for j in range(i): if A[j] ＜ A[j+1]: A[j],A[j+1] = A[j+1],A[j] for item in A: print(item,' ', end='') print()",
    "id": 90,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 77,
    "options": {
      "A": "氣泡排序",
      "B": "插入排序",
      "C": "選擇排序",
      "D": "合併排序"
    },
    "answer": "C",
    "question": "以下何者不是穩定的(Stable) 排序演算法？",
    "id": 91,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 78,
    "options": {
      "A": "選擇排序",
      "B": "插入排序",
      "C": "快速排序",
      "D": "合併排序"
    },
    "answer": "A",
    "question": "排序的過程如下，請問是以下哪一個排序演算法？ 3 5 4 6 2 → 3 5 4 2 6 → 3 2 4 5 6 → 3 2 4 5 6 → 2 3 4 5 6",
    "id": 92,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 79,
    "options": {
      "A": "選擇排序",
      "B": "基數排序",
      "C": "快速排序",
      "D": "合併排序"
    },
    "answer": "A",
    "question": "以下哪一個演算法屬於in-place 的演算法？",
    "id": 93,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 80,
    "options": {
      "A": "3 2 5 7 4 1 8",
      "B": "2 3 5 4 7 1 8",
      "C": "2 3 5 7 4 1 8",
      "D": "3 2 5 7 1 4 8"
    },
    "answer": "D",
    "question": "使用選擇排序演算法，由小到大排序數列「3 2 5 7 8 4 1」，請問外層迴圈跑一次後的結果為以下哪一個數列？",
    "id": 94,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 81,
    "options": {
      "A": "3 2 4 1 5 7 8",
      "B": "3 2 5 4 1 7 8",
      "C": "2 3 5 7 4 1 8",
      "D": "5 2 4 1 3 7 8"
    },
    "answer": "B",
    "question": "使用選擇排序演算法由小到大排序數列「3 2 5 7 8 4 1」，請問外層迴圈跑二次後的結果為以下哪一個數列？",
    "id": 95,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 82,
    "options": {
      "A": "10",
      "B": "15",
      "C": "18",
      "D": "21"
    },
    "answer": "D",
    "question": "使用選擇排序演算法，由小到大排序數列「3 2 5 7 8 4 1」，總共需要比較幾次？",
    "id": 96,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 83,
    "options": {
      "A": "4",
      "B": "6",
      "C": "8",
      "D": "10"
    },
    "answer": "B",
    "question": "使用選擇排序演算法，由小到大排序數列「3 2 5 7 8 4 1」，總共需要交換幾次？",
    "id": 97,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 84,
    "options": {
      "A": "氣泡排序",
      "B": "插入排序",
      "C": "合併排序",
      "D": "基數排序"
    },
    "answer": "B",
    "question": "排序的過程如下，請問是哪一個排序演算法？ 3 2 4 6 5 → 2 3 4 6 5 → 2 3 4 6 5 → 2 3 4 6 5 → 2 3 4 5 6",
    "id": 98,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 85,
    "options": {
      "A": "氣泡排序",
      "B": "插入排序",
      "C": "快速排序",
      "D": "合併排序"
    },
    "answer": "B",
    "question": "如果輸入資料為已排序的由小到大資料，請問以下哪一個演算法將這些資料由小到大排序效率最好？",
    "id": 99,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 86,
    "options": {
      "A": "快速排序",
      "B": "插入排序",
      "C": "選擇排序",
      "D": "堆積排序"
    },
    "answer": "B",
    "question": "下列何者屬於穩定(Stable) 排序演算法？",
    "id": 100,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 87,
    "options": {
      "A": "2 3 4 7 5 1 8",
      "B": "2 3 5 4 7 1 8",
      "C": "2 3 5 7 8 4 1",
      "D": "5 2 4 1 3 7 8"
    },
    "answer": "C",
    "question": "使用插入排序演算法，由小到大排序數列「3 2 5 7 8 4 1」，請問外層迴圈跑一次後的結果為以下哪一個數列？",
    "id": 101,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 88,
    "options": {
      "A": "2 3 4 1 5 7 8",
      "B": "2 3 5 4 1 7 8",
      "C": "2 3 5 7 8 4 1",
      "D": "5 2 4 1 3 7 8"
    },
    "answer": "C",
    "question": "使用插入排序演算法，由小到大排序數列「3 2 5 7 8 4 1」，請問外層迴圈跑二次後的結果為以下哪一個數列？",
    "id": 102,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 89,
    "options": {
      "A": "10",
      "B": "13",
      "C": "16",
      "D": "18"
    },
    "answer": "B",
    "question": "使用插入排序演算法，由小到大排序數列「3 2 5 7 8 4 1」，總共需要比較幾次？",
    "id": 103,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 90,
    "options": {
      "A": "8",
      "B": "10",
      "C": "13",
      "D": "15"
    },
    "answer": "B",
    "question": "使用插入排序演算法，由小到大排序數列「3 2 5 7 8 4 1」，總共需要交換幾次？",
    "id": 104,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 91,
    "options": {
      "A": "氣泡排序",
      "B": "插入排序",
      "C": "快速排序",
      "D": "合併排序"
    },
    "answer": "D",
    "question": "以下何者平均效率為O(n*log(n))，且是穩定的(Stable) 排序演算法？",
    "id": 105,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 92,
    "options": {
      "A": "氣泡排序",
      "B": "合併排序",
      "C": "插入排序",
      "D": "快速排序"
    },
    "answer": "B",
    "question": "以下哪一個演算法需要額外O(n) 個記憶體空間？",
    "id": 106,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 93,
    "options": {
      "A": "合併排序",
      "B": "插入排序",
      "C": "快速排序",
      "D": "氣泡排序"
    },
    "answer": "A",
    "question": "以下哪一個演算法需要最多的額外記憶體空間？",
    "id": 107,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 94,
    "options": {
      "A": "氣泡排序",
      "B": "插入排序",
      "C": "選擇排序",
      "D": "合併排序"
    },
    "answer": "D",
    "question": "以下哪一個演算法平均效率最佳？",
    "id": 108,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 95,
    "options": {
      "A": "快速排序",
      "B": "插入排序",
      "C": "選擇排序",
      "D": "合併排序"
    },
    "answer": "D",
    "question": "以下哪一個演算法最差情況下效率最佳？",
    "id": 109,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 96,
    "options": {
      "A": "氣泡排序",
      "B": "插入排序",
      "C": "選擇排序",
      "D": "合併排序"
    },
    "answer": "D",
    "question": "以下何者屬於分而治之(Divide And Conquer) 演算法？",
    "id": 110,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 97,
    "options": {
      "A": "O(n)",
      "B": "O(n*log(n))",
      "C": "O(n2)",
      "D": "O(n3)"
    },
    "answer": "C",
    "question": "快速排序(Quick Sort) 最差情況下的演算法效率為何？",
    "id": 111,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 98,
    "options": {
      "A": "O(n)",
      "B": "O(n*log(n))",
      "C": "O(n2)",
      "D": "O(n3)"
    },
    "answer": "B",
    "question": "快速排序(Quick Sort) 平均情況下的演算法效率為何？",
    "id": 112,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 99,
    "options": {
      "A": "2 1 3 6 4 5 7",
      "B": "2 3 1 6 4 5 7",
      "C": "2 1 3 4 6 5 7",
      "D": "1 2 3 5 4 7 6"
    },
    "answer": "A",
    "question": "數列「3 5 4 6 2 1 7」，以下何者是快速排序第一輪的結果？",
    "id": 113,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 100,
    "options": {
      "A": "氣泡排序",
      "B": "插入排序",
      "C": "快速排序",
      "D": "合併排序"
    },
    "answer": "C",
    "question": "以下哪一個演算法需要額外O(log(n)) 個記憶體空間？",
    "id": 114,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 101,
    "options": {
      "A": "氣泡排序",
      "B": "插入排序",
      "C": "選擇排序",
      "D": "快速排序"
    },
    "answer": "D",
    "question": "以下何者屬於分而治之(Divide And Conquer) 演算法？",
    "id": 115,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 102,
    "options": {
      "A": "插入排序",
      "B": "快速排序",
      "C": "選擇排序",
      "D": "堆積排序"
    },
    "answer": "D",
    "question": "下面哪一個演算法，最差情況下演算法效率不是O(n2) ？",
    "id": 116,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 103,
    "options": {
      "A": "堆積排序",
      "B": "基數排序",
      "C": "快速排序",
      "D": "合併排序"
    },
    "answer": "A",
    "question": "以下哪一個演算法屬於in-place 的演算法？",
    "id": 117,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 104,
    "options": {
      "A": "2 3 4 1 5 7 8",
      "B": "8 7 5 2 3 4 1",
      "C": "8 7 5 3 2 4 1",
      "D": "2 3 1 4 5 7 8"
    },
    "answer": "C",
    "question": "使用堆積排序演算法，由小到大排序數列「3 2 5 7 8 4 1」，首先將數列轉換成Max Heap，形成以下哪一個數列？",
    "id": 118,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 105,
    "options": {
      "A": "7 5 3 1 2 4 8",
      "B": "7 3 5 1 2 4 8",
      "C": "2 3 5 7 4 1 8",
      "D": "5 2 4 1 3 7 8"
    },
    "answer": "B",
    "question": "使用堆積排序演算法，由小到大排序數列「3 2 5 7 8 4 1」，首先將數列轉換成Max Heap，將最大元素與最後一個元素交 換，調整成Max Heap 後，形成以下哪一個數列？",
    "id": 119,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 106,
    "options": {
      "A": "3",
      "B": "6",
      "C": "8",
      "D": "10"
    },
    "answer": "B",
    "question": "使用堆積排序演算法，由小到大排序數列「3 2 5 7 8 4 1」，將最大元素移到最後一個元素，需要移動幾次？",
    "id": 120,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 107,
    "options": {
      "A": "氣泡排序",
      "B": "插入排序",
      "C": "基數排序",
      "D": "堆積排序"
    },
    "answer": "C",
    "question": "排序的過程如下，請問是以下哪一個排序演算法？ 13 45 54 36 2 24 → 2 13 54 24 45 36 → 2 13 24 36 45 54",
    "id": 121,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 108,
    "options": {
      "A": "氣泡排序",
      "B": "基數排序",
      "C": "選擇排序",
      "D": "插入排序"
    },
    "answer": "B",
    "question": "以下哪一個演算法不屬於in-place 的演算法？",
    "id": 122,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 109,
    "options": {
      "A": "2 33 13 54 24 36",
      "B": "2 13 33 54 24 36",
      "C": "2 13 33 24 54 36",
      "D": "2 13 33 36 24 54"
    },
    "answer": "B",
    "question": "使用基數排序演算法，且由最低位到最高位(Least Significant Digital，縮寫為LSD) 方式進行排序，由小到大排序數列「13 33 54 36 2 24」，請問使用個位數排序後的結果為以下哪一個數列？",
    "id": 123,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 110,
    "options": {
      "A": "2 33 13 54 24 36",
      "B": "2 13 33 54 24 36",
      "C": "2 13 24 33 36 54",
      "D": "2 13 33 36 24 54"
    },
    "answer": "C",
    "question": "使用基數排序演算法，且由最低位到最高位(Least Significant Digital，縮寫為LSD) 方式進行排序，由小到大排序數列「13 33 54 36 2 24」，請問使用個位數與十位數排序後的結果為以下哪一個數列？",
    "id": 124,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 111,
    "options": {
      "A": "找出某個數值是否存在",
      "B": "從數列中間插入與刪除元素",
      "C": "找出最大值或最小值",
      "D": "找出中位數"
    },
    "answer": "C",
    "question": "以下何者最適合使用堆積(Heap) 結構？",
    "id": 125,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 112,
    "options": {
      "A": "AVL 樹",
      "B": "堆積(Heap)",
      "C": "佇列(Queue)",
      "D": "堆疊(Stack)"
    },
    "answer": "B",
    "question": "以下哪一種資料結構，其上一層節點的值均大於等於下一層節點的值？",
    "id": 126,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 113,
    "options": {
      "A": "O(n2)",
      "B": "O(n*log(n))",
      "C": "O(n)",
      "D": "O(log(n))"
    },
    "answer": "C",
    "question": "循序搜尋法的演算法效率以Big-O 表示為以下何者？",
    "id": 127,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 114,
    "options": {
      "A": "第一個元素",
      "B": "最後一個元素",
      "C": "任何一個元素",
      "D": "中間元素"
    },
    "answer": "C",
    "question": "二元搜尋法搜尋資料是從哪一個元素開始？",
    "id": 128,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 115,
    "options": {
      "A": "資料要隨機擺放",
      "B": "排序資料",
      "C": "資料要算平均值",
      "D": "資料先計算個數"
    },
    "answer": "B",
    "question": "二元搜尋法的資料事先如何處理？",
    "id": 129,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 116,
    "options": {
      "A": "O(n2)",
      "B": "O(n*log(n))",
      "C": "O(n)",
      "D": "O(log(n))"
    },
    "answer": "D",
    "question": "二元搜尋法的演算法效率以Big-O 表示為以下何者？",
    "id": 130,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 117,
    "options": {
      "A": "循序搜尋演算法",
      "B": "二元搜尋演算法",
      "C": "內插搜尋演算法",
      "D": "費氏搜尋演算法"
    },
    "answer": "A",
    "question": "以下哪一個演算法可以在未排序資料中做搜尋？",
    "id": 131,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 118,
    "options": {
      "A": "3 次",
      "B": "5 次",
      "C": "7 次",
      "D": "9 次"
    },
    "answer": "B",
    "question": "給定已排序數列「1, 4, 5, 7, 8, 11, 13, 15, 17, 18, 21, 25, 27, 29, 33, 35, 36, 38, 41, 44, 46, 49, 51」，搜尋數字15，使用二元 搜尋(Binary Search) 需要比較幾次",
    "id": 132,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 119,
    "options": {
      "A": "2 次",
      "B": "3 次",
      "C": "4 次",
      "D": "5 次"
    },
    "answer": "A",
    "question": "給定已排序數列「1, 4, 5, 7, 8, 11, 13, 15, 17, 18, 21, 25, 27, 29, 33, 35, 36, 38, 41, 44, 46, 49, 51」，搜尋數字15，使用內插 搜尋(Interpolation Search) 需要比較幾次？",
    "id": 133,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 120,
    "options": {
      "A": "2 次",
      "B": "4 次",
      "C": "6 次",
      "D": "8 次"
    },
    "answer": "A",
    "question": "給定已排序數列「-999,1, 4, 5, 7, 8, 11, 13, 15, 17, 18, 21, 25, 27, 29, 33, 35, 36, 38, 41, 44, 46, 49, 51」，搜尋數字15，使用 費氏搜尋 (Fibonacci Search)，第一個搜尋數列的第22 個數字46，則需要比較幾次？",
    "id": 134,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 121,
    "options": {
      "A": "雜湊法在沒有發生碰撞(Collision) 情況下，搜尋效率比二元搜尋慢",
      "B": "處理相同的資料下，為了避免碰撞，雜湊法儲存資料所需記憶體空間較二元搜尋多",
      "C": "雜湊法需要知道雜湊函式才能找到資料所在位置，二元搜尋不需要雜湊函式",
      "D": "雜湊法不需要事先排序資料，二元搜尋要事先排序資料"
    },
    "answer": "A",
    "question": "下列對雜湊法(Hashing) 與二元搜尋的敘述，何者錯誤？",
    "id": 135,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 122,
    "options": {
      "A": "O(1)",
      "B": "O(log(n))",
      "C": "O(n)",
      "D": "O(n*log(n))"
    },
    "answer": "A",
    "question": "使用雜湊法(Hashing) 搜尋n 筆資料，某筆資料是否存在，在沒有發生碰撞的情況下，其演算法效率為何？",
    "id": 136,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 123,
    "options": {
      "A": "h(14)",
      "B": "h(22)",
      "C": "h(31)",
      "D": "h(18)"
    },
    "answer": "D",
    "question": "假設雜湊函式為h(x) ＝ x % 17，其中% 表示求餘數，則h(35) 與下列何者會發生碰撞(Collision) ？",
    "id": 137,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 124,
    "options": {
      "A": "是否可以處理不同類型的輸入資料",
      "B": "是否可以產生不固定長度的雜湊值",
      "C": "是否可以發生較少的碰撞 (Collision)",
      "D": "是否可以花費較少的計算時間"
    },
    "answer": "C",
    "question": "下列何者用於分辨雜湊函式的好壞，請選擇最合適的答案？",
    "id": 138,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 125,
    "options": {
      "A": "節點20",
      "B": "節點10",
      "C": "節點25",
      "D": "節點30"
    },
    "answer": "A",
    "question": "若依序將20,30,10,50,60,40,45,5,15,25加入二元搜尋樹 則根節點為",
    "id": 139,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 126,
    "options": {
      "A": "節點50",
      "B": "節點25",
      "C": "節點30",
      "D": "節點45"
    },
    "answer": "A",
    "question": "若依序將20,30,10,50,60,40,45,5,15,25加入二元搜尋樹 則節點40的父節點為",
    "id": 140,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 127,
    "options": {
      "A": "節點5",
      "B": "節點30",
      "C": "節點45",
      "D": "節點60"
    },
    "answer": "A",
    "question": "若依序將20,30,10,50,60,40,45,5,15,25加入二元搜尋樹 則節點15的兄弟節點為",
    "id": 141,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 128,
    "options": {
      "A": "節點60",
      "B": "節點58",
      "C": "節點55",
      "D": "節點70"
    },
    "answer": "A",
    "question": "若依序將60,50,80,40,55,70,90,45,58加入二元搜尋樹 則根節點為",
    "id": 142,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 129,
    "options": {
      "A": "節點40",
      "B": "節點55",
      "C": "節點70",
      "D": "節點90"
    },
    "answer": "A",
    "question": "若依序將60,50,80,40,55,70,90,45,58加入二元搜尋樹 則節點45的父節點為",
    "id": 143,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 130,
    "options": {
      "A": "節點50",
      "B": "節點58",
      "C": "節點55",
      "D": "節點90"
    },
    "answer": "A",
    "question": "若依序將60,50,80,40,55,70,90,45,58加入二元搜尋樹 則節點80的兄弟節點為",
    "id": 144,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 131,
    "options": {
      "A": "節點2",
      "B": "節點1",
      "C": "節點4",
      "D": "節點8"
    },
    "answer": "A",
    "question": "如 之二元搜尋樹 若刪除節點3 則節點5的左子節點變成何者時 該左子樹會最矮",
    "image": "images/bank05_q131.png",
    "id": 145,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 132,
    "options": {
      "A": "節點7",
      "B": "節點6",
      "C": "節點9",
      "D": "節點3"
    },
    "answer": "A",
    "question": "如 之二元搜尋樹 若刪除節點8 則節點5的右子節點變成何者時 該右子樹會最矮",
    "image": "images/bank05_q132.png",
    "id": 146,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 133,
    "options": {
      "A": "節點4的左子節點",
      "B": "節點2的右子節點",
      "C": "節點7的左子節點",
      "D": "節點4的右子節點"
    },
    "answer": "A",
    "question": "如 之二元搜尋樹 若加入節點3.5 則所加入的新節點將位於",
    "image": "images/bank05_q133.png",
    "id": 147,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 134,
    "options": {
      "A": "節點6的左子節點",
      "B": "節點7的左子節點",
      "C": "節點4的右子節點",
      "D": "節點4的左子節點"
    },
    "answer": "A",
    "question": "如 之二元搜尋樹 若加入節點5.5 則所加入的新節點將位於",
    "image": "images/bank05_q134.png",
    "id": 148,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 135,
    "options": {
      "A": "節點60",
      "B": "節點20",
      "C": "節點30",
      "D": "節點10"
    },
    "answer": "A",
    "question": "將 調整為max Heap後 其根節點變成",
    "image": "images/bank05_q135.png",
    "id": 149,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 136,
    "options": {
      "A": "節點5",
      "B": "節點50",
      "C": "節點40",
      "D": "節點45"
    },
    "answer": "A",
    "question": "將 調整為min Heap後 其根節點變成",
    "image": "images/bank05_q136.png",
    "id": 150,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 137,
    "options": {
      "A": "節點50",
      "B": "節點60",
      "C": "節點40",
      "D": "節點45"
    },
    "answer": "A",
    "question": "將 調整為max Heap後 其節點30的父節點變成",
    "image": "images/bank05_q137.png",
    "id": 151,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 138,
    "options": {
      "A": "節點20",
      "B": "節點45",
      "C": "節點5",
      "D": "節點10"
    },
    "answer": "A",
    "question": "將 調整為min Heap後 其節點30的父節點變成",
    "image": "images/bank05_q138.png",
    "id": 152,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 139,
    "options": {
      "A": "節點5",
      "B": "節點40",
      "C": "節點50",
      "D": "節點60"
    },
    "answer": "A",
    "question": "若依序將20,30,10,50,60,40,45,5,15,25加入，並由上往下(由根節點開始往後)調整成min Heap，則根節點為",
    "id": 153,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 140,
    "options": {
      "A": "節點15",
      "B": "節點50",
      "C": "節點60",
      "D": "節點45"
    },
    "answer": "A",
    "question": "若依序將20,30,10,50,60,40,45,5,15,25加入，並由上往下(由根節點開始往後)調整成min Heap，則節點30的父節點為",
    "id": 154,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 141,
    "options": {
      "A": "節點10",
      "B": "節點60",
      "C": "節點45",
      "D": "節點25"
    },
    "answer": "A",
    "question": "若依序將20,30,10,50,60,40,45,5,15,25加入，並由上往下(由根節點開始往後)調整成min Heap，則節點20的兄弟節點為",
    "id": 155,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 142,
    "options": {
      "A": "complete的二元樹",
      "B": "full的二元樹",
      "C": "二元搜尋樹",
      "D": "Deap"
    },
    "answer": "A",
    "question": "max Heap一定是一棵",
    "id": 156,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 143,
    "options": {
      "A": "調整時，從根節點開始，依序搜尋其後的節點，若遇大小錯置，則調整之",
      "B": "刪除時，直接從最後1個節點搬過去，再調整之",
      "C": "插入時，直接加在最後1個節點，再調整之",
      "D": "可以很快速地找到第2大的值"
    },
    "answer": "A",
    "question": "有關max Heap 何者錯誤",
    "id": 157,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 144,
    "options": {
      "A": "28",
      "B": "36",
      "C": "45",
      "D": "55"
    },
    "answer": "C",
    "question": "10 個點的無向完整圖會有多少個邊？",
    "id": 158,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 145,
    "options": {
      "A": "20",
      "B": "30",
      "C": "42",
      "D": "56"
    },
    "answer": "B",
    "question": "6 個點的有向完整圖會有多少個邊？",
    "id": 159,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 146,
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "answer": "C",
    "question": "以下 無向圖，請問點2 的分支度為多少？",
    "image": "images/bank05_q146.png",
    "id": 160,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 147,
    "options": {
      "A": "佇列(Queue)",
      "B": "堆積(Heap)",
      "C": "堆疊(Stack)",
      "D": "二元搜尋樹(Binary Search Tree)"
    },
    "answer": "C",
    "question": "深度優先搜尋(Depth-First Search) 需要利用什麼資料結構暫存最近使用過的節點？",
    "id": 161,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 148,
    "options": {
      "A": "03214",
      "B": "02341",
      "C": "02314",
      "D": "02134"
    },
    "answer": "D",
    "question": "下圖 進行深度優先搜尋(Depth-First Search)，從點0 開始拜訪，數字小的優先拜訪，請 問拜訪順序為以下何者？",
    "image": "images/bank05_q148.png",
    "id": 162,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 149,
    "options": {
      "A": "佇列(Queue)",
      "B": "堆積(Heap)",
      "C": "堆疊(Stack)",
      "D": "二元搜尋樹(Binary Search Tree)"
    },
    "answer": "A",
    "question": "寬度優先搜尋(Breadth-First Search) 需要利用什麼資料結構暫存最近使用過的節點？",
    "id": 163,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 150,
    "options": {
      "A": "03214",
      "B": "02341",
      "C": "02314",
      "D": "02134"
    },
    "answer": "C",
    "question": "下圖 進行廣度優先搜尋(Breadth-First Search)，從點0 開始拜訪，數字小的優先拜訪， 請問拜訪順序為以下何者？",
    "image": "images/bank05_q150.png",
    "id": 164,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 151,
    "options": {
      "A": "if(--x＜0)x=0;",
      "B": "if(--x＜0)x=w-1;",
      "C": "if(++x>=w)x=w-1;",
      "D": "if(++x>=w)x=0;"
    },
    "answer": "A",
    "question": "若x代表水平座標 y代表垂直座標 w代表寬度 h代表高度，若欲【向左移 若超過左邊界 則留在左邊界】，則應執行",
    "id": 165,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 152,
    "options": {
      "A": "if(--x＜0)x=w-1;",
      "B": "if(++x>=w)x=w-1;",
      "C": "if(++x>=w)x=0;",
      "D": "if(--x＜0)x=0;"
    },
    "answer": "A",
    "question": "若x代表水平座標 y代表垂直座標 w代表寬度 h代表高度，若欲【向左移 若超過左邊界 則移到右邊界】，則應執行",
    "id": 166,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 153,
    "options": {
      "A": "if(++x>=w)x=w-1;",
      "B": "if(++x>=w)x=0;",
      "C": "if(--x＜0)x=0",
      "D": "if(--x＜0)x=w-1;"
    },
    "answer": "A",
    "question": "若x代表水平座標 y代表垂直座標 w代表寬度 h代表高度，若欲【向右移 若超過右邊界 則留在右邊界】，則應執行",
    "id": 167,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 154,
    "options": {
      "A": "if(++x>=w)x=0;",
      "B": "if(--x＜0)x=0;",
      "C": "if(--x＜0)x=w-1;",
      "D": "if(++x>=w)x=w-1;"
    },
    "answer": "A",
    "question": "若x代表水平座標 y代表垂直座標 w代表寬度 h代表高度，若欲【向右移 若超過右邊界 則移到左邊界】，則應執行",
    "id": 168,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 155,
    "options": {
      "A": "if(--y＜0)y=0;",
      "B": "if(--y＜0)y=h-1;",
      "C": "if(++y>=h)y=h-1;",
      "D": "if(++y>=h)y=0;"
    },
    "answer": "A",
    "question": "若x代表水平座標 y代表垂直座標 w代表寬度 h代表高度，若欲【向上移 若超過上邊界 則留在上邊界】，則應執行",
    "id": 169,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 156,
    "options": {
      "A": "if(--y＜0)y=h-1;",
      "B": "if(++y>=h)y=h-1;",
      "C": "if(++y>=h)y=0;",
      "D": "if(--y＜0)y=0;"
    },
    "answer": "A",
    "question": "若x代表水平座標 y代表垂直座標 w代表寬度 h代表高度，若欲【向上移 若超過上邊界 則移到下邊界】，則應執行",
    "id": 170,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 157,
    "options": {
      "A": "if(++y>=h)y=h-1;",
      "B": "if(++y>=h)y=0;",
      "C": "if(--y＜0)y=0;",
      "D": "if(--y＜0)y=h-1;"
    },
    "answer": "A",
    "question": "若x代表水平座標 y代表垂直座標 w代表寬度 h代表高度，若欲【向下移 若超過下邊界 則留在下邊界】，則應執行",
    "id": 171,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 158,
    "options": {
      "A": "if(++y>=h)y=0;",
      "B": "if(--y＜0)y=0;",
      "C": "if(--y＜0)y=h-1;",
      "D": "if(++y>=h)y=h-1;"
    },
    "answer": "A",
    "question": "若x代表水平座標 y代表垂直座標 w代表寬度 h代表高度，若欲【向下移 若超過下邊界 則移到上邊界】，則應執行",
    "id": 172,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 159,
    "options": {
      "A": "氣泡排序演算法(Bubble Sort)",
      "B": "二元搜尋演算法(Binary Search)",
      "C": "Dijkstra 演算法",
      "D": "深度優先搜尋演算法(Depth-First Search)"
    },
    "answer": "C",
    "question": "如果要找出地圖內一點到所有點的最短距離，需要使用以下哪一個演算法？",
    "id": 173,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 160,
    "options": {
      "A": "12345",
      "B": "21345",
      "C": "21435",
      "D": "12534"
    },
    "answer": "D",
    "question": "下圖 使用Dijkstra 演算法找尋從點0 出發到所有點的最短路徑，請 問找出最短路徑的頂點順序？",
    "image": "images/bank05_q160.png",
    "id": 174,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 161,
    "options": {
      "A": "8KM",
      "B": "9KM",
      "C": "10KM",
      "D": "11KM"
    },
    "answer": "A",
    "question": "下圖 使用Dijkstra 演算法，找尋從點0 出發到點3 最短路徑的距離 為？",
    "image": "images/bank05_q161.png",
    "id": 175,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 162,
    "options": {
      "A": "氣泡排序演算法(Bubble Sort)",
      "B": "二元搜尋演算法(Binary Search)",
      "C": "Bellman Ford 演算法",
      "D": "深度優先搜尋演算法(Depth-First Search)"
    },
    "answer": "C",
    "question": "如果要找出地圖內一點到所有點的最短距離，需要使用以下哪一個演算法？",
    "id": 176,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 163,
    "options": {
      "A": "8KM",
      "B": "9KM",
      "C": "10KM",
      "D": "11KM"
    },
    "answer": "A",
    "question": "下圖 使用Bellman Ford 演算法，找尋從點0 出發到點3 最短路徑的 距離為？",
    "image": "images/bank05_q163.png",
    "id": 177,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 164,
    "options": {
      "A": "氣泡排序演算法(Bubble Sort)",
      "B": "二元搜尋演算法(Binary Search)",
      "C": "Floyd Warshall 演算法",
      "D": "深度優先搜尋演算法(Depth-First Search)"
    },
    "answer": "C",
    "question": "如果要找出地圖內所有點到所有點的最短距離，需要使用以下哪一個演算法？",
    "id": 178,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 165,
    "options": {
      "A": "8KM",
      "B": "9KM",
      "C": "10KM",
      "D": "11KM"
    },
    "answer": "A",
    "question": "下圖 使用Floyd Warshall 演算法，找尋從點0 出發到點3 最短路徑 的距離為？",
    "image": "images/bank05_q165.png",
    "id": 179,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 166,
    "options": {
      "A": "01234567",
      "B": "54623170",
      "C": "23104567",
      "D": "找不到"
    },
    "answer": "D",
    "question": "下圖 使用拓撲排序(Topology Sort) 演算法找尋可 能的路徑為？",
    "image": "images/bank05_q166.png",
    "id": 180,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 167,
    "options": {
      "A": "01234567",
      "B": "54623170",
      "C": "40123567",
      "D": "找不到"
    },
    "answer": "C",
    "question": "下圖 使用拓撲排序(Topology Sort) 演算法找尋可能 的路徑為？",
    "image": "images/bank05_q167.png",
    "id": 181,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 168,
    "options": {
      "A": "4",
      "B": "5",
      "C": "6",
      "D": "7"
    },
    "answer": "D",
    "question": "下圖 使用Kruskal 演算法找尋此圖形的最小生成 樹，此最小生成樹會有幾個邊？",
    "image": "images/bank05_q168.png",
    "id": 182,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 169,
    "options": {
      "A": "28",
      "B": "29",
      "C": "31",
      "D": "33"
    },
    "answer": "A",
    "question": "下圖 使用Kruskal 演算法找尋此圖形的最小生成 樹，此最小生成樹的權重總和為何？",
    "image": "images/bank05_q169.png",
    "id": 183,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 170,
    "options": {
      "A": "4",
      "B": "5",
      "C": "6",
      "D": "7"
    },
    "answer": "D",
    "question": "下圖 使用Prim 演算法找尋此圖形的最小生成樹， 此最小生成樹會有幾個邊？",
    "image": "images/bank05_q170.png",
    "id": 184,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 171,
    "options": {
      "A": "28",
      "B": "29",
      "C": "31",
      "D": "33"
    },
    "answer": "B",
    "question": "下圖 使用Prim 演算法找尋此圖形的最小生成樹， 此最小生成樹的權重總和為何？",
    "image": "images/bank05_q171.png",
    "id": 185,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 172,
    "options": {
      "A": "40與65",
      "B": "40與50",
      "C": "45與55",
      "D": "45"
    },
    "answer": "A",
    "question": "將 之2-3樹 加入50，則調整後，根節點的資料為",
    "image": "images/bank05_q172.png",
    "id": 186,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 173,
    "options": {
      "A": "50",
      "B": "45與55",
      "C": "25與80",
      "D": "55"
    },
    "answer": "A",
    "question": "將 之2-3樹 加入50，則調整後，根節點之中子節點的資料為",
    "image": "images/bank05_q173.png",
    "id": 187,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 174,
    "options": {
      "A": "25與50",
      "B": "25與40",
      "C": "40與50",
      "D": "50"
    },
    "answer": "A",
    "question": "將 之2-3樹 刪除70，則調整後，根節點的資料為",
    "image": "images/bank05_q174.png",
    "id": 188,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  },
  {
    "source": "卷05-08題庫",
    "originalNo": 175,
    "options": {
      "A": "40",
      "B": "40與50",
      "C": "65與85",
      "D": "5"
    },
    "answer": "A",
    "question": "將 之2-3樹 刪除70，則調整後，根節點之中子節點的資料為",
    "image": "images/bank05_q175.png",
    "id": 189,
    "explanation": "此題來自卷05-08題庫；目前保留原題答案，解析未另外補充。"
  }
];

const answerString = "第7章14題：BCBAAAABBBDDCC\n卷05-08題庫：BBBDACBABDADCDBDCBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACADBCCABBAAAAACBDBACAADBDBBBBCCBBDBADDDCBACDDACBBCBBCCBCCBDABAAAADCAAAAAAAAAAAAAAAAAAACBCCDACAAAAAAAACDACACADCDADBAAAA";
