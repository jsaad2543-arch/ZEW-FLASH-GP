const askBtn = document.getElementById('askBtn');
const autoInsightBtn = document.getElementById('autoInsightBtn');
const input = document.getElementById('questionInput');
const answerBox = document.getElementById('answerBox');
const tabs = document.querySelectorAll('.tab');
const installBtn = document.getElementById('installBtn');
const installStatus = document.getElementById('installStatus');

let currentMode = 'qa';
let deferredPrompt = null;

const autoInsights = [
  'Auto Insight: Turn one topic into 10 shorts + 1 long video with reusable script blocks.',
  'Auto Insight: Create 5 thumbnail image prompts with bold contrast and cinematic lighting.',
  'Auto Insight: Batch your content: research → script → visuals → publish calendar.'
];

function buildAnswer(question) {
  const q = question.trim();
  if (!q) return 'Please type a request first.';

  if (currentMode === 'video') {
    return [
      'VIDEO PLAN',
      `Topic: ${q}`,
      '1) Hook (0:00-0:45)',
      '2) Main Chapters (5-8 blocks)',
      '3) Mid-video engagement prompts',
      '4) Strong CTA + recap',
      '5) Export script + shot list'
    ].join('\n');
  }

  if (currentMode === 'image') {
    return [
      'IMAGE PROMPT',
      `"${q}", ultra detailed, cinematic composition, dramatic lighting, 8k, realistic texture, 35mm lens, depth of field`
    ].join('\n');
  }

  return `ANSWER\n${q}\n\nAPNA AI suggestion: split your request into goal, tools, timeline, and final output.`;
}

function setMode(mode) {
  currentMode = mode;
  tabs.forEach((tab) => {
    const isActive = tab.dataset.mode === mode;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });
}

tabs.forEach((tab) => tab.addEventListener('click', () => setMode(tab.dataset.mode)));
askBtn.addEventListener('click', () => {
  answerBox.textContent = buildAnswer(input.value);
});
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') answerBox.textContent = buildAnswer(input.value);
});
autoInsightBtn.addEventListener('click', () => {
  answerBox.textContent = autoInsights[Math.floor(Math.random() * autoInsights.length)];
});

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  installBtn.hidden = false;
  installStatus.textContent = 'Install is available for this device/browser.';
});

installBtn.addEventListener('click', async () => {
  if (!deferredPrompt) {
    installStatus.textContent = 'Install prompt not ready yet. Use browser menu: Add to Home Screen.';
    return;
  }

  deferredPrompt.prompt();
  const choice = await deferredPrompt.userChoice;
  installStatus.textContent =
    choice.outcome === 'accepted' ? 'App install started successfully.' : 'Install canceled.';
  deferredPrompt = null;
  installBtn.hidden = true;
});

window.addEventListener('appinstalled', () => {
  installStatus.textContent = 'APNA AI installed. Open from your apps list.';
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      await navigator.serviceWorker.register('./sw.js');
    } catch (error) {
      installStatus.textContent = 'Service worker registration failed.';
      console.error(error);
    }
  });
}
