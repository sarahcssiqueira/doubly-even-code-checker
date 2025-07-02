# 🧬 Doubly-Even Code Playground

This is a lightweight JavaScript playground to explore **doubly-even self-dual binary error-correcting codes** — the kind of codes that surprisingly appeared in **supersymmetric physics equations** studied by Dr. James Gates Jr.

> It's weird, beautiful, and it kinda makes you wonder if the universe is... debugging itself?

This project was born from a personal curiosity — a mix of philosophy, code, and physics. If you're a dev who loves cosmic rabbit holes, you're in the right place.

---

## 🚀 What It Does

- ✅ Accepts a binary input string (e.g. `1011`)
- 🧠 Checks whether the number of `1`s is divisible by 4 (aka "doubly-even")
- ➕ If not, adds the minimum number of `1`s to make it valid
- 🖥️ Runs entirely in the browser — no build tools needed

---

## 🧪 Try It Live

You can open the playground directly from your browser:

👉 https://github.com/sarahcssiqueira/doubly-even-code-checker

---

## 💻 Files in This Repo

```txt
.
├── index.html         # Main UI + HTML structure
├── script.js          # All JS logic (pure, no dependencies)
├── parity_checker.cpp # Bonus: C++ version for terminal nerds
├── README.md          # You're reading it :)
└── LICENSE            # MIT license (do whatever you want)
```

## 📦 How to Run Locally

Clone the repo

git clone https://github.com/yourusername/doubly-even-code-checker.git
cd doubly-even-code-checker

Open index.html in your browser
(no need for servers, works offline)

## 🧠 Bonus: C++ Version

This project is mainly JavaScript-based, but if you’re curious how it works in lower-level C++, check out parity_checker.cpp.

To run it locally:

`g++ parity_checker.cpp -o parity
./parity` 

This version runs in your terminal and follows the same logic — great if you're exploring WebAssembly, systems programming, or just love C++.

## 📚 Background Inspiration

James Gates Jr. on finding error-correcting code in physics

arXiv: Relating Doubly-Even Codes and Supersymmetry


## 📄 License

MIT — free to use, modify, remix, and explore.