## Emoji Sticker Canvas (React + Konva)

A simple drag-and-drop sticker canvas built with **React** and **react-konva**. Users can add fun emoji stickers to a canvas, move them around, and export their creation as a PNG image.

---

### Features

* Drag and drop emojis onto a canvas
* Stickers snap to a 40px grid
* Double-click to delete a sticker
* Download the canvas as a PNG
* Beautiful and responsive UI with emoji buttons

---

###  Preview

![Preview of Canvas](my-era\Screenshot 2025-06-06 202451.png)

---

### Tech Stack

* **React** (Functional components)
* **react-konva** for canvas rendering
* **JavaScript / JSX**
* **No backend** – All in-memory and browser-based

---

### Project Structure

```
📦 your-project/
├── 📄 App.js            # Main React component with emoji canvas
├── 📄 index.js          # Entry point
├── 📄 App.css (opt)     # Optional if you externalize styles
├── 📄 package.json
└── 📄 README.md         # This file
```

---

### Getting Started

#### 1. Clone the repo

```bash
git clone https://github.com/your-username/react-konva-emoji-canvas.git
cd react-konva-emoji-canvas
```

#### 2. Install dependencies

```bash
npm install
```

#### 3. Run the app

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

---

### Dependencies

* [react](https://reactjs.org/)
* [react-dom](https://reactjs.org/docs/react-dom.html)
* [react-konva](https://konvajs.org/docs/react/index.html)
* [konva](https://konvajs.org)

Install Konva if not already:

```bash
npm install konva react-konva
```

---

### How It Works

* **Sticker Placement:** Click an emoji button to drop a sticker at a random grid-snapped location.
* **Dragging:** Stickers are fully draggable inside the canvas.
* **Delete:** Double-click on any sticker to remove it.
* **Export:** Click the "Download Canvas" button to save your creation as a PNG.

---

### Customization Ideas

* Add emoji categories or use an emoji picker
* Resize stickers or rotate them
* Add text labels or drawing tools
* Persist state to localStorage

"# MyEra-Assignment" 
