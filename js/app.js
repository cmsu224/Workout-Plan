const exerciseSVGs = {};
const animationFiles = {
    "DB Flat Bench": "db_flat_bench.svg",
    "Seated DB Press": "seated_db_press.svg",
    "Incline DB Flys": "incline_db_flys.svg",
    "Lateral Raises": "lateral_raises.svg",
    "Skull Crushers": "skull_crushers.svg",
    "Banded Pushdowns": "banded_pushdowns.svg",
    "Pull-Ups": "pull_ups.svg",
    "One-Arm Row": "one_arm_row.svg",
    "DB Pullovers": "db_pullovers.svg",
    "Rear Delt Flys": "rear_delt_flys.svg",
    "Bicep Curls": "bicep_curls.svg",
    "Hammer Curls": "hammer_curls.svg",
    "Goblet Squats": "goblet_squats.svg",
    "Bodyweight Squats": "bodyweight_squats.svg",
    "Bulgarian Splits": "bulgarian_splits.svg",
    "DB Lunges": "db_lunges.svg",
    "Lunges": "lunges.svg",
    "DB RDLs": "db_rdls.svg",
    "Calf Raises": "calf_raises.svg",
    "Push-Ups": "push_ups.svg",
    "Plank": "plank.svg",
    "Band Rows": "band_rows.svg",
    "Band Shoulder Press": "band_shoulder_press.svg",
    "Band Bicep Curls": "band_bicep_curls.svg",
    "Band Tricep Press": "band_tricep_press.svg",
};

