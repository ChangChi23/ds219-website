# Reflection

## Session record

- Tool used: **OpenCode**
- Model selected in this session: **Big Pickle**
- Provider shown in this session: **OpenCode**
- Work was done on the existing Git branch `assignment-5-website`.

## Prompt excerpt

> "Add a real button labeled 'Effects: On' / 'Effects: Off'. It controls all nonessential animations and remembers the preference in localStorage when available. Honor prefers-reduced-motion by default and if that setting changes."

## Observed tool actions

- Ran `pwd` and saw `/Users/cc/Documents/GitHub/ds219-website`.
- Ran `git branch --show-current` and saw `assignment-5-website`.
- Ran `python3 --version` and saw `Python 3.14.0`.
- Started the local server with `python3 -m http.server 8000 --bind 127.0.0.1`.
- Requested `/`, `/styles.css`, `/script.js`, and `/assets/favicon.svg`; each returned HTTP 200.
- Used headless Chrome through the Chrome DevTools Protocol to click filters, open a project's details, toggle effects, emulate reduced motion, and measure page widths at 360px, 768px, and 1440px. The automated checks reported no horizontal overflow, no controls under 44px tall in the checked set, and no JavaScript exceptions.

Headless screenshots were also generated for automated rendering checks, but this session's model cannot accept image input, so the visual design still needs human review.

## Readability refinement

After the initial build, I reviewed the typography and found that too much of the secondary copy, project metadata, small navigation text, and schematic labeling was set between roughly 9px and 12px. That made the page technically complete but harder to read than the assignment's readability goal required. I kept the dark console identity and changed the type scale rather than reducing content.

- Body text is now 18px on desktop and 17px on narrow screens, with line height around 1.65–1.7. Navigation and controls are at least 15px, project summaries are 17px, and tags, dates, and supporting labels are at least 14px.
- Section headings, project titles, roles, and organization names were increased and rebalanced so the hierarchy remains clear without relying on tiny labels.
- I added a separate, simplified mobile schematic instead of shrinking the four-node desktop diagram. Its labels render at about 14px or larger at 360px. Decorative micro-labels such as "NODE.01" were removed because they added visual noise without useful meaning.
- Responsive breakpoints now stack the hero, project cards, skills, timeline, and recognition rows earlier, so larger text is not forced into cramped columns. I removed the previous overflow clipping so layout problems cannot be hidden.

I re-ran the automated browser checks after these changes at 1440px, 768px, and 360px, plus 720px and 384px as zoom-equivalent narrow layouts. The checks reported no page-level horizontal overflow, no visible control under 44px tall, no overlapping labels inside the visible schematic, and no JavaScript exceptions or failed requests. The filter counts, native details, both schematic pause states, saved preference, and reduced-motion response still worked. A no-JavaScript reload still showed all four cards and four native details while hiding the JavaScript-only controls.

These checks do not replace human visual review, keyboard use, or screen-reader testing.

## How category filtering works

Each project card has a `data-category` value such as `research` or `data-engineering`. Each filter button has a matching `data-filter` value. When a button is pressed, JavaScript loops over the cards and sets the native `hidden` attribute on cards that do not match the selected category. The `hidden` attribute removes those cards from both the visual layout and the keyboard tab order.

The same loop updates `aria-pressed` on every filter button so assistive technology knows which filter is active. A visually hidden `role="status"` element with `aria-live="polite"` receives a sentence such as "Showing 1 project in Research." The clicked button is not moved, so keyboard focus stays on the selected filter.

The filter buttons and effects button start with the `hidden` attribute in the HTML. JavaScript removes that attribute only after the script is ready, so the controls are not shown when JavaScript is unavailable. All four cards and all four native `<details>` sections remain available without JavaScript.

## Manual verification still required

- **To be completed after my manual verification.** Visually inspect the site in a normal browser at 360px, 768px, and 1440px widths and judge the final aesthetic quality.
- **To be completed after my manual verification.** Tab through the entire page with a physical keyboard and confirm every focus outline is easy to see.
- **To be completed after my manual verification.** Test with a screen reader that the filter result count is announced politely.
- **To be completed after my manual verification.** Change the operating system's reduced-motion setting while the page is open and confirm the effects state responds.
- **To be completed after my manual verification.** Capture `evidence/site-localhost.png` from the actual served page, with the browser address bar showing `http://127.0.0.1:8000`.

No manual visual review, physical keyboard test, screen-reader observation, or student observation is claimed beyond the automated checks listed above.
