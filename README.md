# 🔖 Custom Chrome Tab Highlighter

A lightweight Chrome extension that visually distinguishes tabs by assigning a unique color indicator to each webpage, displayed in the **bottom-right corner**. Designed to improve multitasking and tab recognition, even on dynamic websites like **YouTube** and **Netflix**.

---

## 🚀 Features

- ✅ Unique color indicator for each new tab
- 🎯 Works on all websites, including dynamic SPAs (YouTube, Netflix, etc.)
- 🎨 Fixed-position circular color marker in the bottom-right corner
- ⚙️ Responsive to tab creation, activation, and updates
- 🔁 Uses Chrome Extensions API (Manifest v3)
- 🧠 Ready for customization: gradient effects, animations, and keyboard shortcuts

---

## 📁 Project Structure

custom_tab/
├── manifest.json
├── popup.html
├── css/
│ └── style.css
├── js/
│ └── background.js
└── icon.png



---

## 🛠️ Tech Stack

- JavaScript
- HTML & CSS
- Chrome Extensions API (Manifest v3)
- WebExtensions (Service Workers)

---

## 📦 How to Install

1. Clone or download this repository.
2. Go to `chrome://extensions` in your Chrome browser.
3. Enable **Developer Mode**.
4. Click **Load Unpacked**.
5. Select the `custom_tab` folder.
6. Open a few tabs to see the color indicator in action!

---

## ✨ Future Enhancements

- 🔧 User-defined color themes
- 🧩 Context menu options to toggle or reassign colors
- 🌈 Gradient or animated color effects
- 💾 Storage of color preferences using `chrome.storage.sync`

---

## 🧑‍💻 Developed By

**Mayank Raj**  
📧 itsmayank435@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/mayank-raj-203534258/)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
