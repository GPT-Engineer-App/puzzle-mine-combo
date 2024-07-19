# puzzle-mine-combo

2d puzzle game combo between minesweeper and soduko
Each tile has a letter, one of: A, B, C
3x3 tile

on mouseover the tile with  mine under shakes

Rules:
- Letter A will "fake shake" all the A if any A has a mine under
- B never shakes even if it has a mine
- C shakes of A is next to it

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with .

- Vite
- React
- shadcn-ui
- Tailwind CSS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/puzzle-mine-combo.git
cd puzzle-mine-combo
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
