# Waste Sorter - Step 1: Project Setup

This is the first step in building our waste sorting application. We'll start by getting the basic project structure working with a camera feed.

## Setup Guide

1. Install required software:

   - [Node.js](https://nodejs.org/en/) (Latest LTS version)
   - A code editor (like VS Code)

2. Install project dependencies:

```bash
# In the waste-sorter directory
cd waste-sorter
npm install

# In the waste-sorter-backend directory
cd ../waste-sorter-backend
npm install
```

3. Start both servers:

```bash
# Terminal 1 - Frontend
cd waste-sorter
npm start

# Terminal 2 - Backend
cd waste-sorter-backend
node server.js
```

4. Open your browser to http://localhost:3000
   - Allow camera access when prompted
   - You should see your camera feed

## Project Structure

```
waste-sorter-project/
├── waste-sorter/              # Frontend (React app)
├── waste-sorter-backend/      # Backend (Express server)
└── .gitignore
```

## What's Inside

### Frontend (waste-sorter)

The React application that uses your camera and will eventually process images of waste items.

Main files:

- `src/components/WasteSorter.jsx`: The main component that handles camera access
- `src/App.js`: The root component that renders WasteSorter
- `src/index.css`: Styles with Tailwind CSS

### Backend (waste-sorter-backend)

A simple server that will later handle image processing and AI integration.

Main files:

- `server.js`: Basic Express server with a health check endpoint

## Understanding the Code

The main component `WasteSorter.jsx` has three main parts:

1. **Camera Setup**

```javascript
const videoRef = useRef(null);
```

This creates a reference to the video element so we can access it in our code.

2. **Camera Initialization**

```javascript
useEffect(() => {
  const startCamera = async () => {
    // Code that starts the camera
  };
  startCamera();
}, []);
```

This runs when the component loads and starts the camera.

3. **User Interface**

```javascript
return (
  <div>
    <h1>Waste Sorter</h1>
    <video ref={videoRef} autoPlay playsInline />
    <button>Take Photo</button>
    <div>Result will appear here</div>
  </div>
);
```

The basic layout of our app with video feed and a button (not working yet).

## Next Steps

Once you have this working, we'll move on to:

1. Taking photos with the camera
2. Sending them to our server
3. Getting waste classification results

## Troubleshooting

If you run into issues:

1. Make sure both servers are running (frontend and backend)
2. Check that you've allowed camera access in your browser
3. Look for errors in the browser console (F12)
4. Make sure all dependencies are installed
