module.exports = {
  categoryHref: "lifestyle.html",
  categoryLabel: "Lifestyle Tools",
  slug: "sleep-opportunity-calculator",
  title: "Sleep Opportunity Calculator | Time In Bed Vs Sleep Time",
  description: "Estimate sleep opportunity from time in bed, sleep latency, and awake time. Compare time in bed with likely sleep time.",
  h1: "Sleep Opportunity Calculator",
  hero: "Estimate how much sleep opportunity your schedule actually gives after sleep latency and awake time are considered.",
  heroHighlights: ["Time in bed vs sleep time", "Latency included", "Pairs with sleep debt"],
  schemaName: "Privacy-First Sleep Opportunity Calculator",
  schemaDescription: "A browser-side calculator that estimates sleep opportunity from time in bed, sleep latency, and wake-after-sleep time.",
  lastUpdated: "July 27, 2026",
  buttonText: "Calculate Sleep Opportunity",
  resultHtml: `
            <div class="result-val"><span id="calc-output">0</span><span class="result-unit">hours</span></div>
            <div class="result-status" id="calc-status">Estimated Sleep Opportunity</div>
            <p class="result-desc" id="calc-desc"></p>
            <div class="suggestion-box"><h4>Schedule Note</h4><p id="calc-suggestion"></p></div>`,
  controlsHtml: `
        <div class="input-row">
            <div class="input-group"><label for="input_time_bed">Time In Bed</label><div class="input-wrapper"><input type="number" id="input_time_bed" value="8" min="1" max="14" step="0.25"><span class="unit-badge">hours</span></div></div>
            <div class="input-group"><label for="input_latency">Time To Fall Asleep</label><div class="input-wrapper"><input type="number" id="input_latency" value="20" min="0" max="180" step="5"><span class="unit-badge">min</span></div></div>
        </div>
        <div class="input-group"><label for="input_awake">Estimated Awake Time During Night</label><div class="input-wrapper"><input type="number" id="input_awake" value="20" min="0" max="240" step="5"><span class="unit-badge">min</span></div></div>`,
  relatedTitle: "Review Sleep Further",
  related: [
    { href: "https://toolsquark.com/tools/sleep-debt-calculator.html", title: "Sleep Debt Calculator", description: "Compare estimated sleep time with your target across several nights.", action: "Estimate Debt" },
    { href: "https://toolsquark.com/tools/sleep-efficiency-calculator.html", title: "Sleep Efficiency Calculator", description: "Compare time asleep with time in bed as a percentage.", action: "Check Efficiency" },
    { href: "https://toolsquark.com/tools/sleep-calculator.html", title: "Sleep Schedule Calculator", description: "Plan a bedtime or wake time after estimating opportunity.", action: "Plan Schedule" }
  ],
  references: [
    { title: "About Sleep", publisher: "Centers for Disease Control and Prevention", href: "https://www.cdc.gov/sleep/about/index.html" },
    { title: "Healthy Sleep Habits", publisher: "National Heart, Lung, and Blood Institute", href: "https://www.nhlbi.nih.gov/health/sleep-deprivation/healthy-sleep-habits" }
  ],
  faq: [
    { question: "What is sleep opportunity?", answer: "Sleep opportunity is the amount of time your schedule makes available for sleep after accounting for time to fall asleep and awake time during the night." },
    { question: "Is time in bed the same as sleep time?", answer: "No. Time in bed includes time spent trying to fall asleep and time awake during the night. Actual sleep time is usually lower." },
    { question: "Can this diagnose insomnia?", answer: "No. This is an educational schedule estimate. Persistent difficulty falling asleep, staying asleep, or daytime impairment deserves qualified support." }
  ],
  contentSections: [
    { title: "What This Calculator Estimates", body: `<p>This calculator separates time in bed from likely sleep time. It helps explain why an eight-hour window may not produce eight hours of sleep.</p>` },
    { title: "Formula Used", body: `<div class="formula-box">Estimated sleep opportunity = time in bed - sleep latency - awake time during the night</div><p>Latency and awake time are converted from minutes to hours before subtraction.</p>` },
    { title: "How To Use The Result", body: `<p>If the result is below your sleep target, the schedule may need a longer window, shorter wind-down delay, fewer awakenings, or a more realistic wake time. Pair this with sleep debt and sleep efficiency tools for context.</p>` }
  ],
  methodology: "This tool subtracts entered sleep latency and awake time from total time in bed to estimate available sleep opportunity.",
  disclaimer: "Sleep opportunity is an educational schedule estimate and does not diagnose sleep disorders, insomnia, or sleep quality.",
  script: `
function formatHours(value){const h=Math.floor(value);const m=Math.round((value-h)*60);return h+'h '+m+'m';}
function calculateNow(){
  const timeBed=Number(document.getElementById('input_time_bed').value);
  const latency=Number(document.getElementById('input_latency').value);
  const awake=Number(document.getElementById('input_awake').value);
  if(!Number.isFinite(timeBed)||!Number.isFinite(latency)||!Number.isFinite(awake)||timeBed<=0||latency<0||awake<0){alert('Please enter valid sleep timing values.');return;}
  const opportunity=Math.max(0,timeBed-(latency+awake)/60);
  let status='Adequate Sleep Window';
  let suggestion='Your schedule provides a reasonable sleep window if the estimate matches your real nights.';
  if(opportunity<7){status='Short Sleep Opportunity';suggestion='Your available sleep time is below many adult sleep targets. Consider whether bedtime, wake time, latency, or awakenings can be adjusted.';}
  if(opportunity>=7&&opportunity<8){status='Borderline Sleep Opportunity';suggestion='This may be enough for some adults, but small delays or awakenings can create a deficit. Watch daytime alertness and consistency.';}
  document.getElementById('result-area').style.display='block';
  document.getElementById('calc-output').innerText=opportunity.toFixed(1);
  document.getElementById('calc-status').innerText=status;
  document.getElementById('calc-desc').innerText='Time in bed: '+formatHours(timeBed)+'. Latency plus awake time: '+(latency+awake)+' minutes. Estimated sleep opportunity: '+formatHours(opportunity)+'.';
  document.getElementById('calc-suggestion').innerText=suggestion;
  document.getElementById('result-area').scrollIntoView({behavior:'smooth',block:'nearest'});
}`
};
