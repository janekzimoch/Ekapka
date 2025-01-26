# Step 2: Taking and Displaying Photos

Hey! Now that we have the camera working, let's add the ability to capture and display photos. By the end of this step, you'll understand:

- How to handle user interactions in React
- How to manage component state with useState
- How to capture images using Canvas API

## Your Tasks

1. First, add state to your component:

   ````javascript
   const [imageSrc, setImageSrc] = useState(null);   ```

   ````

2. Create a function to capture images:

   ````javascript
   const captureImage = () => {
     const canvas = document.createElement("canvas");
     canvas.width = videoRef.current.videoWidth;
     canvas.height = videoRef.current.videoHeight;
     canvas.getContext("2d").drawImage(videoRef.current, 0, 0);

     const image = canvas.toDataURL("image/jpeg");
     setImageSrc(image);
   };   ```

   ````

3. Update your component to display the captured image:

   ````javascript
   return (
     <div className="flex flex-col items-center p-4">
       <h1>Waste Sorter</h1>
       <video ref={videoRef} autoPlay playsInline />
       <button onClick={captureImage}>Take Photo</button>
       {imageSrc && (
         <img src={imageSrc} alt="Captured waste" className="mt-4" />
       )}
     </div>
   );   ```

   ````

4. Try these experiments:
   - Add a "Retake Photo" button
   - Try changing the image quality in toDataURL
   - Add a loading state while the image processes

## Understanding React Concepts

### State Management

🇵🇱 Stan (state) to jak pamięć komponentu. Kiedy chcesz, żeby komponent "zapamiętał" jakąś informację (np. zrobione zdjęcie), używasz useState:

🇬🇧 State is like a component's memory. When you want your component to "remember" something (like a captured photo), you use useState:

```javascript
const [imageSrc, setImageSrc] = useState(null);
// imageSrc - current value
// setImageSrc - function to update the value
```

### Event Handling

🇵🇱 Obsługa zdarzeń to sposób, w jaki React reaguje na akcje użytkownika (np. kliknięcia):

🇬🇧 Event handling is how React responds to user actions (like clicks):

```javascript
<button onClick={captureImage}>Take Photo</button>
// onClick - the event
// captureImage - the handler function
```

### Canvas API

🇵🇱 Canvas to jak niewidzialna kartka do rysowania. Używamy jej do:

- Skopiowania klatki z video
- Przekształcenia jej w zdjęcie
- Zapisania jako URL, który można wyświetlić w <img>

🇬🇧 Canvas is like an invisible drawing board. We use it to:

- Copy a frame from video
- Transform it into an image
- Save it as a URL that can be displayed in <img>

## Common Issues

1. Photo appears black?

   - Make sure the video is playing before capturing
   - Check if videoRef.current exists

2. Button doesn't work?

   - Verify your onClick handler is properly attached
   - Check console for errors

3. Image quality issues?
   - Try adjusting the canvas dimensions
   - Experiment with toDataURL quality parameter

## Pro Tips 💡

🇵🇱

- Używaj console.log do debugowania wartości state
- Pamiętaj o sprawdzaniu, czy videoRef.current istnieje
- Dodaj obsługę błędów (try/catch) przy operacjach na canvas

🇬🇧

- Use console.log to debug state values
- Remember to check if videoRef.current exists
- Add error handling (try/catch) for canvas operations

## What's Next?

In Step 3, we'll send these photos to our backend server for processing. But first, make sure you:

- Can successfully capture photos
- Understand how state management works
- Can handle basic user interactions

Remember - experimenting with the code is the best way to learn! Try adding your own features or modifying the existing ones. 🚀

## Fun Fact 🎯

🇵🇱 Czy wiesz, że Canvas API został pierwotnie stworzony przez Apple dla widgetów na ich dashboardzie? Teraz jest standardem używanym przez miliony stron!

🇬🇧 Did you know that the Canvas API was originally created by Apple for dashboard widgets? Now it's a standard used by millions of websites!
