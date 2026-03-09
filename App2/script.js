 const tabs = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('section');

    // tabs.forEach(btn => {
    //   btn.addEventListener('click', () => {
    //     tabs.forEach(b => b.classList.remove('active'));
    //     sections.forEach(s => s.classList.remove('active'));
    //     btn.classList.add('active');
    //     document.getElementById(btn.dataset.tab).classList.add('active');
    //     window.scrollTo({ top: 0, behavior: 'smooth' });
    //   });
    // });

    tabs.forEach(btn => {
  btn.addEventListener('click', () => {
    tabs.forEach(b => b.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

    const smileItems = [
        "😄 Doctor joke: Why are doctors so calm? Because they have a lot of patients.",
      "💖 Prescription: one deep breath, one sip of water, and one reminder that you are doing better than you think.",
      "🌸 You are not just treating patients — you are carrying hope into rooms that need it most.",
      "😄 Doctor joke: Why did the doctor carry a red pen? In case they needed to draw blood.",
      "✨ Even on your hardest days, your kindness still reaches people.",
      "🩺 You have the calm brain of a healer and the soft heart of a sunflower.",
      "😺 If stress had a face, this website would bop it with a plushie hammer.",
      "🌷 Compliment of the moment: You make competence look graceful.",
      "😂 Doctor joke: What do you call a doctor who fixes websites? A URL-ogist.",
      "💫 The world is lucky to have doctors like you — strong, caring, and quietly heroic.",
      "🐻 Friendly reminder: being tired does not mean being weak. It means you have been brave for too long without a break.",
      "🌈 You helped someone today. That matters more than your stress is letting you feel right now.",
      "🧁 If kindness had a lab report, yours would be off the charts.",



      "🌼 Tiny reminder: even superheroes need naps sometimes — doctors especially.",
"🩺 Somewhere today, someone feels better because you chose this path.",
"😸 If happiness had a prescription, your dosage would be: 2 smiles every hour.",
"🌷 You are proof that intelligence and kindness can exist in the same human.",
"😂 Doctor joke: Why did the doctor go to art school? To learn how to draw blood better.",
"💖 You may feel tired, but to someone you are the reason their world didn’t fall apart today.",
"🐼 Stress check: unclench your jaw, relax your shoulders, breathe slowly.",
"✨ You’re not just a doctor, you’re someone’s reassurance in a scary moment.",
"🍀 Good things are quietly preparing themselves for you.",
"🌸 Even flowers need time to bloom — so give yourself that time too.",
"🐣 If today was hard, tomorrow will still give you another chance to smile.",
"💫 You’re doing a job that requires both a brilliant mind and a golden heart.",
"🐰 Sending you a tiny bunny-sized hug through this website.",
"🌻 Reminder: healing others is powerful, but don’t forget to heal yourself too.",
"😂 Doctor joke: Why did the skeleton go to the doctor? Because he didn’t have the guts.",
"🍰 If motivation was cake, you deserve the biggest slice.",
"🌈 The world becomes a little safer because people like you exist.",
"🐱 Internet doctor advice: pet a cat, drink water, take a deep breath.",
"✨ Some heroes wear capes. The best ones wear white coats.",
"🌷 Your dedication is louder than your doubts.",
"😄 Doctor joke: What’s a doctor’s favorite type of music? Hip-pop.",
"💖 The fact that you care this much already makes you amazing.",
"🧸 If stress knocks, send this website to answer the door.",
"🌼 Take a moment. Breathe. You’re doing something truly meaningful.",
"🐻 The world may not say it enough, but thank you for being a doctor.",
"🌸 One smile for you, because you give thousands to others.",
"✨ The hospital lights may be bright, but your kindness shines brighter.",

"🌼 Reminder: even the strongest doctors deserve gentle days.",
"🩺 Your presence alone makes scary hospital rooms feel safer.",
"😺 If stress was a patient, you would already have cured it.",
"🌸 You are doing a job that many admire but few can handle.",
"😂 Doctor joke: Why did the doctor carry a thermometer? To check their patients' temper-ature.",
"💖 Somewhere a patient remembers your kindness more than your diagnosis.",
"🐻 Pause for 5 seconds. Breathe in. Breathe out. You're doing great.",
"✨ Healing hands, brilliant mind, and a heart that cares — that’s you.",
"🌷 Even the moon takes breaks during the day — you should too.",
"😄 Doctor joke: Why did the doctor bring a ladder to work? To reach new heights in care.",
"🐱 Internet advice: drink water, stretch a little, and smile.",
"💫 The world quietly depends on people like you.",
"🌻 Your dedication is stronger than your toughest day.",
"😂 Doctor joke: What kind of doctor fixes broken websites? A Web-MD.",
"🍀 Good things are coming your way — slowly but surely.",
"🐼 If tiredness had a cure, it would be a cozy nap and a warm hug.",
"🌈 Someone out there is grateful today because of you.",
"💖 Your compassion is your real superpower.",
"🐰 Sending you a tiny virtual hug from this page.",
"😄 Doctor joke: Why did the doctor go to the bakery? To get a dose of vitamin 'cake'.",
"✨ A gentle reminder that you matter too.",
"🌷 Even flowers need sunlight and rest to grow.",
"🐻 If today feels heavy, tomorrow will feel lighter.",
"💫 Your strength is quiet but powerful.",
"😂 Doctor joke: Why did the doctor carry a notebook? To keep track of their patients.",
"🌼 Take it slow. Great healers don’t rush their own hearts.",
"🐱 Small happiness tip: smile for no reason.",
"💖 Your kindness leaves invisible fingerprints on many lives.",
"🌸 You are stronger than the stress you feel.",
"😄 Doctor joke: What do you call a funny doctor? A laugh-ologist.",
"🌻 The world feels safer knowing doctors like you exist.",
"🐼 Take a tiny break — you deserve it.",
"✨ You don’t have to be perfect to be incredible.",
"🌷 A doctor’s heart is one of the bravest hearts.",
"😂 Doctor joke: Why did the doctor carry a flashlight? To check their patients’ bright ideas.",
"💫 Today may be hard, but your purpose is stronger.",
"🐰 Here is a reminder: you are appreciated.",
"🌈 Kindness like yours changes lives quietly.",
"💖 The world needs more people exactly like you.",
"😄 Doctor joke: What do doctors eat when they’re tired? Prescribed snacks.",
"🌼 Take a deep breath. Everything will be okay.",
"🐻 You’ve already made a difference today.",
"✨ Even superheroes need a recharge.",
"🌸 Your work saves more than lives — it saves hope.",
"🐱 Stretch your shoulders. Relax your face. Smile.",
"😂 Doctor joke: Why did the doctor sit on the clock? To be on time.",
"🌻 Your compassion is rare and beautiful.",
"💫 Never underestimate the power of your care.",
"🐼 If stress gets loud, let kindness be louder.",
"💖 The world is brighter because you chose to heal."


    ];

    const dailyMessages = [
      "Hello Shikuliii 🌸 Reminder: You are stronger than today’s stress.",
      "You helped someone today, even if the day felt messy.",
      "Rest is not laziness. Rest is part of healing too.",
      "Your patients may forget many things, but not how safe you made them feel.",
      "May your tea be warm, your mind softer, and your heart lighter today.",
      "You carry so much. Please remember to be gentle with yourself too.",
  "Hello 🌸 Just a gentle reminder that you are doing your best, and that is enough.",
  "Take a deep breath. Not everything has to be solved today.",
  "You are allowed to rest. Your worth is not measured by how busy you are.",
  "Even on quiet days, you are still moving forward.",
  "May today be a little kinder to your heart.",
  "You carry so much strength, even when you feel tired.",
  "A soft reminder 🌷 you deserve the same kindness you give others.",
  "It’s okay to slow down sometimes.",
  "Even the strongest people need gentle moments.",
  "You are doing better than your worries are telling you.",
  "May today bring you a small reason to smile.",
  "Take a pause, breathe slowly, and relax your shoulders.",
  "Your presence alone brings comfort to people around you.",
  "You don’t have to be perfect to be wonderful.",
  "Kind hearts like yours make the world softer.",
  "If today feels heavy, tomorrow will feel lighter.",
  "You are stronger than the stress you carry.",
  "Sending you a tiny moment of peace today.",
  "You matter more than you sometimes realize.",
  "Even clouds pass. Gentle days will come again.",
  "Take things one moment at a time.",
  "Your kindness quietly touches many lives.",
  "You deserve calm mornings and peaceful evenings.",
  "The world feels warmer because you exist.",
  "Pause for a moment 🌼 breathe in calm, breathe out worry.",
  "You are not alone in difficult days.",
  "Some days surviving is already a victory.",
  "Be patient with yourself today.",
  "Your heart deserves softness and care.",
  "Even the moon rests during the day.",
  "You are allowed to choose peace.",
  "May today hold a little bit of comfort for you.",
  "Your gentle nature is a beautiful strength.",
  "Take a small break — your mind will thank you.",
  "The world is grateful for people like you.",
  "Little reminder 🌸 you are enough.",
  "Let today be calm and kind to you.",
  "Your smile brightens more lives than you know.",
  "Take a deep breath. Everything doesn’t need to happen all at once.",
  "You deserve quiet moments of happiness.",
  "Be proud of how far you’ve come.",
  "There is strength in your softness.",
  "Even small peaceful moments are precious.",
  "You are worthy of love, calm, and happiness.",
  "May your heart feel lighter today.",
  "You bring warmth wherever you go.",
  "The world is a better place with you in it.",
  "Take care of yourself the way you care for others.",
  "Good things will slowly find their way to you.",
  "Today is another chance for gentle happiness."
];


    const smileBtn = document.getElementById('smileBtn');
    const smileBox = document.getElementById('smileBox');
    let smileClickCount = 0;
    const dailyMessageBox = document.getElementById('dailyMessageBox');
    const newReminderBtn = document.getElementById('newReminderBtn');

    function randomItem(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    function setDailyMessage(forceNew = false) {
      const today = new Date().toDateString();
      const savedDate = localStorage.getItem('doctorHappyWorldDate');
      let message = localStorage.getItem('doctorHappyWorldMessage');

      if (forceNew || !message || savedDate !== today) {
        message = randomItem(dailyMessages);
        localStorage.setItem('doctorHappyWorldDate', today);
        localStorage.setItem('doctorHappyWorldMessage', message);
      }
      dailyMessageBox.textContent = message;
    }

    setDailyMessage();

    smileBtn.addEventListener('click', (e) => {

  smileClickCount++;

  smileBox.textContent = randomItem(smileItems);

  if (smileClickCount > 0) {
    smileBtn.textContent = "Again Click for Another Smile 😄";
  }

  burstEmojis(e.currentTarget, ['💖', '✨', '🌸', '🩺', '🐾']);
});

    newReminderBtn.addEventListener('click', () => setDailyMessage(true));

    function burstEmojis(element, emojis) {
      const rect = element.getBoundingClientRect();
      for (let i = 0; i < 12; i++) {
        const span = document.createElement('span');
        span.className = 'emoji-burst';
        span.textContent = randomItem(emojis);
        span.style.left = rect.left + rect.width / 2 + 'px';
        span.style.top = rect.top + window.scrollY + rect.height / 2 + 'px';
        span.style.setProperty('--x', `${(Math.random() - 0.5) * 260}px`);
        span.style.setProperty('--y', `${(Math.random() - 1.1) * 220}px`);
        document.body.appendChild(span);
        setTimeout(() => span.remove(), 1600);
      }
    }

    const animalData = [
      { emoji: '🐶', text: 'This puppy has been officially assigned to your happiness department.' },
      { emoji: '🐼', text: 'A panda rolled in to remind you that soft and sleepy is a valid mood.' },
      { emoji: '😺', text: 'Tiny cat energy incoming: dramatic, adorable, and fully supportive of your nap.' },
      { emoji: '🦦', text: 'Otter says: hold hands with your peace and do not let go.' },
      { emoji: '🐰', text: 'This bunny believes your weekend should include snacks and zero stress.' },
      { emoji: '🦊', text: 'A baby fox has arrived with one diagnosis: you deserve gentleness.' },
      { emoji: '🐥', text: 'Small chick. Big emotional support.' },
      { emoji: '🐨', text: 'Koala prescription: cling only to cozy things tonight.' }
    ];

    const animalBtn = document.getElementById('animalBtn');
    let animalClickCount = 0;

    const animalBox = document.getElementById('animalBox');
    

    animalBtn.addEventListener('click', (e) => {

  animalClickCount++;

  const animal = randomItem(animalData);
  animalBox.innerHTML = `
    <div>
      <div class="animal-image">${animal.emoji}</div>
      <div class="animal-caption">${animal.text}</div>
    </div>
  `;

  if (animalClickCount > 0) {
    animalBtn.textContent = "Dubara Click karke dekh 😏";
  }

  burstEmojis(e.currentTarget, ['🐾', '💗', '✨', '🌼']);
});

    const petZone = document.getElementById('petZone');
    const pet = document.getElementById('pet');
    const petSpeech = document.getElementById('petSpeech');

    const petMessages = [
      'Hydrate please 💧',
      'Take a tiny break doctor 🩺',
      'You’re doing great! 🌸',
      'Stretch your shoulders ✨',
      'Prescription: one snack 🍪',
      'A nap would look good on you 😴'
    ];

    function movePet(x, y) {
  const rect = petZone.getBoundingClientRect();
  const petX = Math.max(20, Math.min(rect.width - 70, x - 24));
  const petY = Math.max(90, Math.min(rect.height - 80, y - 24));

  pet.style.left = petX + 'px';
  pet.style.top = petY + 'px';

  if (window.innerWidth <= 560) {
    pet.style.transform = 'translateX(0)';
  } else {
    pet.style.transform = '';
  }
}

if (window.innerWidth > 560) {
  petZone.addEventListener('mousemove', (e) => {
    const rect = petZone.getBoundingClientRect();
    movePet(e.clientX - rect.left, e.clientY - rect.top);
  });
} else {
  petZone.addEventListener('click', (e) => {
    const rect = petZone.getBoundingClientRect();
    movePet(e.clientX - rect.left, e.clientY - rect.top);
    petSpeech.textContent = randomItem(petMessages);
  });
}

    pet.addEventListener('click', () => {
  petSpeech.textContent = randomItem(petMessages);

  if (window.innerWidth <= 560) {
    pet.style.transform = 'scale(1.15)';
    setTimeout(() => {
      pet.style.transform = 'scale(1)';
    }, 220);
  } else {
    pet.style.transform = 'scale(1.18) rotate(-8deg)';
    setTimeout(() => {
      pet.style.transform = '';
    }, 220);
  }
});

    document.querySelectorAll('.letter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const letter = document.getElementById(`letter-${btn.dataset.letter}`);
        const isVisible = letter.style.display === 'block';
        letter.style.display = isVisible ? 'none' : 'block';
        btn.textContent = isVisible ? 'Open letter' : 'Close letter';
      });
    });

    const flowerEmojis = ['🌷', '🌼', '🌸', '🌻', '🪻', '🌺', '🌹'];
    const flowerNotes = [
      'This flower is for every patient you helped. 🌸',
      'A bloom for your courage on difficult days. 🌷',
      'A tiny thank-you from the universe. ✨',
      'This one grew from your kindness. 🌼',
      'A flower for the calm you bring into chaos. 💖',
      'A blossom for every time you kept going. 🌺'
    ];

    const plantBtn = document.getElementById('plantBtn');
    const clearGardenBtn = document.getElementById('clearGardenBtn');
    const gardenGround = document.getElementById('gardenGround');
    const gardenNote = document.getElementById('gardenNote');

    function saveGarden() {
      localStorage.setItem('doctorGarden', gardenGround.innerHTML);
    }

    function loadGarden() {
      const saved = localStorage.getItem('doctorGarden');
      if (saved) gardenGround.innerHTML = saved;
      attachFlowerListeners();
    }

    function attachFlowerListeners() {
      gardenGround.querySelectorAll('.flower').forEach(flower => {
        flower.onclick = () => {
          gardenNote.textContent = flower.dataset.note;
        };
      });
    }

    loadGarden();

    plantBtn.addEventListener('click', (e) => {
      const flower = document.createElement('div');
      const note = randomItem(flowerNotes);
      flower.className = 'flower';
      flower.textContent = randomItem(flowerEmojis);
      flower.dataset.note = note;
      flower.style.left = Math.random() * 88 + '%';
      flower.style.top = 30 + Math.random() * 60 + '%';
      flower.style.transform = `rotate(${Math.random() * 24 - 12}deg)`;
      flower.onclick = () => gardenNote.textContent = note;
      gardenGround.appendChild(flower);
      gardenNote.textContent = note;
      saveGarden();
      burstEmojis(e.currentTarget, ['🌼', '🌷', '✨', '💖']);
    });

    clearGardenBtn.addEventListener('click', () => {
      gardenGround.innerHTML = '';
      gardenNote.textContent = 'A fresh little patch of peace is ready for new flowers.';
      saveGarden();
    });

    const breathingCircle = document.getElementById('breathingCircle');
    const breathText = document.getElementById('breathText');
    const calmBox = document.getElementById('calmBox');
    const calmMessageBtn = document.getElementById('calmMessageBtn');
    const musicBtn = document.getElementById('musicBtn');

    const breathingSteps = [
      { label: 'Breathe In', text: 'Inhale slowly for 4 seconds 🌬️' },
      { label: 'Hold', text: 'Hold gently for 4 seconds 🤍' },
      { label: 'Breathe Out', text: 'Exhale softly for 6 seconds 🌙' },
      { label: 'Rest', text: 'Pause. Your body is doing its best. ✨' }
    ];

    let stepIndex = 0;
    setInterval(() => {
      stepIndex = (stepIndex + 1) % breathingSteps.length;
      breathingCircle.textContent = breathingSteps[stepIndex].label;
      breathText.textContent = breathingSteps[stepIndex].text;
    }, 2000);

    const calmMessages = [
  'Tonight, let yourself be held by quiet things — moonlight, breath, and softness.',
  'You do not have to carry the whole day into the night.',
  'Resting is also an act of courage for someone who is used to being strong.',
  'The sky is not asking anything from you. Just be here for a moment.',
  'You have done enough for today. You are allowed to be still now.',

  'Let the night gently take away the weight of the day.',
  'Nothing needs to be solved right now. Just breathe slowly.',
  'The stars are quiet tonight, reminding you to rest too.',
  'Give your mind permission to be calm.',
  'Close your eyes and allow the world to slow down.',
  'The night is a soft place to put your worries down.',
  'Even the busiest hearts deserve peaceful nights.',
  'You are safe in this quiet moment.',
  'Let every breath bring a little more calm.',
  'The day is finished — you carried it well.',
  'There is nothing you need to prove tonight.',
  'Wrap yourself in the silence of the evening.',
  'Your heart deserves this moment of peace.',
  'Let the darkness hold your thoughts gently.',
  'The night is simply asking you to rest.',
  'You are allowed to let go for a while.',
  'Quiet moments like this are small gifts.',
  'Your mind can rest now — tomorrow will come gently.',
  'Let your thoughts drift like clouds across a calm sky.',
  'Tonight is a good time to be kind to yourself.',
  'Everything can wait until morning.',
  'The world is softer when you allow yourself to pause.',
  'Let the calm of the night settle inside you.',
  'You don’t have to hold on to every worry.',
  'Rest your mind the way the earth rests under the stars.',
  'The night carries a quiet kind of healing.',
  'Your tired heart deserves gentleness.',
  'Let the silence around you become comfort.',
  'Breathe slowly. Nothing is rushing you now.',
  'Even the wind outside knows how to slow down.',
  'Tonight is simply for resting your soul.',
  'Peace can be found in small quiet breaths.',
  'The moonlight is enough company for this moment.',
  'Allow yourself to be still and safe tonight.',
  'Your thoughts can rest like leaves on calm water.',
  'The night is here to give your mind a gentle break.',
  'Let the quiet wrap around you like a warm blanket.',
  'You are allowed to feel calm right now.',
  'Nothing from today needs to follow you into sleep.',
  'Take this moment — it belongs only to you.'
];

    calmMessageBtn.addEventListener('click', () => {
      calmBox.textContent = randomItem(calmMessages);
    });

    let audioCtx;
    musicBtn.addEventListener('click', () => {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const now = audioCtx.currentTime;
      [523.25, 659.25, 783.99].forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.0001, now + i * 0.18);
        gain.gain.exponentialRampToValueAtTime(0.08, now + i * 0.18 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.18 + 0.7);
        osc.connect(gain).connect(audioCtx.destination);
        osc.start(now + i * 0.18);
        osc.stop(now + i * 0.18 + 0.72);
      });
    });

    const nightToggleBtn = document.getElementById('nightToggleBtn');
    nightToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('night');
      localStorage.setItem('doctorNightMode', document.body.classList.contains('night'));
    });

    if (localStorage.getItem('doctorNightMode') === 'true') {
      document.body.classList.add('night');
    }

    const floatingBg = document.getElementById('floatingBg');
    const floatIcons = ['💖', '✨', '🌸', '🩺', '🌙', '⭐', '🐾', '🌻', '🌈', '🎀', '🫧', '☀️'];
    for (let i = 0; i < 60; i++) {
      const span = document.createElement('span');
      span.textContent = randomItem(floatIcons);
      span.style.left = Math.random() * 100 + 'vw';
      span.style.animationDuration = 6 + Math.random() * 6 + 's';
      span.style.animationDelay = Math.random() * 14 + 's';
      span.style.fontSize = 14 + Math.random() * 18 + 'px';
      floatingBg.appendChild(span);
    }

    const stars = document.getElementById('stars');
    for (let i = 0; i < 55; i++) {
      const star = document.createElement('span');
      star.textContent = '✦';
      star.style.left = Math.random() * 100 + 'vw';
      star.style.top = Math.random() * 100 + 'vh';
      star.style.animationDelay = Math.random() * 4 + 's';
      star.style.fontSize = 8 + Math.random() * 10 + 'px';
      stars.appendChild(star);
    }

    const welcomeModal = document.getElementById('welcomeModal');
    document.getElementById('enterWorldBtn').addEventListener('click', () => {
      welcomeModal.classList.add('hidden');
    });