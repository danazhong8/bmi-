module.exports = {
  categoryHref: "lifestyle.html",
  categoryLabel: "Lifestyle Tools",
  slug: "stride-length-calculator",
  title: "Stride Length Calculator | Distance And Steps",
  description: "Calculate average stride length from a known walking distance and step count, then use it for better steps-to-distance estimates.",
  h1: "Stride Length Calculator",
  hero: "Calculate your average stride length from a measured distance and step count. Use the result to make steps-to-miles, steps-to-kilometers, and route planning estimates more personal.",
  heroHighlights: ["Measured route method", "Meters and feet output", "Improves step estimates"],
  schemaName: "Privacy-First Stride Length Calculator",
  schemaDescription: "A browser-side stride length calculator based on measured walking distance and step count.",
  lastUpdated: "July 27, 2026",
  buttonText: "Calculate Stride Length",
  shareResult: true,
  dynamicNextSteps: true,
  resultHtml: `
            <div class="result-val"><span id="calc-output">0</span><span class="result-unit">m</span></div>
            <div class="result-status" id="calc-status">Average Stride Length</div>
            <p class="result-desc" id="calc-desc"></p>
            <div class="result-boundary"><strong>What this does not mean</strong><span>This is an average distance per counted step from one route, not a permanent gait measurement.</span></div>
            <div class="suggestion-box"><h4>Use This Stride</h4><p id="calc-suggestion"></p></div>
            <div class="next-step-panel"><h4>Recommended Next Step</h4><div id="next-step-cards" class="next-step-grid"><p class="next-step-empty">Calculate first to see the most relevant follow-up.</p></div></div>
            <div class="share-result-panel"><h4>Shareable Result Summary</h4><p id="share-summary">Calculate first, then copy a short plain-text summary with the measured stride and page link.</p><button type="button" class="share-copy-btn" onclick="copyShareResult()">Copy Summary</button><span id="share-copy-status" aria-live="polite"></span></div>`,
  controlsHtml: `
        <div class="intent-banner"><strong>Measure once, improve multiple converters.</strong><span>Use a known route and counted steps to create a custom stride for steps-to-distance and distance-to-steps tools.</span></div>
        <div class="input-row">
            <div class="input-group"><label for="input_distance">Measured Distance</label><div class="input-wrapper"><input type="number" id="input_distance" value="400" min="1" max="100000" step="0.1"><span class="unit-badge">distance</span></div></div>
            <div class="input-group"><label for="input_unit">Distance Unit</label><div class="input-wrapper"><select id="input_unit"><option value="1">meters</option><option value="1000">kilometers</option><option value="1609.344">miles</option><option value="0.3048">feet</option></select></div></div>
        </div>
        <div class="input-group"><label for="input_steps">Steps Counted Over That Distance</label><div class="input-wrapper"><input type="number" id="input_steps" value="525" min="1" max="100000" step="1"><span class="unit-badge">steps</span></div></div>`,
  extraCss: `.intent-banner{display:grid;gap:5px;margin-bottom:14px;padding:14px 16px;border:1px solid #bbf7d0;background:#f0fdf4;border-radius:10px;color:#14532d}.intent-banner strong{font-size:15px}.intent-banner span{font-size:13px;line-height:1.5;color:#166534}`,
  relatedTitle: "Use Your Stride",
  related: [
    { href: "https://toolsquark.com/tools/step-count-to-distance-calculator.html", title: "Step Count To Distance", description: "Use your stride to estimate miles or kilometers from steps.", action: "Convert Steps" },
    { href: "https://toolsquark.com/tools/walking-distance-to-steps-calculator.html", title: "Walking Distance To Steps", description: "Use your stride to estimate steps from a route distance.", action: "Convert Distance" },
    { href: "https://toolsquark.com/tools/walking-time-to-steps-calculator.html", title: "Walking Time To Steps", description: "Compare stride-based estimates with pace-based walking time estimates.", action: "Compare Time" }
  ],
  references: [
    { title: "Physical Activity Guidelines for Adults", publisher: "Centers for Disease Control and Prevention", href: "https://www.cdc.gov/physical-activity-basics/guidelines/adults.html" }
  ],
  faq: [
    { question: "How do I calculate stride length?", answer: "Divide measured distance by counted steps. For example, 400 meters divided by 525 steps gives about 0.76 meters per step." },
    { question: "What is an average walking stride length?", answer: "A common planning estimate is around 0.76 meters, or about 2.5 feet, per counted step. Individual stride varies by height, pace, terrain, and mobility." },
    { question: "How long should the measured route be?", answer: "A longer route such as 100 to 400 meters usually gives a better estimate than a few steps across a room because counting or device errors matter less." },
    { question: "Is stride length the same as step length?", answer: "Everyday tools often use the terms loosely. This calculator uses distance per counted step because that is what step counters usually need." },
    { question: "Should I measure walking or running stride?", answer: "Measure the stride for the activity you want to estimate. Walking and running stride lengths are usually different." }
  ],
  contentSections: [
    { title: "Why Stride Length Matters", body: `<p>Step estimates become more useful when the stride assumption matches your own gait. A generic stride can be fine for quick planning, but a measured stride is better for repeated walks.</p>` },
    { title: "Formula Used", body: `<div class="formula-box">Average stride length = measured distance / counted steps</div><p>The calculator converts the distance to meters first, then reports meters and feet per step.</p>` },
    { title: "Simple Measurement Method", body: `<ol><li>Choose a measured route such as 100 m, 400 m, or a known track segment.</li><li>Walk normally and count steps or use a device step count.</li><li>Enter the distance and steps here.</li><li>Use the result in the distance and step converters.</li></ol>` }
    ,
    { title: "Common Reference Values", body: `<table class="comparison-table"><thead><tr><th>Stride Estimate</th><th>Meters</th><th>Feet</th><th>Best Use</th></tr></thead><tbody><tr><td>Shorter walking stride</td><td>0.67 m</td><td>2.20 ft</td><td>Shorter height, slower walking, or cautious estimate.</td></tr><tr><td>Average walking stride</td><td>0.76 m</td><td>2.49 ft</td><td>General steps-to-distance planning.</td></tr><tr><td>Longer walking stride</td><td>0.84 m</td><td>2.76 ft</td><td>Taller users or brisk walking estimates.</td></tr></tbody></table>` }
  ],
  methodology: "This tool converts the entered distance to meters and divides it by counted steps. Feet are derived from meters using 1 m = 3.28084 ft.",
  disclaimer: "Stride length changes with speed, slope, footwear, fatigue, mobility, and terrain. Use repeated measurements for better planning.",
  script: `
function calculateNow(){
  const distance=Number(document.getElementById('input_distance').value);
  const unit=Number(document.getElementById('input_unit').value);
  const steps=Number(document.getElementById('input_steps').value);
  if(!Number.isFinite(distance)||!Number.isFinite(unit)||!Number.isFinite(steps)||distance<=0||steps<=0){alert('Please enter a valid distance and step count.');return;}
  const meters=(distance*unit)/steps;
  const feet=meters*3.28084;
  document.getElementById('result-area').style.display='block';
  document.getElementById('calc-output').innerText=meters.toFixed(2);
  document.getElementById('calc-status').innerText='Average Distance Per Step';
  document.getElementById('calc-desc').innerText='Your average stride estimate is '+meters.toFixed(2)+' meters per step, or about '+feet.toFixed(2)+' feet per step.';
  document.getElementById('calc-suggestion').innerText='Use this value as a custom stride in the step and distance calculators, especially for your usual walking pace.';
  setNextStepRecommendations([
    { label: 'Step Count To Distance', href: 'https://toolsquark.com/tools/step-count-to-distance-calculator.html', reason: 'Use this measured stride to estimate distance from daily steps.', action: 'Convert Steps' },
    { label: 'Walking Distance To Steps', href: 'https://toolsquark.com/tools/walking-distance-to-steps-calculator.html', reason: 'Use this measured stride to estimate steps from a route distance.', action: 'Convert Distance' }
  ]);
  document.getElementById('result-area').scrollIntoView({behavior:'smooth',block:'nearest'});
}`
};
