# 🧬 Doubly-Even Code Playground

This is a lightweight JavaScript playground to explore **doubly-even self-dual binary error-correcting codes** — the kind of codes that surprisingly appeared in **supersymmetric physics equations** studied by Dr. James Gates Jr.

> It's weird, beautiful, and it kinda makes you wonder if the universe is... debugging itself?

This project was born from a personal curiosity — a mix of philosophy, code, and physics. If you're a dev who loves cosmic rabbit holes, you're in the right place.

## 🧬 Comparing My C++ Code to the Math of String Theory

It might sound wild, but the simple logic behind my C++ parity checker — which just adds `1`s until the total count is divisible by 4 — actually mirrors some very deep math found in **string theory** and **supersymmetry**.

Let me break it down in a way that makes sense if you're a dev like me:

---

### 🤖 What my code does (in math terms)

- Takes a binary string like `"1011"`.
- Checks if the number of `1`s is divisible by 4 → that’s called **doubly-even**.
- If not, adds the smallest number of `1`s to make it valid.

In math terms, it's working with **binary linear codes** that are:

- **Self-dual** (they equal their own orthogonal complement),
- **Doubly-even** (every valid codeword has a number of 1s divisible by 4).

These codes are widely used in **error correction** — to protect digital information — and that’s where the link to physics begins.

---

### 🧠 What string theory does (mathematically)

In advanced string theory and **supersymmetric** models, physicists use:

- **Algebraic structures** (Lie algebras, Clifford algebras),
- **Operators** that must obey strict symmetry rules,
- **Adinkras** (visual representations of supersymmetric equations),
- And — surprise — **binary codes** to model allowed states.

James Gates Jr., while analyzing supersymmetry diagrams, found patterns **identical** to certain error-correcting codes — specifically, **doubly-even self-dual linear binary block codes**. These exact same structures show up when modeling particles and forces.

One famous example is the **Golay Code**, a real-world error-correction method used in deep-space communication, which also appears in some string theory models.

---

### 🔁 Side-by-side comparison

| Concept                     | My C++ Code                              | String Theory & SUSY                               |
|-----------------------------|-------------------------------------------|----------------------------------------------------|
| Input                      | Binary string (`"1011"`)                  | Binary vector states in abstract Hilbert space     |
| Validation Rule            | `# of 1s % 4 === 0`                       | Supersymmetric constraint: must be doubly-even     |
| Correction                 | Add minimal number of `1`s                | Operator algebra builds only valid code structures |
| Desired Property           | Doubly-even, self-dual                    | Required for SUSY transformations to be valid      |
| Application                | Simple parity checker (C++)               | Quantum model structure in high-energy physics     |

---

### 🌀 So What Does That Mean?

That something as "mundane" as a bit-counting rule in C++ **naturally appears** in the deepest layers of theoretical physics... is kind of amazing.

To me, it suggests that the universe might be **structured in a way that’s computational at its core** — with rules that not only describe how things behave, but **correct errors** along the way.

And if that’s true... then maybe our job as devs isn’t so different from the job of nature itself.


---

## 🚀 What this repository code does

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