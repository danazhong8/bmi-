module.exports = {
  categoryHref: "health.html",
  categoryLabel: "Health Tools",
  slug: "weekly-weight-change-rate-calculator",
  title: "Weekly Weight Change Rate Calculator | lb Or kg Per Week",
  description: "Calculate weekly weight change rate from starting weight, ending weight, and number of days. Supports pounds or kilograms.",
  h1: "Weekly Weight Change Rate Calculator",
  hero: "Turn a multi-day weight change into a weekly rate so you can compare trends without overreacting to one weigh-in.",
  heroHighlights: ["lb/week or kg/week", "Multi-day trend", "Pairs with calorie calibration"],
  schemaName: "Privacy-First Weekly Weight Change Rate Calculator",
  schemaDescription: "A browser-side calculator that converts weight change over a period into weekly change rate.",
  lastUpdated: "July 27, 2026",
  buttonText: "Calculate Weekly Rate",
  resultHtml: `
            <div class="result-val"><span id="calc-output">0</span><span class="result-unit" id="rate-unit">lb/week</span></div>
            <div class="result-status" id="calc-status">Weekly Change Rate</div>
            <p class="result-desc" id="calc-desc"></p>
            <div class="suggestion-box"><h4>Trend Reading</h4><p id="calc-suggestion"></p></div>`,
  controlsHtml: `
        <div class="input-row">
            <div class="input-group"><label for="input_start">Starting Average Weight</label><div class="input-wrapper"><input type="number" id="input_start" value="180.5" min="30" max="700" step="0.1"><span class="unit-badge">weight</span></div></div>
            <div class="input-group"><label for="input_end">Ending Average Weight</label><div class="input-wrapper"><input type="number" id="input_end" value="178.9" min="30" max="700" step="0.1"><span class="unit-badge">weight</span></div></div>
        </div>
        <div class="input-row">
            <div class="input-group"><label for="input_unit">Weight Unit</label><div class="input-wrapper"><select id="input_unit"><option value="lb">pounds</option><option value="kg">kilograms</option></select></div></div>
            <div class="input-group"><label for="input_days">Days Between Averages</label><div class="input-wrapper"><input type="number" id="input_days" value="14" min="7" max="90" step="1"><span class="unit-badge">days</span></div></div>
        </div>`,
  relatedTitle: "Use The Weight Trend",
  related: [
    { href: "https://toolsquark.com/tools/weight-trend-smoothing-calculator.html", title: "Weight Trend Smoothing", description: "Compare two weekly averages before judging a plan.", action: "Smooth Trend" },
    { href: "https://toolsquark.com/tools/maintenance-calorie-calibration-calculator.html", title: "Maintenance Calorie Calibration", description: "Use trend rate to refine estimated maintenance calories.", action: "Calibrate" },
    { href: "https://toolsquark.com/tools/calorie-deficit-percentage-calculator.html", title: "Calorie Deficit Percentage", description: "Compare your planned deficit with maintenance calories.", action: "Check Deficit" }
  ],
  references: [
    { title: "Body Weight Planner", publisher: "National Institute of Diabetes and Digestive and Kidney Diseases", href: "https://www.niddk.nih.gov/bwp" }
  ],
  faq: [
    { question: "Why use weekly weight change rate?", answer: "A weekly rate makes different review windows comparable. A 1 lb change over 7 days and a 2 lb change over 14 days are both about 1 lb per week." },
    { question: "Should I use daily weigh-ins or averages?", answer: "Averages are usually better. Daily weigh-ins can move because of water, sodium, digestion, training soreness, and timing." },
    { question: "Does this calculate fat loss?", answer: "No. It calculates scale-weight change rate only. Scale weight includes water, glycogen, digestion, lean mass, and fat." }
  ],
  contentSections: [
    { title: "What This Calculator Measures", body: `<p>This calculator converts starting and ending average weights into a weekly change rate. It is designed for trend interpretation rather than emotional reaction to one scale reading.</p>` },
    { title: "Formula Used", body: `<div class="formula-box">Weekly change rate = (ending weight - starting weight) / days x 7</div><p>A negative value means the ending average is lower. A positive value means it is higher.</p>` },
    { title: "How To Use The Result", body: `<p>Compare the rate with your goal, hunger, training, sleep, and adherence. If the rate is surprising, check whether the review period included unusual sodium, travel, illness, menstrual-cycle shifts, or major activity changes.</p>` }
  ],
  methodology: "This tool subtracts starting average weight from ending average weight, divides by elapsed days, and multiplies by 7.",
  disclaimer: "Weight change rate is an educational trend signal and does not diagnose health status or body composition.",
  script: `
function calculateNow(){
  const start=Number(document.getElementById('input_start').value);
  const end=Number(document.getElementById('input_end').value);
  const unit=document.getElementById('input_unit').value;
  const days=Number(document.getElementById('input_days').value);
  if(!Number.isFinite(start)||!Number.isFinite(end)||!Number.isFinite(days)||start<=0||end<=0||days<7){alert('Please enter valid average weights and at least 7 days.');return;}
  const rate=(end-start)/days*7;
  let status='Mostly Stable Trend';
  let suggestion='This rate is small enough that normal scale noise may explain part of it. Compare several weeks before changing the plan.';
  if(rate<=-0.25){status='Downward Weekly Trend';suggestion='The trend is moving down. Review energy, hunger, training, and adherence before deciding whether the rate is appropriate.';}
  if(rate>=0.25){status='Upward Weekly Trend';suggestion='The trend is moving up. Check whether this matches your goal and whether the change persists across another week.';}
  document.getElementById('result-area').style.display='block';
  document.getElementById('calc-output').innerText=rate.toFixed(2);
  document.getElementById('rate-unit').innerText=unit+'/week';
  document.getElementById('calc-status').innerText=status;
  document.getElementById('calc-desc').innerText='From '+start.toFixed(1)+' to '+end.toFixed(1)+' '+unit+' across '+days+' days: '+rate.toFixed(2)+' '+unit+' per week.';
  document.getElementById('calc-suggestion').innerText=suggestion;
  document.getElementById('result-area').scrollIntoView({behavior:'smooth',block:'nearest'});
}`
};