async function loadAnimations() {
    const promises = Object.keys(animationFiles).map(async (name) => {
        try {
            const res = await fetch('animations/' + animationFiles[name]);
            if (!res.ok) throw new Error("error " + res.status);
            exerciseSVGs[name] = await res.text();
            
            // visually update UI if modal open
            const modal = document.getElementById('visual-modal');
            const title = document.getElementById('modal-title');
            if (modal && !modal.classList.contains('hidden') && title && title.innerText === name) {
                const container = document.getElementById('visual-container');
                if (container) container.innerHTML = exerciseSVGs[name];
            }
        } catch(e) { console.error(e); }
    });
    await Promise.all(promises);
}
  };

        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby_8B47oHmqDK05ZnaAlMX8GQlvmsxGJoZy74K2HS9aFNvgME-wNAYa6Cf1nXGLIi5IBg/exec";

        // --- GYM WORKOUTS ---
        const gymWorkouts = {
            "Push": [
                { name: "DB Flat Bench", sets: 4, range: "8-12", img: "https://wger.de/media/exercise-images/97/Dumbbell-bench-press-1.png", search: "dumbbell bench press" },
                { name: "Seated DB Press", sets: 3, range: "8-12", img: "https://wger.de/media/exercise-images/123/dumbbell-shoulder-press-large-1.png", search: "seated dumbbell shoulder press" },
                { name: "Incline DB Flys", sets: 3, range: "12-15", img: "https://wger.de/media/exercise-images/1643/a6a603e9-a83a-4106-92a7-7d32e1b64c68.webp", search: "incline dumbbell fly" },
                { name: "Lateral Raises", sets: 4, range: "15-20", img: "https://wger.de/media/exercise-images/148/lateral-dumbbell-raises-large-2.png", search: "lateral raises" },
                { name: "Skull Crushers", sets: 3, range: "12-15", img: "https://wger.de/media/exercise-images/84/Lying-close-grip-triceps-press-to-chin-1.png", search: "skull crushers" },
                { name: "Banded Pushdowns", sets: 3, range: "20", img: "https://wger.de/media/exercise-images/1185/c5ca283d-8958-4fd8-9d59-a3f52a3ac66b.jpg", search: "tricep pushdown" }
            ],
            "Pull": [
                { name: "Pull-Ups", sets: 4, range: "Max", img: "https://wger.de/media/exercise-images/475/b0554016-16fd-4dbe-be47-a2a17d16ae0e.jpg", search: "pull ups" },
                { name: "One-Arm Row", sets: 3, range: "8-10", img: "https://wger.de/media/exercise-images/81/a751a438-ae2d-4751-8d61-cef0e9292174.png", search: "one arm dumbbell row" },
                { name: "DB Pullovers", sets: 3, range: "12-15", img: "https://wger.de/media/exercise-images/192/Bench-press-1.png", search: "dumbbell pullover" },
                { name: "Rear Delt Flys", sets: 4, range: "15-20", img: "https://wger.de/media/exercise-images/829/ad724e5c-b1ed-49e8-9279-a17545b0dd0b.png", search: "rear delt fly" },
                { name: "Bicep Curls", sets: 3, range: "10-12", img: "https://wger.de/media/exercise-images/81/Biceps-curl-1.png", search: "dumbbell bicep curl" },
                { name: "Hammer Curls", sets: 3, range: "12", img: "https://wger.de/media/exercise-images/86/Bicep-hammer-curl-1.png", search: "hammer curl" }
            ],
            "Legs": [
                { name: "Goblet Squats", sets: 4, range: "10-12", img: "https://wger.de/media/exercise-images/203/1c052351-2af0-4227-aeb0-244008e4b0a8.jpeg", search: "goblet squat" },
                { name: "Bulgarian Splits", sets: 3, range: "8-12", img: "https://wger.de/media/exercise-images/1706/0c5243cc-2539-4005-aee0-d3a8c5d3a32c.jfif", search: "bulgarian split squat" },
                { name: "DB RDLs", sets: 4, range: "10-12", img: "https://wger.de/media/exercise-images/1652/0306c8c0-70cc-45d4-92de-6fa72ceaa834.webp", search: "dumbbell romanian deadlift" },
                { name: "DB Lunges", sets: 3, range: "20", img: "https://wger.de/media/exercise-images/113/Walking-lunges-1.png", search: "dumbbell lunge" },
                { name: "Calf Raises", sets: 5, range: "15-20", img: "https://wger.de/media/exercise-images/622/9a429bd0-afd3-4ad0-8043-e9beec901c81.jpeg", search: "standing calf raise" }
            ]
        };

        // --- VACATION WORKOUTS (BANDS/BW) ---
        const vacationWorkouts = {
            "FullBody": [
                { name: "Bodyweight Squats", sets: 4, range: "20-25", img: "https://wger.de/media/exercise-images/203/1c052351-2af0-4227-aeb0-244008e4b0a8.jpeg", search: "bodyweight squat" },
                { name: "Push-Ups", sets: 3, range: "Max", img: "https://wger.de/media/exercise-images/1551/a6a9e561-3965-45c6-9f2b-ee671e1a3a45.png", search: "push ups" },
                { name: "Lunges", sets: 3, range: "15/side", img: "https://wger.de/media/exercise-images/113/Walking-lunges-1.png", search: "lunges" },
                { name: "Band Rows", sets: 4, range: "15-20", img: "https://wger.de/media/exercise-images/81/a751a438-ae2d-4751-8d61-cef0e9292174.png", search: "resistance band row" },
                { name: "Band Shoulder Press", sets: 3, range: "12-15", img: "https://wger.de/media/exercise-images/123/dumbbell-shoulder-press-large-1.png", search: "band shoulder press" },
                { name: "Band Bicep Curls", sets: 3, range: "15-20", img: "https://wger.de/media/exercise-images/81/Biceps-curl-1.png", search: "band bicep curl" },
                { name: "Band Tricep Press", sets: 3, range: "15-20", img: "https://wger.de/media/exercise-images/84/Lying-close-grip-triceps-press-to-chin-1.png", search: "band tricep extension" },
                { name: "Plank", sets: 3, range: "60s", img: "https://wger.de/media/exercise-images/1551/a6a9e561-3965-45c6-9f2b-ee671e1a3a45.png", search: "plank" }
            ]
        };

        const bowflexWeights = [5, 7.5, 10, 12.5, 15, 17.5, 20, 22.5, 25, 30, 35, 40, 45, 50, 52.5, 55, 60, 65, 70, 75, 80, 85, 90];

        let activeWorkouts = gymWorkouts;
        let isVacationMode = localStorage.getItem('vacationMode') === 'true';
        let timerInterval, cachedLogs = null, isSaving = false, currentDay = 'Push', lastWorkoutMode = 'Push';
        let cloudHistory = {};

        let currentExerciseName = '';
        let defaultRestTime = 90;
        let timerRunning = false;
        let timerPaused = false;
        let endTime = 0;
        let timeLeft = 0;
        let isMuted = localStorage.getItem('isMuted') === 'true';

        let exerciseCategoryMap = {};
        function updateMap() {
            exerciseCategoryMap = {};
            const source = isVacationMode ? vacationWorkouts : gymWorkouts;
            Object.keys(source).forEach(day => source[day].forEach(ex => exerciseCategoryMap[ex.name] = day));
        }

        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        function playBeep() {
            if (isMuted) return;
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain); gain.connect(audioCtx.destination);
            osc.type = 'sine'; osc.frequency.value = 880; gain.gain.value = 0.1;
            osc.start(); setTimeout(() => osc.stop(), 500);
            if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
        }

        function toggleMute() {
            isMuted = !isMuted;
            localStorage.setItem('isMuted', isMuted);
            updateMuteIcon();
        }

        function updateMuteIcon() {
            const icon = document.getElementById('mute-icon');
            if (!icon) return;
            if (isMuted) {
                icon.classList.remove('ph-bell');
                icon.classList.add('ph-bell-slash');
            } else {
                icon.classList.remove('ph-bell-slash');
                icon.classList.add('ph-bell');
            }
        }

        function initTheme() {
            if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
                document.getElementById('theme-icon').classList.replace('ph-moon', 'ph-sun');
            } else {
                document.documentElement.classList.remove('dark');
                document.getElementById('theme-icon').classList.replace('ph-sun', 'ph-moon');
            }
        }
        function toggleDarkMode() {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                document.getElementById('theme-icon').classList.replace('ph-sun', 'ph-moon');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                document.getElementById('theme-icon').classList.replace('ph-moon', 'ph-sun');
            }
            if (currentDay === 'History') renderHistory(document.getElementById('main-container'));
        }

        function toggleVacationMode() {
            isVacationMode = !isVacationMode;
            localStorage.setItem('vacationMode', isVacationMode);
            applyVacationMode();
            updateMap();
            if (isVacationMode) setView('FullBody');
            else setView(lastWorkoutMode);
        }

        function applyVacationMode() {
            const body = document.body;
            const badge = document.getElementById('vacation-badge');
            const icon = document.getElementById('vacation-icon');
            const bottomNav = document.getElementById('bottom-nav');

            if (isVacationMode) {
                activeWorkouts = vacationWorkouts;
                body.classList.add('vacation-mode');
                badge.classList.remove('hidden');
                icon.className = "ph-fill ph-airplane-tilt text-blue-600";
                document.getElementById('status-text').innerText = "Vacation (Local Only)";
                document.getElementById('status-dot').className = "w-2 h-2 rounded-full bg-blue-500";
                if (bottomNav) bottomNav.style.display = 'none';
            } else {
                activeWorkouts = gymWorkouts;
                body.classList.remove('vacation-mode');
                badge.classList.add('hidden');
                icon.className = "ph-bold ph-airplane-tilt";
                document.getElementById('status-text').innerText = "Connecting...";
                if (bottomNav) bottomNav.style.display = "flex";
            }
        }

        async function init() {
            await loadAnimations();
            initTheme();
            applyVacationMode();
            updateMap();
            updateMuteIcon();
            setRestTime(defaultRestTime);

            const today = new Date().toDateString();
            const lastActiveDate = localStorage.getItem('Last-Activity-Date');

            if (lastActiveDate !== today) {
                Object.keys(localStorage).forEach(key => {
                    if (key.startsWith('R-')) localStorage.removeItem(key);
                });
                localStorage.setItem('Last-Activity-Date', today);
            }

            try {
                if (!isVacationMode) {
                    const res = await fetch(SCRIPT_URL);
                    const data = await res.json();
                    cachedLogs = data;

                    for (let i = data.length - 1; i >= 0; i--) {
                        const row = data[i];
                        if (!cloudHistory[row[1]] && row[2] > 0) {
                            const totalReps = row[3] / row[2];
                            cloudHistory[row[1]] = { weight: row[2], totalReps: Math.round(totalReps) };
                        }
                    }

                    let nextRoutine = 'Push';
                    let statusMsg = "System Ready";
                    if (data.length > 0) {
                        const lastRow = data[data.length - 1];
                        const lastCategory = exerciseCategoryMap[lastRow[1]];
                        if (lastCategory) {
                            if (lastCategory === 'Push') nextRoutine = 'Pull';
                            else if (lastCategory === 'Pull') nextRoutine = 'Legs';
                            else if (lastCategory === 'Legs') nextRoutine = 'Push';
                            statusMsg = `Last: ${lastCategory} ➤ Next: ${nextRoutine}`;
                        }
                    }
                    document.getElementById('status-dot').className = "w-2 h-2 rounded-full bg-green-500";
                    document.getElementById('status-text').innerText = statusMsg;
                    setView(nextRoutine);
                } else {
                    setView('FullBody');
                }

            } catch (e) {
                document.getElementById('status-dot').className = "w-2 h-2 rounded-full bg-red-500";
                if (!isVacationMode) {
                    document.getElementById('status-text').innerText = "Offline Mode";
                    setView('Push');
                }
            }
        }

        function setView(view) {
            if (!isVacationMode && view !== 'History') lastWorkoutMode = view;
            currentDay = view;

            if (!isVacationMode) {
                document.querySelectorAll('.nav-btn').forEach(btn => {
                    btn.classList.remove('active-tab', 'text-red-600');
                    btn.classList.add('text-gray-400', 'dark:text-gray-500');
                });
                const activeBtn = document.getElementById(`nav-${view}`);
                if (activeBtn) {
                    activeBtn.classList.remove('text-gray-400', 'dark:text-gray-500');
                    activeBtn.classList.add('active-tab', 'text-red-600');
                }
            }

            const container = document.getElementById('main-container');
            container.innerHTML = '';
            if (view === 'History') renderHistory(container);
            else renderWorkout(view, container);
            window.scrollTo(0, 0);
        }

        function renderWorkout(day, container) {
            const list = isVacationMode ? vacationWorkouts['FullBody'] : gymWorkouts[day];
            const title = isVacationMode ? "Vacation Full Body" : day;
            const titleColor = isVacationMode ? "text-blue-600 dark:text-blue-400" : "text-gray-900 dark:text-white";

            container.innerHTML = `<div class="mb-8 fade-in px-2"><h2 class="text-4xl font-black ${titleColor} uppercase italic tracking-tighter">${title}</h2></div>`;

            list.forEach((ex) => {

                let prevWeight = '';
                let prevColorClass = 'text-gray-400 dark:text-gray-500';

                if (!isVacationMode) {
                    const historyData = cloudHistory[ex.name];
                    if (historyData) {
                        prevWeight = historyData.weight;
                        let targetPerSet = 12;
                        if (ex.range.includes('-')) targetPerSet = parseInt(ex.range.split('-')[1]);
                        else if (ex.range === 'Max') targetPerSet = 8;
                        const totalRepGoal = targetPerSet * ex.sets;

                        if (historyData.totalReps >= totalRepGoal) prevColorClass = 'text-green-600 dark:text-green-400';
                        else prevColorClass = 'text-red-600 dark:text-red-400';
                    }
                }

                let currentWeight = localStorage.getItem(`W-${ex.name}`);
                if (!isVacationMode && (currentWeight === null || currentWeight === '') && prevWeight !== '') {
                    currentWeight = prevWeight;
                    localStorage.setItem(`W-${ex.name}`, currentWeight);
                }

                let targetReps = 12;
                if (ex.range.includes('-')) targetReps = parseInt(ex.range.split('-')[1]);
                else if (ex.range === 'Max') targetReps = 15;
                else if (ex.range.includes('/')) targetReps = 15;

                const card = document.createElement('div');
                card.className = 'bg-white dark:bg-darkcard rounded-[2rem] shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6 transition-colors duration-300';

                // Count completed sets for progress bar
                let completedSets = 0;
                let setsHtml = '';
                for (let i = 1; i <= ex.sets; i++) {
                    const key = `R-${ex.name}-S${i}`;
                    const r = localStorage.getItem(key);
                    if (r !== null) completedSets++;

                    let controlHtml = '';
                    const btnColor = isVacationMode ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-red-50 text-red-600 border-red-100';
                    const btnDarkColor = isVacationMode ? 'dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-900/30' : 'dark:bg-red-900/20 dark:text-red-400 dark:border-red-900/30';

                    if (r === null) {
                        controlHtml = `
                            <button onclick="quickHit('${ex.name}', ${i}, ${targetReps})"
                                class="w-full ${btnColor} ${btnDarkColor} border font-black text-sm uppercase py-3 rounded-xl tap-scale transition-colors">
                                Hit ${targetReps}
                            </button>
                        `;
                    } else {
                        controlHtml = `
                            <div class="flex items-center gap-3 w-full justify-end">
                                <button onclick="adjustRep('${ex.name}', ${i}, -1)" class="stepper-btn btn-gray tap-scale">－</button>
                                <span id="disp-${ex.name}-${i}" class="text-2xl font-black text-gray-900 dark:text-white w-10 text-center">${r}</span>
                                <button onclick="adjustRep('${ex.name}', ${i}, 1)" class="stepper-btn btn-gray tap-scale">＋</button>
                            </div>
                        `;
                    }

                    setsHtml += `
                    <div class="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0 h-16">
                        <span class="text-sm font-bold text-gray-400 dark:text-gray-500 w-12">SET ${i}</span>
                        <div class="flex-1 pl-4" id="ctrl-${ex.name}-${i}">
                            ${controlHtml}
                        </div>
                    </div>`;
                }

                // PR badge: flashes when current weight exceeds cloud best
                const isCurPR = !isVacationMode && prevWeight !== '' && parseFloat(currentWeight) > parseFloat(prevWeight);
                const prBadge = isCurPR ? `<span class="pr-badge">⚡ New PR!</span>` : '';

                let weightHtml = '';
                if (!isVacationMode) {
                    weightHtml = `
                    <div class="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-4 mb-6 border border-gray-100 dark:border-gray-700">
                        <div class="flex justify-between mb-2 flex-wrap gap-1">
                             <span class="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Lbs (One DB)</span>
                             <div class="flex items-center gap-2">
                                 <span id="pr-badge-${ex.name}">${prBadge}</span>
                                 <span class="text-[10px] font-bold ${prevColorClass} uppercase tracking-wider">Prev: ${prevWeight || '--'}</span>
                             </div>
                        </div>
                        <div class="flex items-center justify-between gap-4">
                            <button onclick="adjustWeight('${ex.name}', -1)" class="stepper-btn btn-gray tap-scale text-xl">－</button>
                            <input type="number" id="w-disp-${ex.name}" value="${currentWeight}" readonly
                                class="bg-transparent text-center font-black text-4xl text-gray-900 dark:text-white outline-none w-24">
                            <button onclick="adjustWeight('${ex.name}', 1)" class="stepper-btn btn-gray tap-scale text-xl">＋</button>
                        </div>
                    </div>`;
                }

                // Progress bar
                const pct = ex.sets > 0 ? Math.round((completedSets / ex.sets) * 100) : 0;
                const progressBar = `<div class="ex-progress-bar"><div class="ex-progress-fill" id="prog-${ex.name}" style="width:${pct}%"></div></div>`;

                // Saved notes
                const savedNote = localStorage.getItem(`N-${ex.name}`) || '';
                const notesHtml = `
                    <div id="notes-wrap-${ex.name}" class="${savedNote ? '' : 'hidden'} mt-4">
                        <textarea
                            class="notes-area"
                            placeholder="Form notes, cues..."
                            oninput="saveNote('${ex.name}', this.value)">${savedNote}</textarea>
                    </div>`;

                card.innerHTML = `
                    <div class="flex justify-between items-center mb-2">
                        <div class="flex items-center gap-2 cursor-pointer group" onclick="openVisual('${ex.name}', '${ex.img}', '${ex.search || ex.name}')">
                            <h3 class="font-black text-xl text-gray-900 dark:text-white uppercase tracking-tight group-hover:text-blue-500 transition-colors underline decoration-2 decoration-gray-200 dark:decoration-gray-700 underline-offset-4 group-hover:decoration-blue-500">${ex.name}</h3>
                            <i class="ph-bold ph-image text-gray-300 group-hover:text-blue-500 transition-colors"></i>
                        </div>
                        <div class="flex items-center gap-2">
                            <button onclick="toggleNotes('${ex.name}')" class="p-2 rounded-lg text-gray-400 dark:text-gray-500 hover:text-yellow-500 dark:hover:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-colors" title="Notes">
                                <i class="ph-bold ph-note-pencil text-lg"></i>
                            </button>
                            ${!isVacationMode ? `<button onclick="deload('${ex.name}')" class="text-[10px] bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-3 py-2 rounded-lg font-bold uppercase tracking-wide tap-scale">Deload</button>` : ''}
                        </div>
                    </div>
                    <div class="flex justify-between items-center mb-3">
                         <p class="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Goal: ${ex.range}</p>
                         <p class="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest" id="setcount-${ex.name}">${completedSets}/${ex.sets} sets</p>
                    </div>

                    ${progressBar}
                    ${weightHtml}

                    <div class="space-y-1">${setsHtml}</div>
                    ${notesHtml}`;
                container.appendChild(card);
            });

            const btnText = isVacationMode ? "Complete Session (No Sync)" : "Complete & Sync";
            const btnColor = isVacationMode ? "bg-blue-600 dark:bg-blue-600" : "bg-gray-900 dark:bg-red-600";

            const saveWrapper = document.createElement('div');
            saveWrapper.className = "mt-8 mb-12";
            saveWrapper.innerHTML = `<button onclick="saveWholeWorkout('${day}')" id="save-btn" class="w-full py-6 ${btnColor} text-white rounded-3xl shadow-xl flex items-center justify-center gap-3 tap-scale transition-all"><span class="font-black uppercase tracking-[0.15em] text-sm" id="save-text">${btnText}</span><i class="ph-bold ${isVacationMode ? 'ph-check' : 'ph-cloud-arrow-up'} text-xl" id="save-icon"></i></button>`;
            container.appendChild(saveWrapper);
        }

        // --- IMAGE MODAL LOGIC ---
        let currentSearchTerm = '';

        function openVisual(name, imgSrc, searchTerm) {
            currentExerciseName = name;
            currentSearchTerm = searchTerm || name;
            const modal = document.getElementById('visual-modal');
            const img = document.getElementById('visual-img');
            const container = document.getElementById('visual-container');
            const title = document.getElementById('modal-title');

            title.innerText = name;
            img.style.display = 'none';
            if (container) {
                container.style.display = 'none';
                container.innerHTML = '';

                if (typeof exerciseSVGs !== 'undefined' && exerciseSVGs[name]) {
                    container.innerHTML = exerciseSVGs[name];
                    container.style.display = 'flex';
                    modal.classList.remove('hidden');
                    modal.classList.add('flex');
                    return;
                }
            }

            title.innerText = name;
            // Show loading state
            img.style.display = 'none';
            const parentContainer = img.parentElement;
            let loader = parentContainer.querySelector('.img-loader');
            if (!loader) {
                loader = document.createElement('div');
                loader.className = 'img-loader';
                loader.innerHTML = '<div class="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>';
                loader.style.cssText = 'display:flex;align-items:center;justify-content:center;position:absolute;inset:0;';
                parentContainer.appendChild(loader);
            }
            loader.style.display = 'flex';

            // Try primary image
            if (imgSrc && imgSrc.length > 5) {
                img.onload = function () {
                    loader.style.display = 'none';
                    img.style.display = 'block';
                };
                img.src = imgSrc;
            } else {
                tryWgerSearch(img, loader);
            }

            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        async function tryWgerSearch(img, loader) {
            try {
                const res = await fetch(`https://wger.de/api/v2/exercise/search/?term=${encodeURIComponent(currentSearchTerm)}&language=english&format=json`);
                const data = await res.json();
                if (data.suggestions && data.suggestions.length > 0) {
                    const exerciseId = data.suggestions[0].data.id;
                    const imgRes = await fetch(`https://wger.de/api/v2/exerciseimage/?exercise_base=${exerciseId}&format=json`);
                    const imgData = await imgRes.json();
                    if (imgData.results && imgData.results.length > 0) {
                        img.onload = function () { loader.style.display = 'none'; img.style.display = 'block'; };
                        img.onerror = function () {
                            img.onerror = null;
                            showPlaceholder(img, loader);
                        };
                        img.src = imgData.results[0].image;
                        return;
                    }
                }
            } catch (e) { /* API failed, use placeholder */ }
            showPlaceholder(img, loader);
        }

        function showPlaceholder(img, loader) {
            if (loader) loader.style.display = 'none';
            img.style.display = 'block';
            img.src = `https://placehold.co/800x600/e2e8f0/475569?text=${encodeURIComponent(currentExerciseName)}`;
        }

        function handleImageError(imgEl) {
            imgEl.onerror = null;
            const loader = imgEl.parentElement.querySelector('.img-loader');
            tryWgerSearch(imgEl, loader || { style: { display: 'none' } });
        }

        function closeModal() {
            const modal = document.getElementById('visual-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        function searchGoogleImages() {
            const query = encodeURIComponent(currentExerciseName + " exercise form");
            window.open(`https://www.google.com/search?tbm=isch&q=${query}`, '_blank');
        }

        function quickHit(name, setIdx, target) {
            localStorage.setItem(`R-${name}-S${setIdx}`, target);
            localStorage.setItem('Last-Activity-Date', new Date().toDateString());
            const container = document.getElementById(`ctrl-${name}-${setIdx}`);

            container.innerHTML = `
                <div class="flex items-center gap-3 w-full justify-end fade-in">
                    <button onclick="adjustRep('${name}', ${setIdx}, -1)" class="stepper-btn btn-gray tap-scale">－</button>
                    <span id="disp-${name}-${setIdx}" class="text-2xl font-black text-gray-900 dark:text-white w-10 text-center">${target}</span>
                    <button onclick="adjustRep('${name}', ${setIdx}, 1)" class="stepper-btn btn-gray tap-scale">＋</button>
                </div>
            `;
            // Update progress bar + set counter live
            const list = isVacationMode ? vacationWorkouts['FullBody'] : (gymWorkouts[currentDay] || []);
            const exDef = list.find(e => e.name === name);
            if (exDef) updateProgressBar(name, exDef.sets);
            startTimer(defaultRestTime);
        }

        function adjustRep(name, setIdx, delta) {
            const key = `R-${name}-S${setIdx}`;
            let current = parseInt(localStorage.getItem(key) || '0');
            let newVal = current + delta;
            if (newVal < 0) newVal = 0;
            localStorage.setItem(key, newVal);
            localStorage.setItem('Last-Activity-Date', new Date().toDateString());
            document.getElementById(`disp-${name}-${setIdx}`).innerText = newVal;
        }

        function adjustWeight(name, direction) {
            let current = parseFloat(localStorage.getItem(`W-${name}`)) || 0;
            let idx = bowflexWeights.findIndex(w => w === current);
            if (idx === -1) idx = bowflexWeights.reduce((prevIdx, curr, i, arr) => Math.abs(curr - current) < Math.abs(arr[prevIdx] - current) ? i : prevIdx, 0);

            let newIdx = idx + direction;
            if (newIdx < 0) newIdx = 0;
            if (newIdx >= bowflexWeights.length) newIdx = bowflexWeights.length - 1;

            const newWeight = bowflexWeights[newIdx];
            localStorage.setItem(`W-${name}`, newWeight);
            document.getElementById(`w-disp-${name}`).value = newWeight;

            // Update PR badge live & Fire Confetti
            const prevWeight = cloudHistory[name] ? cloudHistory[name].weight : null;
            const badgeEl = document.getElementById(`pr-badge-${name}`);
            if (badgeEl && prevWeight !== null) {
                const isPR = newWeight > prevWeight;
                badgeEl.innerHTML = isPR ? `<span class="pr-badge">⚡ New PR!</span>` : '';
                // Confetti if stepping up into PR territory
                if (isPR && direction > 0) confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 }, colors: ['#fbbf24', '#f59e0b', '#d97706'], zIndex: 9999 });
            }
        }

        // ── Summary modal state ──
        let _pendingBatch = [], _pendingDay = '', _pendingList = [];

        async function saveWholeWorkout(day) {
            if (isSaving) return;
            const batch = [];
            const list = isVacationMode ? vacationWorkouts['FullBody'] : gymWorkouts[day];

            list.forEach(ex => {
                const weight = isVacationMode ? 0 : (parseFloat(localStorage.getItem(`W-${ex.name}`)) || 0);
                let totalReps = 0;
                for (let i = 1; i <= ex.sets; i++) totalReps += parseInt(localStorage.getItem(`R-${ex.name}-S${i}`) || 0);
                if (totalReps > 0) batch.push({ name: ex.name, weight, reps: totalReps, volume: totalReps * weight });
            });

            if (batch.length === 0) { showToast('No sets logged yet!', 'warn'); return; }

            // Build summary modal
            _pendingBatch = batch; _pendingDay = day; _pendingList = list;
            const totalVol = batch.reduce((s, e) => s + e.volume, 0);
            const totalSets = list.reduce((s, e) => {
                let c = 0; for (let i = 1; i <= e.sets; i++) if (localStorage.getItem(`R-${e.name}-S${i}`) !== null) c++;
                return s + c;
            }, 0);

            const bodyEl = document.getElementById('summary-body');
            bodyEl.innerHTML = `
                <div class="flex justify-between text-sm mb-2">
                    <span class="font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Total Sets</span>
                    <span class="font-black text-gray-900 dark:text-white">${totalSets}</span>
                </div>
                ${!isVacationMode ? `<div class="flex justify-between text-sm mb-4">
                    <span class="font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Total Volume</span>
                    <span class="font-black text-gray-900 dark:text-white">${totalVol.toLocaleString()} lbs</span>
                </div>` : ''}
                <div class="space-y-2 border-t border-gray-100 dark:border-gray-700 pt-4">
                    ${batch.map(e => `
                        <div class="flex justify-between text-xs">
                            <span class="font-bold text-gray-700 dark:text-gray-300 uppercase">${e.name}</span>
                            <span class="text-gray-500 dark:text-gray-400 font-bold">${e.reps} reps${!isVacationMode ? ' @ ' + e.weight + ' lbs' : ''}</span>
                        </div>`).join('')}
                </div>`;

            const confirmBtn = document.getElementById('summary-confirm-btn');
            confirmBtn.onclick = executeSave;
            if (isVacationMode) {
                confirmBtn.textContent = 'Complete ✓';
                confirmBtn.className = confirmBtn.className.replace('bg-gray-900', 'bg-blue-600').replace('dark:bg-red-600', 'dark:bg-blue-600');
            } else {
                confirmBtn.textContent = 'Sync ↑';
            }

            const modal = document.getElementById('summary-modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closeSummaryModal() {
            const modal = document.getElementById('summary-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        async function executeSave() {
            closeSummaryModal();
            const day = _pendingDay, list = _pendingList, batch = _pendingBatch;
            isSaving = true;
            const btn = document.getElementById('save-btn');
            if (btn) { btn.disabled = true; btn.classList.add('opacity-50'); }

            if (!isVacationMode) {
                if (btn) { document.getElementById('save-text').innerText = "UPLOADING..."; document.getElementById('save-icon').className = "spinner"; }
                try {
                    await fetch(SCRIPT_URL, { method: 'POST', mode: 'no-cors', body: JSON.stringify(batch) });
                    finishSave(day, list, btn, "SAVED");
                } catch (e) { isSaving = false; showToast('Error uploading. Try again.', 'error'); if (btn) { btn.disabled = false; btn.classList.remove('opacity-50'); } }
            } else {
                setTimeout(() => finishSave(day, list, btn, "COMPLETED"), 400);
            }
        }

        async function finishSave(day, list, btn, msg) {
            list.forEach(ex => {
                for (let i = 1; i <= ex.sets; i++) {
                    localStorage.removeItem(`R-${ex.name}-S${i}`);
                }
            });

            if (btn) {
                document.getElementById('save-text').innerText = msg;
                document.getElementById('save-icon').className = "ph-fill ph-check-circle";
                btn.classList.replace('bg-gray-900', 'bg-green-600');
                btn.classList.replace('dark:bg-red-600', 'bg-green-600');
                btn.classList.replace('bg-blue-600', 'bg-green-600');
                btn.classList.replace('dark:bg-blue-600', 'bg-green-600');
            }

            showToast(isVacationMode ? '✓ Session complete!' : '☁ Synced!', 'success');
            confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 }, zIndex: 9999, disableForReducedMotion: true });

            if (!isVacationMode) await init();
            setTimeout(() => setView(isVacationMode ? 'FullBody' : day), 1200);
            isSaving = false;
        }

        async function renderHistory(container) {
            container.innerHTML = `<div class="flex flex-col items-center justify-center py-20"><div class="w-12 h-12 border-[5px] border-red-600 border-t-transparent rounded-full animate-spin"></div></div>`;
            try {
                if (!cachedLogs) await init();
                container.innerHTML = `
                    <div class="flex items-center justify-between mb-8 px-2">
                        <h2 class="text-4xl font-black text-gray-900 dark:text-white uppercase italic tracking-tighter">Logs</h2>
                        <div class="flex items-center gap-3">
                            <button onclick="exportData()" class="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 tap-scale border border-gray-200 dark:border-gray-700" title="Backup Data"><i class="ph-bold ph-download-simple"></i></button>
                            <label class="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 tap-scale cursor-pointer border border-gray-200 dark:border-gray-700" title="Restore Data">
                                <i class="ph-bold ph-upload-simple"></i>
                                <input type="file" id="import-file" class="hidden" accept=".json" onchange="importData(event)">
                            </label>
                            <select id="log-filter" onchange="renderFilteredCharts()" class="bg-white dark:bg-darkcard dark:text-gray-100 border border-gray-200 dark:border-gray-700 text-[10px] font-bold uppercase rounded-xl px-3 py-2.5 outline-none text-gray-700">
                                <option value="All">All Logs</option>
                                <option value="Push" ${lastWorkoutMode === 'Push' ? 'selected' : ''}>Push</option>
                                <option value="Pull" ${lastWorkoutMode === 'Pull' ? 'selected' : ''}>Pull</option>
                                <option value="Legs" ${lastWorkoutMode === 'Legs' ? 'selected' : ''}>Legs</option>
                            </select>
                        </div>
                    </div>
                    <div id="charts-wrapper" class="space-y-6"></div>
                `;
                renderFilteredCharts();
            } catch (e) { container.innerHTML = "Error loading history."; }
        }

        function exportData() {
            const data = JSON.stringify(localStorage);
            const blob = new Blob([data], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `ppl-pro-backup-${new Date().toISOString().split('T')[0]}.json`;
            a.click();
            URL.revokeObjectURL(url);
            showToast('Backup downloaded!', 'success');
        }

        function importData(event) {
            const file = event.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    Object.keys(data).forEach(k => localStorage.setItem(k, data[k]));
                    showToast('Data restored! Reloading...', 'success');
                    setTimeout(() => location.reload(), 1500);
                } catch (err) {
                    showToast('Invalid backup file', 'error');
                }
            };
            reader.readAsText(file);
        }

        function renderFilteredCharts() {
            const wrapper = document.getElementById('charts-wrapper');
            const filter = document.getElementById('log-filter').value;
            wrapper.innerHTML = '';

            const isDark = document.documentElement.classList.contains('dark');
            const chartColor = isDark ? '#f87171' : '#dc2626';
            const gridColor = isDark ? '#334155' : '#f3f4f6';

            const groupedByEx = {};
            cachedLogs.forEach(row => {
                const date = new Date(row[0]), name = row[1], weight = parseFloat(row[2]);
                if (!groupedByEx[name]) groupedByEx[name] = [];
                groupedByEx[name].push({ date, weight });
            });
            const sortedKeys = Object.keys(groupedByEx).sort();

            let count = 0;
            sortedKeys.forEach((exName, index) => {
                const exDay = exerciseCategoryMap[exName];
                if (filter !== "All" && exDay !== filter) return;
                count++;
                const data = groupedByEx[exName].sort((a, b) => a.date - b.date);
                const pr = Math.max(...data.map(d => d.weight));
                const card = document.createElement('div');
                card.className = "bg-white dark:bg-darkcard rounded-[2rem] p-6 border border-gray-100 dark:border-gray-700 shadow-sm fade-in";
                card.innerHTML = `
                    <div class="flex justify-between items-center mb-6">
                        <div>
                            <h3 class="font-black text-gray-900 dark:text-white uppercase text-lg tracking-tight">${exName}</h3>
                            <p class="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider mt-1">${data.length} entries</p>
                        </div>
                        <div class="text-right"><span class="bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest border border-red-100 dark:border-red-900/50">Best: ${pr}</span></div>
                    </div>
                    <div class="h-48 w-full"><canvas id="chart-${index}"></canvas></div>`;
                wrapper.appendChild(card);

                setTimeout(() => {
                    const ctx = document.getElementById(`chart-${index}`).getContext('2d');
                    new Chart(ctx, {
                        type: 'line',
                        data: {
                            labels: data.map(d => d.date.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' })),
                            datasets: [{
                                data: data.map(d => d.weight),
                                borderColor: chartColor,
                                borderWidth: 3,
                                pointRadius: 4,
                                pointBackgroundColor: isDark ? '#1e293b' : '#fff',
                                tension: 0.3,
                                fill: true,
                                backgroundColor: isDark ? 'rgba(248, 113, 113, 0.1)' : 'rgba(220, 38, 38, 0.03)'
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: { legend: { display: false } },
                            scales: {
                                y: { grid: { color: gridColor }, border: { display: false }, ticks: { color: isDark ? '#94a3b8' : '#6b7280' } },
                                x: { grid: { display: false }, border: { display: false }, ticks: { color: isDark ? '#94a3b8' : '#6b7280' } }
                            }
                        }
                    });
                }, 50);
            });
            if (count === 0) wrapper.innerHTML = '<p class="text-center text-gray-400 dark:text-gray-600 text-sm font-bold py-10 uppercase tracking-widest">No logs found.</p>';
        }

        function deload(name) {
            let cur = parseFloat(localStorage.getItem(`W-${name}`)) || 0;
            if (cur <= 5) return;
            let target = cur * 0.9;
            let closest = bowflexWeights.reduce((p, c) => Math.abs(c - target) < Math.abs(p - target) ? c : p);
            showConfirm(`Deload ${name} to ${closest} lbs?`, () => {
                localStorage.setItem(`W-${name}`, closest);
                for (let i = 1; i <= 6; i++) localStorage.removeItem(`R-${name}-S${i}`);
                showToast(`Deloaded to ${closest} lbs`, 'success');
                setView(currentDay);
            });
        }

        function setRestTime(seconds) {
            defaultRestTime = seconds;
            const clickedBtn = document.getElementById(`t-${seconds}`);
            if (clickedBtn && clickedBtn.classList.contains('timer-selected')) {
                resetTimer();
                return;
            }
            document.querySelectorAll('.timer-btn').forEach(btn => {
                btn.classList.remove('timer-selected');
                btn.classList.add('timer-inactive');
            });
            if (clickedBtn) {
                clickedBtn.classList.remove('timer-inactive');
                clickedBtn.classList.add('timer-selected');
            }
            if (timerRunning) startTimer(seconds);
        }

        // ── Ring timer helpers ──
        const RING_CIRCUMFERENCE = 2 * Math.PI * 30; // r=30 → ~188.5
        let ringDuration = 90;

        function updateRing(left) {
            const fill = document.getElementById('ring-fill');
            const txt = document.getElementById('timer-text');
            if (!fill || !txt) return;
            const frac = Math.max(0, left / ringDuration);
            fill.style.strokeDashoffset = RING_CIRCUMFERENCE * (1 - frac);
            // Turn red in final 10 seconds
            const urgent = left <= 10 && left > 0;
            fill.style.stroke = urgent ? '#ef4444' : '#dc2626';
            const m = Math.floor(Math.max(0, left) / 60);
            const s = Math.max(0, left) % 60;
            txt.textContent = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
            txt.style.color = urgent ? '#ef4444' : '';
        }

        function adjustTimer(sec) {
            if (!timerRunning) return;
            endTime += sec * 1000;
            updateTimer();
        }

        function resetRing() {
            const fill = document.getElementById('ring-fill');
            const txt = document.getElementById('timer-text');
            if (fill) { fill.style.strokeDashoffset = RING_CIRCUMFERENCE; fill.style.stroke = '#dc2626'; }
            if (txt) { txt.textContent = '00:00'; txt.style.color = ''; }
        }

        function startTimer(s) {
            clearInterval(timerInterval);
            ringDuration = s;
            endTime = Date.now() + s * 1000;
            timerRunning = true;
            timerPaused = false;
            if (audioCtx.state === 'suspended') audioCtx.resume();
            timerInterval = setInterval(updateTimer, 200);
            updateTimer();
        }

        function updateTimer() {
            if (!timerRunning || timerPaused) return;
            const left = Math.round((endTime - Date.now()) / 1000);
            timeLeft = left;
            if (left < 0) {
                resetTimer();
                playBeep();
                return;
            }
            updateRing(left);
        }

        function toggleTimerState() {
            if (!timerRunning && timeLeft === 0) return;
            if (timerPaused) {
                timerPaused = false;
                endTime = Date.now() + timeLeft * 1000;
            } else {
                timerPaused = true;
            }
        }

        function resetTimer() {
            clearInterval(timerInterval);
            timerRunning = false;
            timerPaused = false;
            timeLeft = 0;
            resetRing();
            document.querySelectorAll('.timer-btn').forEach(btn => {
                btn.classList.remove('timer-selected');
                btn.classList.add('timer-inactive');
            });
        }

        // ── Notes ──
        function toggleNotes(name) {
            const wrap = document.getElementById(`notes-wrap-${name}`);
            if (!wrap) return;
            wrap.classList.toggle('hidden');
            if (!wrap.classList.contains('hidden')) wrap.querySelector('textarea').focus();
        }

        function saveNote(name, val) {
            if (val.trim()) localStorage.setItem(`N-${name}`, val);
            else localStorage.removeItem(`N-${name}`);
        }

        // ── Progress bar update (called after quickHit) ──
        function updateProgressBar(exName, totalSets) {
            let done = 0;
            for (let i = 1; i <= totalSets; i++) if (localStorage.getItem(`R-${exName}-S${i}`) !== null) done++;
            const pct = totalSets > 0 ? Math.round((done / totalSets) * 100) : 0;
            const bar = document.getElementById(`prog-${exName}`);
            if (bar) bar.style.width = pct + '%';
            const cnt = document.getElementById(`setcount-${exName}`);
            if (cnt) cnt.textContent = `${done}/${totalSets} sets`;
        }

        // ── Toast notification ──
        let _toastTimer = null;
        function showToast(msg, type = 'success') {
            const toast = document.getElementById('app-toast');
            const inner = document.getElementById('toast-inner');
            const colors = {
                success: 'bg-green-600 text-white',
                warn: 'bg-amber-500 text-white',
                error: 'bg-red-600 text-white'
            };
            inner.className = `px-5 py-3 rounded-2xl text-sm font-bold shadow-xl ${colors[type] || colors.success}`;
            inner.textContent = msg;
            toast.classList.add('show');
            clearTimeout(_toastTimer);
            _toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
        }

        // ── Styled confirm dialog ──
        let _confirmCallback = null;
        function showConfirm(msg, onConfirm) {
            document.getElementById('confirm-msg').textContent = msg;
            _confirmCallback = onConfirm;
            const d = document.getElementById('confirm-dialog');
            d.classList.remove('hidden');
            d.classList.add('flex');
        }
        function confirmCancel() {
            const d = document.getElementById('confirm-dialog');
            d.classList.add('hidden');
            d.classList.remove('flex');
            _confirmCallback = null;
        }
        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('confirm-ok-btn').addEventListener('click', () => {
                confirmCancel();
                if (_confirmCallback) _confirmCallback();
            });
        });

        init();
