# Chopper Port Hunter

A lightweight command-line utility to clear frozen servers and processes off your local network ports.

## How to Use

Execute this command directly in your terminal:

```bash
npx chopper-port-hunter
```

Alternatively, download the repository files locally and execute:

```bash
node .
```

## Example Workflow

### 1. The Blockage

A background application or script freezes and blocks connection port 5000:

```bash
python -m http.server 5000
```

### 2. The Interactive Selection

Launch the tool and select your action using your keyboard digits:

```text
🌸 Chopper Port Hunter 🌸
All bow to the pink hat!

? What do you want to do?
  1) Fix a stuck port
  2) Go to sleep
  Answer: 1

Which port needs medicine? 5000
```

### 3. The Resolution

The background execution engine terminates the process silently and confirms the fix:

```text
🎉 Success! I cured it! Port 5000 is healthy and free!
```

## Security & Parameters

* **Input Guardrails**: Automatically isolates and rejects strings, system ports under 1024, and out-of-bounds inputs above 65535.
* **Silent Runtime**: Utilises background execution hooks to eliminate annoying terminal popups and visual window flashes.
* **License**: CC-BY-NC-ND-4.0
