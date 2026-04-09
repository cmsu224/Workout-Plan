# PPL PRO — Workout Tracker

A **self-contained, offline-capable mobile workout tracker** built as a single HTML file. No installation, no app store, no backend required.

🔗 **Live App:** [https://cmsu224.github.io/Workout-Plan/](https://cmsu224.github.io/Workout-Plan/)

> [!NOTE]
> **AI Agent Rule:** Always push changes to GitHub automatically after any code modifications. The live app updates via GitHub Pages on every push to `main`.

---

## 📱 How to Use (Mobile)

**It's available right away!**

1. Go to the live URL: `https://cmsu224.github.io/Workout-Plan/`
2. Open it in your mobile browser (Safari, Chrome, etc.)
3. On iOS: tap **Share → Add to Home Screen** for a full PWA-like experience
4. That's it — no login, no install.

> [!NOTE]
> All workout data is saved locally in your browser's `localStorage`. The Google Sheets sync is optional and requires the Apps Script backend to be configured.

---

## 🏋️ Features

### Workout Modes
- **Push / Pull / Legs** — Classic PPL split with gym dumbbell exercises
- **Vacation Mode** ✈️ — Full-body resistance band + bodyweight workout when away from the gym

### Per-Exercise Tracking
- **Weight selector** — Snaps to Bowflex weight increments (5–90 lbs)
- **Set tracking** — Tap "Hit X" to log reps, then fine-tune with +/− steppers
- **Rest timer** — Auto-starts after every logged set; configurable (60s / 90s / 2m / 5m) + quick +/- 15s adjustments ⏱️
- **Exercise visuals** — Animated SVG demonstrations; tap exercise name to view
- **Per-exercise notes** 📝 — Jot form cues or reminders, saved locally
- **Progress bar** — Track set completion at a glance on every card
- **PR detection** ⚡ — Badge flashes and confetti pops 🎉 when you exceed your previous best weight
- **Deload button** — Drops weight 10% to the nearest increment when needed

### History & Analytics
- **Logs tab** — Line charts for every exercise showing weight progression over time
- **Filter by day** — Push / Pull / Legs or All
- **PR tracking** — Best weight highlighted on each chart
- **Backup & Restore** 💾 — Export your local data to a `.json` file and import it anywhere

### Smart Features
- **Auto-next routine** — Detects your last logged day and opens the next one automatically
- **Dark mode & Mute** 🌙🔕 — Persists across sessions
- **Cloud sync** ☁️ — Posts workout data to a Google Sheets Apps Script endpoint
- **Offline fallback** — Works fully without internet (no sync)

---

## 🗂️ Project Structure

```
Workout-Plan/
├── index.html          # Main HTML entry point
├── css/
│   └── style.css       # All styles extracted
├── js/
│   └── app.js          # Core app logic & data fetching
├── animations/         # Folder holding 25 individual SVG animation files
│   ├── db_flat_bench.svg
│   ├── ...
├── README.md           # This file
```

---

## ⚙️ Cloud Sync Setup (Optional)

The app posts workout data to a Google Apps Script Web App URL stored in:
```js
const SCRIPT_URL = "https://script.google.com/macros/s/.../exec";
```

To use your own:
1. Create a Google Sheet
2. Deploy an Apps Script Web App that accepts `POST` requests and appends rows
3. Replace `SCRIPT_URL` in `js/app.js` with your deployment URL

---

## 🏗️ Tech Stack

| Layer | Tech |
|---|---|
| UI Framework | [Tailwind CSS](https://tailwindcss.com/) (CDN) |
| Icons | [Phosphor Icons](https://phosphoricons.com/) |
| Charts | [Chart.js](https://www.chartjs.org/) |
| Exercise Visuals | Custom animated SVGs |
| Storage | `localStorage` (browser-native) |
| Backend | Google Apps Script (optional) |

---

## 📝 Workout Plan Reference

### Push
| Exercise | Sets | Rep Range |
|---|---|---|
| DB Flat Bench | 4 | 8–12 |
| Seated DB Press | 3 | 8–12 |
| Incline DB Flys | 3 | 12–15 |
| Lateral Raises | 4 | 15–20 |
| Skull Crushers | 3 | 12–15 |
| DB Overhead Extension | 3 | 12–15 |

### Pull
| Exercise | Sets | Rep Range |
|---|---|---|
| Pull-Ups | 4 | Max |
| One-Arm Row | 3 | 8–10 |
| Face Pulls | 3 | 15–20 |
| Rear Delt Flys | 4 | 15–20 |
| Bicep Curls | 3 | 10–12 |
| Hammer Curls | 3 | 10–12 |

### Legs
| Exercise | Sets | Rep Range |
|---|---|---|
| Goblet Squats | 4 | 10–12 |
| Bulgarian Splits | 3 | 8–12 |
| DB RDLs | 4 | 10–12 |
| DB Hip Thrusts | 3 | 12–15 |
| Calf Raises | 5 | 15–20 |

### Vacation (Full Body)
| Exercise | Sets | Rep Range |
|---|---|---|
| Bodyweight Squats | 4 | 20–25 |
| Push-Ups | 3 | Max |
| Lunges | 3 | 15/side |
| Band Rows | 4 | 15–20 |
| Band Shoulder Press | 3 | 12–15 |
| Band Bicep Curls | 3 | 15–20 |
| Band Tricep Press | 3 | 15–20 |
| Plank | 3 | 60s |

---

## 🤖 AI Agent Changelog & Context

This section is maintained by the AI agent to preserve context across chat sessions.

### Goal & Project Scope
The goal of this project is to maintain an offline-capable mobile workout tracker that allows users to seamlessly log their Push/Pull/Legs or Vacation workouts, track progression via local storage, view animated SVG exercise demonstrations, and optionally sync data to Google Sheets. The project follows a standard web structure with extracted CSS, JS, and individual SVG animations.

### Recent Changes

*   **Exercise Animations Audit (Current Session):**
    *   Verified the master list of exactly 25 exercises defined in this README.
    *   Synced all 25 exercises from `workout2.0.html` to `test_animations.html` for comprehensive visual testing.
    *   Fixed incorrect SVG mechanics for **DB RDLs** (torso bend, straight arms), **DB Lunges** (split stance, knee drops, dumbbells at side), and **Lunges** (split stance).
    *   Verified the graphical accuracy of complex moves like **Incline DB Flys**, **Goblet Squats**, **DB Pullovers**, **Hammer Curls**, and **Banded Pushdowns** via browser subagent.
    *   All SVGs in the master `workout2.0.html` file now reflect the corrected, reviewed, and finalized animations.

