# Step 1: Project Setup & Browser Camera

Hey! In this first step, we'll get you familiar with the project structure and make a browser camera work. By the end of this step, you'll understand:

- How a React project is organized
- How to use React hooks to control the camera
- How frontend (browser) and backend (server) work together

## Your Tasks

1. First, set up the project:

   ```bash
   # In the waste-sorter directory
   cd waste-sorter
   npm install

   # In the waste-sorter-backend directory
   cd ../waste-sorter-backend
   npm install
   ```

2. Start both servers:

   ```bash
   # Terminal 1 - Frontend
   cd waste-sorter
   npm start

   # Terminal 2 - Backend
   cd waste-sorter-backend
   node server.js
   ```

3. Explore the code:

   - Open `src/components/WasteSorter.jsx`
   - Find where the camera starts
   - Look at how `useRef` and `useEffect` are used

4. Try these changes to understand how things work:
   - Change the title text to include your name
   - Comment out the `useEffect` block and see what happens
   - Remove `playsInline` from the video element and test on your phone
   - Try removing `videoRef` and see what breaks

## Understanding React Hooks

This component uses two important React hooks:

1. `useRef`: Creates a reference to the video element

   ```javascript
   const videoRef = useRef(null);
   // Later used as: videoRef.current
   ```

2. `useEffect`: Starts the camera when component loads
   ```javascript
   useEffect(() => {
     // Camera start code here
   }, []); // Empty array means "run once when component mounts"
   ```

## Project Structure

```
waste-sorter-project/
├── waste-sorter/              # Frontend (React app)
│   └── src/
│       ├── components/        # React components live here
│       └── ...
└── waste-sorter-backend/      # Backend (server)
    └── server.js              # Simple server for now
```

## Need Help?

1. Common issues:

   - Camera not starting? Check browser permissions
   - Server error? Make sure both terminals are running
   - Code not updating? Try refreshing the page

2. Still stuck? Try:
   - Using ChatGPT to explain parts you don't understand
   - Message me on WhatsApp!

## What's Next?

In Step 2, we'll add the ability to actually take photos with the camera. But first, make sure you:

- Can start both servers
- See the camera feed working
- Understand what each part of the code does

Feel free to experiment with the code - breaking things and fixing them is a great way to learn! 🚀

## 🎯 Fajne Fakty / Fun Facts

### React - Po co to? / Why React?

🇵🇱 React to jak klocki LEGO dla stron internetowych. Zamiast pisać wszystko w jednym długim pliku, dzielimy stronę na małe, wielokrotnego użytku komponenty. Nasz `WasteSorter.jsx` to taki jeden klocek!

🇬🇧 React is like LEGO for websites. Instead of writing everything in one long file, we split our page into small, reusable components. Our `WasteSorter.jsx` is one such building block!

### useRef - Magiczny Wskaźnik / Magic Pointer

🇵🇱 `useRef` to jak przyklejenie karteczki do elementu na stronie. Kiedy piszesz `videoRef.current`, mówisz React: "Hej, daj mi ten element video, do którego przykleiłem karteczkę!"

🇬🇧 `useRef` is like sticking a Post-it note on a webpage element. When you write `videoRef.current`, you're telling React: "Hey, give me that video element I put a sticky note on!"

### Frontend vs Backend - Czemu Dwa Serwery? / Why Two Servers?

🇵🇱 Frontend (port 3000) to jak kelner w restauracji - przyjmuje zamówienia i pokazuje dania. Backend (port 3001) to kuchnia - tam dzieje się cała magia przetwarzania!

🇬🇧 Frontend (port 3000) is like a waiter in a restaurant - takes orders and presents dishes. Backend (port 3001) is the kitchen - where all the processing magic happens!

### Tailwind CSS - Szybkie Stylowanie / Quick Styling

🇵🇱 Tailwind to jak pudełko z gotowymi naklejkami do stylowania. Zamiast pisać `background-color: blue`, przyklejasz klasę `bg-blue-500`. Szybko i czytelnie!

🇬🇧 Tailwind is like a box of ready-made styling stickers. Instead of writing `background-color: blue`, you stick on a `bg-blue-500` class. Quick and readable!

### Ważne vs Nieważne Pliki / Important vs Skip Files

🇵🇱 Naprawdę ważne:

- `WasteSorter.jsx` - tu się dzieje magia!
- `server.js` - nasz backend
- `package.json` - lista składników projektu

Możesz zignorować:

- `node_modules` - automatycznie generowane
- `.git` - pliki systemu kontroli wersji
- `.gitignore` - ustawienia gita

🇬🇧 Really important:

- `WasteSorter.jsx` - where the magic happens!
- `server.js` - our backend
- `package.json` - project ingredients list

Safe to ignore:

- `node_modules` - auto-generated
- `.git` - version control files
- `.gitignore` - git settings

### Porty - Co To? / What Are Ports?

🇵🇱 Wyobraź sobie, że Twój komputer to duży budynek biurowy:

- Każdy port to jak osobne drzwi do budynku
- Port 3000 (frontend) to jak główne wejście dla klientów
- Port 3001 (backend) to jak drzwi do zaplecza
- Używamy różnych portów, żeby frontend i backend się nie pomieszały - tak jak klienci nie powinni wchodzić na zaplecze!

Dlaczego akurat 3000 i 3001? To jak numery mieszkań - moglibyśmy wybrać inne, ale te są popularne w świecie React i nikt inny zwykle ich nie używa na Twoim komputerze.

🇬🇧 Think of your computer as a big office building:

- Each port is like a separate door to the building
- Port 3000 (frontend) is like the main entrance for clients
- Port 3001 (backend) is like the staff entrance
- We use different ports so frontend and backend don't mix - just like clients shouldn't use the staff entrance!

Why 3000 and 3001? It's like apartment numbers - we could pick others, but these are popular in the React world and usually aren't used by other programs on your computer.

### Pro-Tip 💡

🇵🇱 Jeśli zobaczysz błąd "port already in use", to znaczy, że ktoś już "stoi w tych drzwiach" - pewnie masz już uruchomioną aplikację na tym porcie!

🇬🇧 If you see "port already in use" error, it means someone's already "standing in that doorway" - you probably have another app running on that port!

### Pro-Tip dnia / Pro-Tip of the Day

🇵🇱 Trzymaj konsolę przeglądarki otwartą (F12)! To twój najlepszy przyjaciel podczas programowania - pokazuje błędy i pozwala debugować.

🇬🇧 Keep your browser console open (F12)! It's your best friend while coding - shows errors and lets you debug.

### Ciekawostka / Fun Fact

🇵🇱 Czy wiesz, że React został stworzony przez Facebooka? Używają go też Instagram, Netflix, i Airbnb. Teraz Ty używasz tej samej technologii co oni! 🚀

🇬🇧 Did you know React was created by Facebook? Instagram, Netflix, and Airbnb use it too. Now you're using the same technology they do! 🚀
