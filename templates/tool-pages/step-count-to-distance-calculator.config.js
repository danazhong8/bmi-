module.exports = {
  categoryHref: "lifestyle.html",
  categoryLabel: "Lifestyle Tools",
  slug: "step-count-to-distance-calculator",
  title: "Step Count To Distance Calculator | Steps To Miles Or KM",
  description: "Convert step count to estimated walking distance in miles or kilometers using stride length presets or a custom stride.",
  h1: "Step Count To Distance Calculator",
  hero: "Estimate walking distance from steps with an average, shorter, longer, or custom stride length. Use it when you know your steps but want a rough miles or kilometers estimate.",
  heroHighlights: ["Steps to miles", "Steps to kilometers", "Custom stride option"],
  schemaName: "Privacy-First Step Count To Distance Calculator",
  schemaDescription: "A browser-side calculator that estimates walking distance from step count and stride length.",
  lastUpdated: "July 27, 2026",
  buttonText: "Convert Steps To Distance",
  resultHtml: `
            <div class="result-val"><span id="calc-output">0</span><span class="result-unit" id="distance-unit">mi</span></div>
            <div class="result-status" id="calc-status">Estimated Distance</div>
            <p class="result-desc" id="calc-desc"></p>
            <div class="suggestion-box"><h4>Distance Planning Note</h4><p id="calc-suggestion"></p></div>`,
  controlsHtml: `
        <div class="input-row">
            <div class="input-group"><label for="input_steps">Step Count</label><div class="input-wrapper"><input type="number" id="input_steps" value="10000" min="1" max="100000" step="1"><span class="unit-badge">steps</span></div></div>
            <div class="input-group"><label for="input_unit">Output Unit</label><div class="input-wrapper"><select id="input_unit"><option value="miles">miles</option><option value="kilometers">kilometers</option></select></div></div>
        </div>
        <div class="input-group"><label for="input_stride">Stride Length</label><div class="input-wrapper"><select id="input_stride"><option value="0.67">Shorter stride - 0.67 m</option><option value="0.76" selected>Average stride - 0.76 m</option><option value="0.84">Longer stride - 0.84 m</option><option value="custom">Custom stride</option></select></div></div>
        <div class="input-group" id="custom_stride_group" style="display:none;"><label for="input_custom_stride">Custom Stride Length</label><div class="input-wrapper"><input type="number" id="input_custom_stride" value="0.76" min="0.3" max="1.5" step="0.01"><span class="unit-badge">m</span></div></div>`,
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
    { question: "How do I convert steps to miles?", answer: "Multiply steps by stride length in meters, then divide by 1,609.344. This calculator does that conversion and rounds the result." },
    { question: "Is this accurate for running?", answer: "It is intended for walking estimates. Running stride length can be very different, so a GPS watch or measured route is usually better for running distance." }
  ],
  contentSections: [
    { title: "What This Calculator Estimates", body: `<p>This steps-to-distance calculator estimates how many miles or kilometers a step count may represent. It is useful for interpreting phone or wearable step totals when route distance is unknown.</p>` },
    { title: "Formula Used", body: `<div class="formula-box">Distance in meters = steps x stride length in meters</div><p>The calculator converts meters to miles or kilometers after the stride calculation.</p>` },
    { title: "Common Step Count Examples", body: `<table class="comparison-table"><thead><tr><th>Steps</th><th>Average Stride Distance</th></tr></thead><tbody><tr><td>3,000</td><td>About 1.4 mi / 2.3 km</td></tr><tr><td>5,000</td><td>About 2.4 mi / 3.8 km</td></tr><tr><td>8,000</td><td>About 3.8 mi / 6.1 km</td></tr><tr><td>10,000</td><td>About 4.7 mi / 7.6 km</td></tr></tbody></table>` },
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
  document.getElementById('result-area').scrollIntoView({behavior:'smooth',block:'nearest'});
}`
};
