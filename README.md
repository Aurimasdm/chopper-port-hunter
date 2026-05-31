# 🌸 chopper-port-hunter 🦌

A small tool to clear stuck servers off your local ports.

_Tested on:_ Windows 11 🪟

## How to Use

Type this in your terminal:

```bash
npx chopper-port-hunter
```

Clone or download the repository, then run `node index.js`.

## 🛠️ Example

### 1. The Problem

A background Python server is blocking port 5000:

```bash
python -m http.server 5000
```

### 2. The Prompt

Open the tool and type your port number:

```text
🌸 CHOPPER PORT HUNTER 🦌
All bow to the pink hat!

✔ Enter port to clear: 5000
```

### 3. The Clear

The tool stops the task and reports the details:

```text
🎉 Success! Id 7704 python
🌸 Port 5000 is completely free!
```
