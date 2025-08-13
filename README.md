# Alternative calculator (prefix notation)

## Description

A simple command-line calculator that evaluates arithmetic expressions written in **prefix (Polish) notation**, where the operator precedes its operands.  
The main advantage is that **no parentheses are needed** to resolve ambiguity.

| Traditional notation | Prefix notation |
| -------------------- | ---------------- |
| `3 + 4`              | `+ 3 4`          |
| `3 - (4 * 5)`        | `- 3 * 4 5`      |
| `(3 + 4) * 5`        | `* + 3 4 5`      |
| `(3 - 4) / (5 + 2)`  | `/ - 3 4 + 5 2`  |

## Motivation

I built this project **to practice pure programming** — understood as **writing algorithms** — without relying on external libraries, focusing on parsing and evaluation logic.

## Requirements

- [Node.js](https://nodejs.org/) installed.

## Installation and usage

```bash
npm install   # install dependencies
npm start     # start the calculator in interactive CLI mode
npm test      # run the test suite

## Roadmap

- **TypeScript migration**: stronger typing for parser and evaluator.
- **Additional operations**:
  - Modulo `%`
  - Exponentiation `^` / `exp`
  - **Trigonometry**: `sin`, `cos`, `tan` (with rad/deg toggle)
  - Optional: `log`, `ln`, `sqrt`, unary `neg`
- **Numbers & formatting**:
  - Full support for negatives and decimals
  - Configurable precision / rounding
- **Error handling & UX**:
  - Clear error messages (invalid token, wrong number of operands, division by zero)
  - Command history in the CLI
- **Frontend integration**:
  - Connect this core to a **web-based terminal** I’m working on (modern look, autocomplete, suggestions)
  - Optional HTTP API (Express) to evaluate expressions from the frontend
