# Chang Chi — Data Systems

A personal portfolio site for **Chang Chi**, built as DS219 Assignment 5.

The site introduces Chang Chi's data science background to classmates, instructors, recruiters, and potential collaborators. It brings together data engineering, business analysis, research, project leadership, education, and recognition in one accessible, responsive page.

## Technologies

- Plain HTML5
- Plain CSS (no framework or preprocessor)
- Plain JavaScript (no framework, build step, or package installation)
- Inline SVG artwork and a local SVG favicon
- System font stacks only

No databases, logins, external APIs, analytics, remote images, or paid services are used.

## Prerequisites

- A modern web browser
- Python 3 for the local static server

Check that Python 3 is available:

```sh
python3 --version
```

## Setup

There is nothing to install or build. Open a terminal in the repository root:

```sh
cd /Users/cc/Documents/GitHub/ds219-website
```

## Run the local server

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open this address in a browser:

```text
http://127.0.0.1:8000
```

Stop the server with `Ctrl+C` in the terminal where it is running.

If port 8000 is already in use, do not stop the other process. Use a different port instead, for example:

```sh
python3 -m http.server 8001 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8001`.

## How the interactions work

### Project filtering

The filter buttons appear only when JavaScript is available. **All** shows every project. The other buttons show only projects in that category. The selected button stays focused, updates `aria-pressed`, and has a visible active marker. A polite live region announces the number of visible projects. Hidden cards are removed from the keyboard tab order. Filtering does not scroll the page.

Each project also uses native `<details>` / `<summary>` elements. The **Explore the work** control opens the expanded explanation and works without JavaScript.

### Effects toggle

The **Effects: On / Effects: Off** button controls nonessential motion, including the moving indicator in the hero schematic. The preference is saved in `localStorage` when storage is available. If storage is blocked, the site still works and the choice lasts for the current page view.

The site follows `prefers-reduced-motion` by default and responds when that setting changes. Turning effects off does not remove focus outlines.

## Keyboard and narrow-width testing

1. Start the local server and open `http://127.0.0.1:8000`.
2. Press `Tab` from the top of the page. Confirm the **Skip to content** link appears first and works.
3. Continue tabbing through the header, hero links, filter buttons, **Explore the work** controls, and Connect links. Confirm every focused control has a visible outline.
4. On a filter button, press `Enter` or `Space`. Confirm the result count is announced by a screen reader, the selected filter remains focused, and the active state is visible without relying on color alone.
5. Open a project's **Explore the work** details with `Enter` or `Space`. Confirm the content is readable and does not trap focus.
6. Activate **Effects: On / Effects: Off** with the keyboard. Confirm the label and `aria-pressed` state change and the hero indicator pauses or resumes.
7. Resize the browser to 360px, 768px, and 1440px widths. Confirm there is no page-level horizontal scrolling, the header wraps cleanly, buttons remain at least 44px tall, and project cards stack naturally.
8. Set browser zoom to 200% at a normal desktop width. Confirm text remains readable and the layout still stacks without horizontal scrolling.
9. Disable JavaScript and reload. Confirm all project cards and their native details remain available, while the JavaScript-only filter bar and effects toggle are hidden.
