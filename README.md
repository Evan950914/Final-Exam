# 期末刷題網站

這是一個純前端刷題網站，可部署到 GitHub Pages。

## 功能

- 手機版介面
- 全部題目練習
- 隨機練習
- 錯題本
- 答題統計
- Mermaid 圖形題支援

## 檔案說明

```txt
quiz-site/
├─ index.html
├─ style.css
├─ script.js
├─ questions.js
└─ README.md
```

## 本機測試

直接打開 `index.html` 通常可以使用。

如果瀏覽器阻擋部分功能，可以用 VS Code 的 Live Server 開啟。

## 部署到 GitHub Pages

1. 建立一個新的 GitHub Repository
2. 把這些檔案上傳到 Repository 根目錄
3. 進入 Repository 的 Settings
4. 左側找到 Pages
5. Branch 選 `main`
6. Folder 選 `/root`
7. 儲存
8. 等待 GitHub Pages 產生網址

## 新增題目

打開 `questions.js`，照格式新增：

```js
{
  id: 15,
  question: "題目文字",
  options: {
    A: "選項 A",
    B: "選項 B",
    C: "選項 C",
    D: "選項 D"
  },
  answer: "A",
  explanation: "解析文字"
}
```

## 圖形題

可加入 Mermaid 圖：

```js
{
  id: 16,
  question: "參考下圖回答問題",
  diagram: `
graph LR
  A --> B
`,
  options: {
    A: "選項 A",
    B: "選項 B",
    C: "選項 C",
    D: "選項 D"
  },
  answer: "A",
  explanation: "解析文字"
}
```

## 圖片題

若要用圖片，建立 `images/` 資料夾，然後題目加：

```js
image: "images/q001.png"
```
