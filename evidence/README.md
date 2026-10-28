# Evidence

This folder is for genuine proof that the site was served and rendered locally.

## Captured file

```text
evidence/site-localhost.png
```

The image is included. It was captured from the real running site, not mocked, edited, or generated from HTML alone.

## How to recapture the screenshot

1. Open a terminal in the repository root.
2. Start the local server:

   ```sh
   python3 -m http.server 8000 --bind 127.0.0.1
   ```

3. Open a browser and go to `http://127.0.0.1:8000`.
4. Confirm the address bar visibly shows `http://127.0.0.1:8000`.
5. Make the browser window large enough to show the hero, navigation, and the start of the page content. Keep the browser address bar in the frame.
6. Take an operating-system screenshot of the browser window or a region that includes both the rendered page and the visible address bar.
   - macOS shortcut for a selected region: `Cmd + Shift + 4`
   - macOS shortcut for the front window: `Cmd + Shift + 4`, then press `Space`
7. Save the file as `evidence/site-localhost.png` inside this repository.
8. Open the saved image once to confirm the address bar and page are both legible.

Do not draw a fake address bar, composite a browser frame, or create a placeholder image. The screenshot must come from the actual served website.
