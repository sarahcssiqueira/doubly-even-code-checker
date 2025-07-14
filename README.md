# Doubly-Even Code Playground

[![Project Status: Concept – Minimal or no implementation has been done yet, or the repository is only intended to be a limited example, demo, or proof-of-concept.](https://www.repostatus.org/badges/latest/concept.svg)](https://www.repostatus.org/#concept)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is a lightweight JavaScript playground to explore **doubly-even self-dual binary error-correcting codes** — the kind of codes that surprisingly appeared in **supersymmetric physics equations** studied by Dr. James Gates Jr.

> It's weird, beautiful, and it kinda makes you wonder if the universe is... debugging itself?

This project was born from a personal curiosity — a mix of philosophy, code, and physics. If you're a dev who loves cosmic rabbit holes, you're in the right place.

---

## From Dev Curiosity to Theoretical Physics

It might sound wild, but the simple logic behind my C++ parity checker — which just adds `1`s until the total count is divisible by 4 — mirrors some very deep math found in **string theory** and **supersymmetry**.

Let me break it down in dev-friendly terms:

---

### What My Code Does (in Math Terms)

- Takes a binary string like `"1011"`.
- Checks if the number of `1`s is divisible by 4 → this makes it **doubly-even**.
- If not, adds the minimum number of `1`s needed to make it valid.

In math speak, it's working with **binary linear codes** that are:

- **Self-dual** (they equal their own orthogonal complement),
- **Doubly-even** (every valid codeword has a number of 1s divisible by 4).

These types of codes are crucial in **error correction**, ensuring data integrity in systems like memory, satellites, and deep-space transmissions.

---

### What string theory does (mathematically)

In advanced string theory and **supersymmetric** models, physicists use:

- **Algebraic structures** (like Lie algebras),
- **Operators** that follow strict symmetry rules,
- **Adinkras** (graphical representations of SUSY equations),
- And — surprise — **binary codes** to constrain possible transformations.

While working with these, Dr. James Gates Jr. discovered patterns **identical** to digital error-correcting codes — specifically, **doubly-even self-dual binary block codes**.

One famous example? The **Golay Code** — a code used in real-world error correction and also in string theory models.

---

### Side-by-side comparison

| Concept              | My C++/JS Code                          | String Theory & SUSY                              |
|----------------------|------------------------------------------|---------------------------------------------------|
| Input               | Binary string (e.g. `"1011"`)            | Abstract binary state vectors                     |
| Validation Rule     | Number of 1s must be divisible by 4      | Supersymmetric constraints: must be doubly-even   |
| Correction          | Add minimal `1`s to reach valid state    | Operators construct only valid code structures    |
| Desired Property    | Doubly-even, self-dual                   | Required for SUSY transformations to work         |
| Use Case            | Error checking / curiosity demo          | Modeling particles and fundamental forces         |

---

### So What Does That Mean?

The fact that a bit-counting rule in a toy C++ program **naturally appears** in the math of the universe?

That’s amazing.

It suggests the universe might be **structured in a way that’s computational** — with built-in logic to correct, constrain, and preserve consistency.

And if that’s true... maybe writing code is one small way to **read the source**.

---

## What This Code Does

- Accepts a binary input string (e.g., `1011`)
- Checks if the number of `1`s is divisible by 4 (i.e., doubly-even)
- Adds minimal `1`s to make the code valid if needed
- Runs entirely in the browser — no build tools or dependencies

---

## Try It Live

You can open the playground directly in your browser:

[https://sarahcssiqueira.github.io/doubly-even-code-checker](https://sarahcssiqueira.github.io/doubly-even-code-checker)

---

## Files in This Repo

```
.
├── index.html         # Main HTML + UI
├── script.js          # All JavaScript logic (no dependencies)
├── parity_checker.cpp # Bonus: C++ version for terminal nerds
├── README.md          # You're reading it :)
└── LICENSE            # MIT license
```

---

## How to Run Locally

Clone the repo:

```bash
git clone https://github.com/yourusername/doubly-even-code-checker.git
cd doubly-even-code-checker
```

Then open `index.html` in your browser (it works offline, no server needed).

---

## Bonus: C++ Version

If you're into lower-level logic or exploring how this could map to WebAssembly, check out `parity_checker.cpp`.

To compile and run it locally:

```bash
g++ parity_checker.cpp -o parity
./parity
```

It follows the same logic as the JS demo — great for CLI enthusiasts.

---

## References

- [Relating Doubly-Even Error-Correcting Codes, Graphs, and Supersymmetry (arXiv)](https://arxiv.org/abs/0806.0051)  
- [James Gates Jr. – Uncovering the Codes for Reality (On Being)](https://onbeing.org/programs/s-james-gates-uncovering-the-codes-for-reality/)  
- [Error-Correcting Code – Wikipedia](https://en.wikipedia.org/wiki/Error_correction_code)  
- [Explain Like I’m Five (Reddit thread)](https://www.reddit.com/r/explainlikeimfive/comments/2t6z2e/eli5_physicist_james_gates_claims_that_you_can/)  
- [*Through the Wormhole* – Are We Living in a Simulation? (YouTube)](https://www.youtube.com/watch?v=tlTKTTt47WE)

---

## License

MIT — free to use, modify, remix, and explore.