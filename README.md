# ARCANA · Tarot by Rayner

A quiet space to draw a card, explore a question, and see things from another perspective.

ARCANA is a mobile-first tarot web app with classic Rider–Waite–Smith artwork, an antique-gold aesthetic, and support for **English, Simplified Chinese, and Traditional Chinese**.

**[Open ARCANA](https://rayer-jeffrey-lee.github.io/arcana-tarot/)** — no account required.

## Features

- **All 78 cards:** 22 Major Arcana and 56 Minor Arcana, with localized names, keywords, and upright and reversed interpretations.
- **Five spreads:** a daily card, two three-card spreads, a four-element spread, and a five-card comparison between two choices.
- **Interactive drawing:** cryptographically secure shuffling, animated card selection, and CSS 3D flips.
- **Upright and reversed cards:** reversed artwork rotates 180°, while interface labels remain readable.
- **Reading guidance:** explore themes in everyday life, relationships, and work.
- **Magical atmosphere:** optional ambient music generated in the browser and haptic feedback on supported devices.
- **Keep your reading:** copy the text or save a poster.
- **Progressive Web App:** home-screen installation where supported, with offline caching after a successful online visit.

## Choose a spread

| Spread | Cards | Positions |
| --- | ---: | --- |
| Daily Card | 1 | A focus for today |
| Flow of Time | 3 | Past · Present · Future |
| Situation & Guidance | 3 | Situation · Obstacle · Guidance |
| Four Elements | 4 | Fire · Action; Water · Emotion; Air · Thought; Earth · Foundation |
| Two Paths | 5 | Current situation · Path A development · Path B development · Path A outcome · Path B outcome |

## Use the app

1. Choose your language and spread.
2. Take a moment to reflect on your question.
3. Shuffle, select your cards, and reveal the reading.
4. Copy the interpretation or save a poster if you would like to keep it.

The experience works in a modern desktop or mobile browser. Audio, vibration, installation, and saving behavior depend on browser and device support.

**Network availability:** GitHub Pages access can be slow or unreliable on some mainland China networks. Availability across all regions and carriers is not guaranteed.

## About this repository

This repository contains the **ready-to-serve static website**. It is published through GitHub Pages from the root of the `main` branch.

The app uses HTML, CSS, and native JavaScript. No backend, API key, or npm installation is required to serve this release. Keep the complete folder structure when hosting it elsewhere; `index.html` alone does not include every asset.

Card images, styles, interpretations, the creator portrait, and the poster renderer are served with the website. The app does not depend on external image or font CDNs. Ambient audio is generated locally using the Web Audio API.

## Privacy

Questions and the current reading remain in page memory. Preferences and offline caches are stored on the device. The app contains no advertising or analytics code.

GitHub Pages records visitor IP addresses for security purposes, including for visitors who are not signed in. See the [privacy notice](https://rayer-jeffrey-lee.github.io/arcana-tarot/privacy.html) for details.

## Artwork and licensing

The deck uses classic Rider–Waite–Smith artwork. Sources and attribution are listed in [credits.html](credits.html) and [assets/cards/ATTRIBUTION.json](assets/cards/ATTRIBUTION.json).

Bundled libraries retain their respective licenses. [html2canvas-LICENSE.txt](html2canvas-LICENSE.txt) is the MIT license for the poster-rendering library; it does not grant a license to ARCANA's project code, branding, or creator portrait.

## Created by Rayner

Find Rayner through the social links in the app: Xiaohongshu, X, YouTube, Bilibili, Douyin, and TikTok.

Contact: [bingchanlee9@gmail.com](mailto:bingchanlee9@gmail.com)

---

For entertainment and personal reflection. Card interpretations are prompts to consider, not guarantees about the future.
