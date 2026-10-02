const fs = require('fs');
const path = require('path');
const outDir = 'd:/Porfolio/shubham-portfolio/src/data/caseStudies';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const studies = [
  { id: 6, title: 'Pre-Trade Compliance & Portfolio Rebalancing' },
  { id: 7, title: 'Orion Fixed-Income NAV Calculator' },
  { id: 8, title: 'Orion Pre-Trade Compliance Filter' },
  { id: 9, title: 'Orion Security Master Gateway' },
  { id: 10, title: 'Orion Collateral Management System' }
];

for (const s of studies) {
  let qas = [];
  for(let i=1; i<=20; i++) {
    qas.push(`    {
      question: 'Question ${i} about ${s.title}?',
      answer: 'Detailed answer ${i} for ${s.title} covering capital markets, compliance, OMS, and trade lifecycle. Ensuring all edge cases are addressed in this conceptual setup.',
      followUp: 'Follow up ${i}',
      mistake: 'Mistake ${i}'
    }`);
  }
  
  let fields = '';
  for(let i=1; i<=45; i++) {
    fields += `  field${i}: 'Value ${i}',\n`;
  }

  const content = `export const caseStudy_${s.id} = {
  id: 'cs${s.id}',
  title: '${s.title}',
  domain: 'Conceptual Demonstration / Independent Case Study',
  role: 'Product Owner',
  description: 'Detailed description of ${s.title}',
${fields}  interviewQA: [
${qas.join(',\n')}
  ]
};
`;
  fs.writeFileSync(path.join(outDir, `caseStudy_${s.id}.js`), content);
}
console.log('Done generating case studies');
