module.exports = {
  categoryHref: "health.html",
  categoryLabel: "Health Tools",
  slug: "calorie-deficit-percentage-calculator",
  title: "Calorie Deficit Percentage Calculator | From Maintenance",
  description: "Calculate calorie deficit percentage from maintenance calories and planned intake. Compare 10%, 15%, and 20% deficit examples.",
  h1: "Calorie Deficit Percentage Calculator",
  hero: "Check how large your planned calorie deficit is relative to estimated maintenance, then compare it with common 10%, 15%, and 20% planning ranges.",
  heroHighlights: ["Maintenance-based deficit", "Percentage and kcal gap", "Planning limits shown"],
  schemaName: "Privacy-First Calorie Deficit Percentage Calculator",
  schemaDescription: "A browser-side calculator that converts maintenance calories and planned intake into a calorie deficit percentage.",
  lastUpdated: "July 27, 2026",
  buttonText: "Calculate Deficit Percent",
  resultHtml: `
            <div class="result-val"><span id="calc-output">0</span><span class="result-unit">%</span></div>
            <div class="result-status" id="calc-status">Deficit Percentage</div>
            <p class="result-desc" id="calc-desc"></p>
            <div class="suggestion-box"><h4>Planning Note</h4><p id="calc-suggestion"></p></div>`,
  controlsHtml: `
        <div class="input-row">
            <div class="input-group"><label for="input_maintenance">Estimated Maintenance Calories</label><div class="input-wrapper"><input type="number" id="input_maintenance" value="2400" min="800" max="6000" step="10"><span class="unit-badge">kcal</span></div></div>
            <div class="input-group"><label for="input_intake">Planned Daily Intake</label><div class="input-wrapper"><input type="number" id="input_intake" value="2100" min="800" max="6000" step="10"><span class="unit-badge">kcal</span></div></div>
        </div>`,
  relatedTitle: "Plan Calories Carefully",
  related: [
    { href: "https://toolsquark.com/tools/calorie-calculator.html", title: "Maintenance Calorie Calculator", description: "Estimate maintenance first, then choose a visible target.", action: "Plan Target" },
    { href: "https://toolsquark.com/tools/tdee-calculator.html", title: "TDEE Calculator", description: "Estimate maintenance calories from BMR and activity level.", action: "Estimate TDEE" },
    { href: "https://toolsquark.com/tools/weekly-weight-change-rate-calculator.html", title: "Weekly Weight Change Rate", description: "Compare the planned deficit with the actual scale trend.", action: "Check Trend" }
  ],
  references: [
    { title: "Body Weight Planner", publisher: "National Institute of Diabetes and Digestive and Kidney Diseases", href: "https://www.niddk.nih.gov/bwp" }
  ],
  faq: [
    { question: "How do I calculate calorie deficit percentage?", answer: "Subtract planned intake from estimated maintenance, divide by estimated maintenance, then multiply by 100." },
    { question: "Is a 20% deficit always better than 10%?", answer: "No. A larger deficit may be harder to sustain and can affect hunger, training, mood, and adherence. The smallest effective adjustment is often easier to evaluate." },
    { question: "Can this predict weekly fat loss?", answer: "No. It only shows planned deficit size. Real trends depend on tracking accuracy, water shifts, activity, metabolism, and adherence." }
  ],
  contentSections: [
    { title: "What This Calculator Shows", body: `<p>This tool converts a calorie gap into a percentage of estimated maintenance. Percentage framing is useful because the same 300 kcal gap means different things for different maintenance levels.</p>` },
    { title: "Formula Used", body: `<div class="formula-box">Deficit percentage = (maintenance calories - planned intake) / maintenance calories x 100</div><p>If planned intake is above maintenance, the calculator reports a surplus percentage instead.</p>` },
    { title: "Common Deficit Examples", body: `<table class="comparison-table"><thead><tr><th>Maintenance</th><th>10% Deficit</th><th>15% Deficit</th><th>20% Deficit</th></tr></thead><tbody><tr><td>1,800 kcal</td><td>1,620 kcal</td><td>1,530 kcal</td><td>1,440 kcal</td></tr><tr><td>2,400 kcal</td><td>2,160 kcal</td><td>2,040 kcal</td><td>1,920 kcal</td></tr><tr><td>3,000 kcal</td><td>2,700 kcal</td><td>2,550 kcal</td><td>2,400 kcal</td></tr></tbody></table>` }
  ],
  methodology: "This tool compares planned intake with estimated maintenance calories and expresses the difference as a percentage of maintenance.",
  disclaimer: "Calorie targets are educational planning estimates, not medical nutrition advice. Avoid aggressive changes without qualified guidance.",
  script: `
function calculateNow(){
  const maintenance=Number(document.getElementById('input_maintenance').value);
  const intake=Number(document.getElementById('input_intake').value);
  if(!Number.isFinite(maintenance)||!Number.isFinite(intake)||maintenance<=0||intake<=0){alert('Please enter valid calorie values.');return;}
  const gap=maintenance-intake;
  const pct=gap/maintenance*100;
  let status='Maintenance Target';
  let suggestion='Your planned intake is close to estimated maintenance. Use trend data before making a change.';
  if(pct>0&&pct<10){status='Small Deficit';suggestion='This is a conservative deficit. It may be easier to sustain, but progress can be slow and hard to distinguish from noise.';}
  if(pct>=10&&pct<=20){status='Moderate Deficit';suggestion='This is a common planning range. Monitor hunger, training, sleep, and weekly trend before increasing it.';}
  if(pct>20){status='Large Deficit';suggestion='This is a large planned deficit. Review sustainability and consider professional guidance before using it.';}
  if(pct<0){status='Surplus Target';suggestion='Planned intake is above estimated maintenance. Use this only if a controlled gain phase matches your goal.';}
  document.getElementById('result-area').style.display='block';
  document.getElementById('calc-output').innerText=Math.abs(pct).toFixed(1);
  document.getElementById('calc-status').innerText=status;
  document.getElementById('calc-desc').innerText='Maintenance: '+maintenance.toLocaleString()+' kcal. Planned intake: '+intake.toLocaleString()+' kcal. Gap: '+Math.abs(Math.round(gap)).toLocaleString()+' kcal/day.';
  document.getElementById('calc-suggestion').innerText=suggestion;
  document.getElementById('result-area').scrollIntoView({behavior:'smooth',block:'nearest'});
}`
};
