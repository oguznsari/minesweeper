# MineSweeper

This MineSweeper game implementation was inspired by an interview question from a Fortune 500 company (which shall remain unnamed for now). Though I didn't land the job, I enjoyed the challenge and decided to build it on my own. (Spoiler alert: Failed that interview 😂)

## Getting Started

To get started, clone the repository and run the following command:

```bash
npm run dev
```

## How to play

The game begins with a default game seed:

```javascript
["width, height, ...mineLocations"];
["3, 3, 0, 4, 7"];
```

Here's what these parameters mean:

- width: Width of the game board.
- height: Height of the game board.
- mineLocations: An array indicating the locations of the mines on the board.

Alternatively, you can customize the game by providing your own dimensions and mine locations:

```javascript
["width, height, ...mineLocations"];
```

To play, open boxes on the grid without hitting any mines. If you successfully reveal all non-mine squares, you win the game! However, if you uncover a mine, the game ends, but fear not—you can restart with the default seed provided above.

<h2 align="center" width="100%">Example</h2>
<div style="display: flex; justify-content: space-between; width: 100%;">
    <!-- Light theme -->
    <div style="text-align: center;">
        <h3 style="margin-bottom: 0;">Light Theme</h3>
        <a href="#">
            <img src="light_theme_icon_url" alt="Light Theme" style="height: 50px;">
        </a>
    </div>
    <!-- Dark theme -->
    <div style="text-align: center;">
        <h3 style="margin-bottom: 0;">Dark Theme</h3>
        <a href="#">
            <img src="dark_theme_icon_url" alt="Dark Theme" style="height: 50px;">
        </a>
    </div>
</div>
