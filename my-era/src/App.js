import React, { useState, useRef } from 'react';
import { Stage, Layer, Text } from 'react-konva';

const STICKER_SIZE = 40;
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 400;

const snapToGrid = (value) => Math.round(value / STICKER_SIZE) * STICKER_SIZE;

function App() {
  const stageRef = useRef();
  const [stickers, setStickers] = useState([]);
  const emojis = ['😎', '❤️', '🍕','🎉'];

  const addSticker = (emoji) => {
    const id = Date.now();
    const x = snapToGrid(Math.random() * (CANVAS_WIDTH - STICKER_SIZE));
    const y = snapToGrid(Math.random() * (CANVAS_HEIGHT - STICKER_SIZE));
    setStickers([...stickers, { id, emoji, x, y }]);
  };

  const deleteSticker = (id) => {
    setStickers(stickers.filter((s) => s.id !== id));
  };

  const handleDownload = () => {
    const uri = stageRef.current.toDataURL();
    const link = document.createElement('a');
    link.download = 'canvas.png';
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={styles.app}>
      {/* Canvas Area */}
      <div style={styles.canvasContainer}>
        <Stage
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          style={styles.stage}
          ref={stageRef}
        >
          <Layer>
            {stickers.map((sticker) => (
              <Text
                key={sticker.id}
                text={sticker.emoji}
                x={sticker.x}
                y={sticker.y}
                fontSize={32}
                draggable
                onDblClick={() => deleteSticker(sticker.id)}
              />
            ))}
          </Layer>
        </Stage>
        <button onClick={handleDownload} style={styles.downloadButton}>
          ⬇️ Download Canvas
        </button>
      </div>

      <div style={styles.controls}>
        <h3 style={styles.controlTitle}>Add Sticker</h3>
        <div style={styles.emojiList}>
          {emojis.map((emoji, index) => (
            <button
              key={index}
              style={styles.emojiButton}
              onClick={() => addSticker(emoji)}
              title={`Add ${emoji}`}
            >
              {emoji}
            </button>
          ))}
        </div>
        <p style={styles.instructions}>Double-click a sticker to delete it</p>
      </div>
    </div>
  );
}

export default App;

const styles = {
  app: {
    display: 'flex',
    gap: '30px',
    padding: '30px',
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    justifyContent: 'center',
  },
  canvasContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  stage: {
    border: '2px dashed #888',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  downloadButton: {
    marginTop: '15px',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '6px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    transition: 'background 0.2s',
  },
  controls: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '15px',
    backgroundColor: '#ffffff',
    height: '350px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  controlTitle: {
    marginBottom: '10px',
    fontSize: '18px',
    color: '#333',
  },
  emojiList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  emojiButton: {
    fontSize: '24px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    cursor: 'pointer',
    transition: 'background 0.2s, transform 0.1s',
  },
  instructions: {
    marginTop: '20px',
    fontSize: '14px',
    color: '#555',
  },
};
