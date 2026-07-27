module.exports = {
  categoryHref: "lifestyle.html",
  categoryLabel: "Lifestyle Tools",
  slug: "step-count-to-distance-calculator",
  title: "Step Count To Distance Calculator | Steps To Miles Or KM",
  description: "Convert step count to estimated walking distance in miles or kilometers using stride length presets or a custom stride.",
  h1: "Step Count To Distance Calculator",
  hero: "Estimate walking distance from steps with an average, shorter, longer, or custom stride length. Use it for common searches like 5,000 steps to miles, 8,000 steps to kilometers, and 10,000 steps distance.",
  heroHighlights: ["5,000 and 10,000 step examples", "Steps to miles or km", "Custom stride option"],
  schemaName: "Privacy-First Step Count To Distance Calculator",
  schemaDescription: "A browser-side calculator that estimates walking distance from step count and stride length.",
  lastUpdated: "July 27, 2026",
  buttonText: "Convert Steps To Distance",
  shareResult: true,
  dynamicNextSteps: true,
  resultHtml: `
            <div class="result-val"><span id="calc-output">0</span><span class="result-unit" id="distance-unit">mi</span></div>
            <div class="result-status" id="calc-status">Estimated Distance</div>
            <p class="result-desc" id="calc-desc"></p>
            <div class="result-boundary"><strong>What this does not mean</strong><span>This is a stride-based planning estimate, not GPS distance or a device-calibrated measurement.</span></div>
            <div class="suggestion-box"><h4>Distance Planning Note</h4><p id="calc-suggestion"></p></div>
            <div class="next-step-panel"><h4>Recommended Next Step</h4><div id="next-step-cards" class="next-step-grid"><p class="next-step-empty">Calculate first to see the most relevant follow-up.</p></div></div>
            <div class="share-result-panel"><h4>Shareable Result Summary</h4><p id="share-summary">Calculate first, then copy a short plain-text summary with the result, assumptions, and page link.</p><button type="button" class="share-copy-btn" onclick="copyShareResult()">Copy Summary</button><span id="share-copy-status" aria-live="polite"></span></div>`,
  controlsHtml: `
        <div class="intent-banner"><strong>Use your step count as the starting point.</strong><span>Enter steps from your phone or wearable, choose a stride assumption, then convert the result into miles or kilometers.</span></div>
        <div class="input-row">
            <div class="input-group"><label for="input_steps">Step Count</label><div class="input-wrapper"><input type="number" id="input_steps" value="10000" min="1" max="100000" step="1"><span class="unit-badge">steps</span></div></div>
            <div class="input-group"><label for="input_unit">Output Unit</label><div class="input-wrapper"><select id="input_unit"><option value="miles">miles</option><option value="kilometers">kilometers</option></select></div></div>
        </div>
        <div class="input-group"><label for="input_stride">Stride Length</label><div class="input-wrapper"><select id="input_stride"><option value="0.67">Shorter stride - 0.67 m</option><option value="0.76" selected>Average stride - 0.76 m</option><option value="0.84">Longer stride - 0.84 m</option><option value="custom">Custom stride</option></select></div></div>
        <div class="input-group" id="custom_stride_group" style="display:none;"><label for="input_custom_stride">Custom Stride Length</label><div class="input-wrapper"><input type="number" id="input_custom_stride" value="0.76" min="0.3" max="1.5" step="0.01"><span class="unit-badge">m</span></div></div>`,
  extraCss: `.intent-banner{display:grid;gap:5px;margin-bottom:14px;padding:14px 16px;border:1px solid #bfdbfe;background:#eff6ff;border-radius:10px;color:#1e3a8a}.intent-banner strong{font-size:15px}.intent-banner span{font-size:13px;line-height:1.5;color:#334155}`,
  relatedTitle: "Continue Movement Planning",
  related: [
    { href: "https://toolsquark.com/tools/walking-distance-to-steps-calculator.html", title: "Walking Distance To Steps", description: "Convert miles or kilometers back into estimated walking steps.", action: "Reverse It" },
    { href: "https://toolsquark.com/tools/walking-time-to-steps-calculator.html", title: "Walking Time To Steps", description: "Estimate steps when you know walking time rather than distance.", action: "Convert Time" },
    { href: "https://toolsquark.com/tools/daily-steps-goal-calculator.html", title: "Daily Steps Goal Calculator", description: "Turn a distance estimate into a realistic step target.", action: "Plan Steps" }
  ],
  references: [
    { title: "Physical Activity Guidelines for Adults", publisher: "Centers for Disease Control and Prevention", href: "https://www.cdc.gov/physical-activity-basics/guidelines/adults.html" }
  ],
  faq: [
    { question: "How far is 10,000 steps?", answer: "With the default 0.76 m stride, 10,000 steps is about 4.7 miles or 7.6 kilometers. Your actual distance depends on stride length, speed, terrain, and turns." },
    { question: "How far is 5,000 steps?", answer: "With the default 0.76 m stride, 5,000 steps is about 2.4 miles or 3.8 kilometers." },
    { question: "How many kilometers is 8,000 steps?", answer: "With the default 0.76 m stride, 8,000 steps is about 6.1 kilometers, or about 3.8 miles." },
    { question: "How do I convert steps to miles?", answer: "Multiply steps by stride length in meters, then divide by 1,609.344. This calculator does that conversion and rounds the result." },
    { question: "Is this accurate for running?", answer: "It is intended for walking estimates. Running stride length can be very different, so a GPS watch or measured route is usually better for running distance." }
  ],
  contentSections: [
    { title: "What This Calculator Estimates", body: `<p>This steps-to-distance calculator estimates how many miles or kilometers a step count may represent. It is useful for interpreting phone or wearable step totals when route distance is unknown.</p>` },
    { title: "Formula Used", body: `<div class="formula-box">Distance in meters = steps x stride length in meters</div><p>The calculator converts meters to miles or kilometers after the stride calculation.</p>` },
    { title: "Common Step Count Examples", body: `<table class="comparison-table"><thead><tr><th>Steps</th><th>Average Stride Distance</th></tr></thead><tbody><tr><td>3,000</td><td>About 1.4 mi / 2.3 km</td></tr><tr><td>5,000</td><td>About 2.4 mi / 3.8 km</td></tr><tr><td>8,000</td><td>About 3.8 mi / 6.1 km</td></tr><tr><td>10,000</td><td>About 4.7 mi / 7.6 km</td></tr></tbody></table>` },
    { title: "Stride Length Sensitivity", body: `<table class="comparison-table"><thead><tr><th>Step Count</th><th>Shorter Stride</th><th>Average Stride</th><th>Longer Stride</th></tr></thead><tbody><tr><td>5,000 steps</td><td>2.1 mi / 3.4 km</td><td>2.4 mi / 3.8 km</td><td>2.6 mi / 4.2 km</td></tr><tr><td>10,000 steps</td><td>4.2 mi / 6.7 km</td><td>4.7 mi / 7.6 km</td><td>5.2 mi / 8.4 km</td></tr></tbody></table><p>The same step count can produce a different distance when stride length changes, which is why custom stride is useful.</p>` },
    { title: "When To Use A Custom Stride", body: `<p>Use a custom stride if you measured a known route and counted steps. Custom stride is better than a general preset when you use the result for repeated route planning.</p>` }
  ],
  methodology: "This tool multiplies steps by selected stride length in meters, then converts meters to miles or kilometers.",
  disclaimer: "Distance estimates vary with stride length, speed, terrain, turns, device tracking, and mobility.",
  script: `
document.getElementById('input_stride').addEventListener('change', function(){document.getElementById('custom_stride_group').style.display=this.value==='custom'?'block':'none';});
function calculateNow(){
  const steps=Number(document.getElementById('input_steps').value);
  const unit=document.getElementById('input_unit').value;
  const strideChoice=document.getElementById('input_stride').value;
  const stride=strideChoice==='custom'?Number(document.getElementById('input_custom_stride').value):Number(strideChoice);
  if(!Number.isFinite(steps)||!Number.isFinite(stride)||steps<=0||stride<=0){alert('Please enter a valid step count and stride length.');return;}
  const meters=steps*stride;
  const distance=unit==='miles'?meters/1609.344:meters/1000;
  const unitLabel=unit==='miles'?'mi':'km';
  document.getElementById('result-area').style.display='block';
  document.getElementById('calc-output').innerText=distance.toFixed(distance>=10?1:2);
  document.getElementById('distance-unit').innerText=unitLabel;
  document.getElementById('calc-status').innerText='Step-Based Distance Estimate';
  document.getElementById('calc-desc').innerText=steps.toLocaleString()+' steps at '+stride.toFixed(2)+' m per step is about '+distance.toFixed(distance>=10?1:2)+' '+unitLabel+'.';
  document.getElementById('calc-suggestion').innerText='Use this as a planning estimate. For a route you repeat often, measure your own stride or compare against GPS distance.';
  setNextStepRecommendations([
    { label: 'Stride Length Calculator', href: 'https://toolsquark.com/tools/stride-length-calculator.html', reason: 'Measure your own stride to make future step-distance estimates more personal.', action: 'Find Stride' },
    { label: 'Walking Distance To Steps', href: 'https://toolsquark.com/tools/walking-distance-to-steps-calculator.html', reason: 'Reverse the calculation when you know route distance instead of steps.', action: 'Reverse It' }
  ]);
  document.getElementById('result-area').scrollIntoView({behavior:'smooth',block:'nearest'});
}`
};
