# Token Cart Tycoon demo video

## Ready-to-narrate cut

- **Video:** `output/token-cart-tycoon-demo-ready-for-voice.mp4`
- **Resolution:** 1280 × 720
- **Duration:** 2:37.6
- **Audio:** intentionally silent so the entrant can add an original narration
- **Music:** none; this avoids copyright and keeps the explanation clear

The cut uses real gameplay from the public ChatGPT Sites deployment. It demonstrates one healthy capacity-planning shift followed by one intentionally overloaded shift.

## Narration script

The timecodes are forgiving. Speak conversationally; do not rush to land every sentence on an exact frame.

### 0:00–0:15 — Hook

Hi, I’m Dorothy, and this is Token Cart Tycoon: a cozy-chaotic education game about surviving the first thirty days of an AI startup, starting from a hot dog cart.

### 0:15–0:31 — Starting resources

You start with five subscribers, five hundred dollars, a tiny compute budget, and seven competing resources: cash, users, compute, trust, hype, product quality, and founder sanity.

### 0:31–0:48 — Read the forecast

Every morning, The Token Times gives a market or technical signal. Today, expected demand is fourteen requests, but my safe capacity is only eleven. That gap means slow service, dropped requests, churn, and damaged trust.

### 0:48–1:05 — Configure the stack

I can adjust price and model tier, buy infrastructure, allow expensive burst compute, or choose one founder focus. I add RAM and a GPU slice, lifting safe capacity to eighteen.

### 1:05–1:22 — Resolve a healthy shift

Then I tune infrastructure and open the app. The forecast becomes an operations report: thirteen requests, all thirteen served, zero dropped, and a small positive margin.

### 1:22–1:37 — Reconcile forecast and actual

The game makes success measurable. I can compare forecast to actual demand, capacity to served requests, and expected signups to joins—plus latency, revenue, costs, churn, and incidents.

### 1:37–1:54 — Make a risky model decision

Day two demonstrates the tradeoff. I switch to the Deluxe Reasoner. Output quality improves, but each request costs more compute, so safe capacity falls from eighteen to eleven.

### 1:54–2:09 — Chase hype

Then I make the classic startup mistake: I market before verifying capacity. Demand jumps to twenty-two requests, but the stack can only serve eleven.

### 2:09–2:29 — Show the educational consequence

Half the requests are dropped. Trust falls, users churn, and the lesson is immediate: demand without capacity becomes downtime and lost revenue. Thirty days of choices can end in rankings like Sustainable Startup, GPU Goblin, or Hype Bubble Casualty.

### 2:29–2:38 — Human and GPT-5.6 contributions

I made the core concept, education goals, gameplay rules, and final decisions. Codex with GPT-5.6 Sol Medium helped design and implement the simulation, interface, testing, and deployment. Token Cart Tycoon is free, open source, and playable now.

## Recording the voice track

1. Open the silent MP4 and this script side by side.
2. Use Windows Sound Recorder, a phone voice memo, or any microphone recorder.
3. Begin speaking immediately after pressing record; a small natural pause is fine.
4. Save the recording as WAV, M4A, or MP3.
5. Attach it with:

```powershell
.\scriptsttach-demo-narration.ps1 -Narration "C:\path	o\your-recording.m4a"
```

The finished file will be `output/token-cart-tycoon-demo-final.mp4`.

## Final review before YouTube

- Confirm the finished runtime remains under three minutes.
- Listen once with headphones and once through laptop speakers.
- Confirm “Codex with GPT-5.6 Sol Medium” is audible.
- Upload as Public or Unlisted only if Devpost accepts Unlisted; Public is safest.
- Add the YouTube URL to `docs/submission-notes.md`.
