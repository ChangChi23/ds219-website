# Project Constraints

This repository is the DS219 Assignment 5 personal portfolio for Chang Chi.

## Content

- The site is English-only. All website copy and project documentation are written in English.
- Use only the approved factual content supplied in the assignment prompt. Do not invent credentials, employers, achievements, testimonials, project URLs, availability for work, dates, award levels, or additional personal details.
- Do not imply Harvard employment, a Harvard degree, a peer-reviewed publication, or a faculty research appointment. The Harvard entry is a seminar project.
- Do not imply a completed degree at the University of Rochester.
- Do not imply that Chang Chi performed as a pianist or taught the International Piano Masterclass.
- Do not publish a phone number, personal email address, private resume PDF, or resume-download button.
- Do not add a nonfunctional contact form, placeholder demo buttons, or source-code links.

## Technology

- Use plain HTML, CSS, and JavaScript only.
- No framework, build step, package installation, database, login, external API, analytics, or paid service.
- Use local CSS and SVG artwork. Do not use remote image assets.
- Use system font stacks so the design works without external font requests.
- Keep the code readable for a student who needs to explain it.

## Design and accessibility

- Maintain the dark cyberpunk data-console visual identity and the color palette defined in the assignment prompt.
- Use cyan sparingly for active states, borders, and important details.
- Keep the page usable at 360px, 768px, and 1440px widths with no page-level horizontal scrolling.
- Use semantic landmarks, a logical heading hierarchy, a skip link, visible focus indicators, and touch targets of at least 44px.
- Maintain WCAG AA text contrast. Never communicate meaning through color alone.
- Keep content visible without animation. Honor `prefers-reduced-motion` and provide a working **Effects: On / Effects: Off** control that persists when storage is available.
- With JavaScript unavailable, all project cards and native `<details>` content must remain accessible. JavaScript-only controls may be hidden.

## Serving, privacy, and deployment

- Serve locally from the repository root with `python3 -m http.server 8000 --bind 127.0.0.1`.
- Keep the repository free of credentials, secrets, `node_modules`, generated build output, unrelated files, and the original private resume.
- Do not push, publish, deploy, or commit unless explicitly requested.
