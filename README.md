# 期末刷題網站

純前端刷題網站，可部署到 GitHub Pages。

## 內容

- 189 題
- 深色模式
- 手機版介面
- 全部題目練習
- 隨機練習
- 錯題本
- 圖片題支援

## 部署

把以下檔案與資料夾放在 GitHub Repository 根目錄：

```txt
index.html
style.css
script.js
questions.js
images/
```

GitHub Pages 設定：

```txt
Settings → Pages → Deploy from a branch → main → /root
```

## 注意

`index.html` 已經在 CSS/JS 後面加上版本參數，用來避免手機或瀏覽器讀到舊快取。
