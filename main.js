const $=(s,e=document)=>e.querySelector(s),$$=(s,e=document)=>[...e.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
addEventListener('load',()=>setTimeout(()=>$('#load').classList.add('off'),900));

/* data */
const TECH=[["HTML","web","Structure of every web page."],["CSS","web","Layouts, motion and visual polish."],["JavaScript","web","Interactive logic for the browser."],["TypeScript","web","Typed JavaScript for safer code."],["Python","lang","Scripts, tools and automation."],["C","lang","Low-level fundamentals."],["C++","lang","Performance-focused programming."],["C#","game","Games and apps, Unity scripting."],["Java","lang","Object-oriented applications."],["Lua","game","Scripting for Roblox and games."],["PHP","web","Server-side web logic."],["SQL","lang","Querying and shaping data."],["React","web","Component-based interfaces."],["Node.js","web","JavaScript on the server."],["Git","tool","Version control."],["GitHub","tool","Collaboration and code hosting."],["REST APIs","tool","Connecting apps through data."],["JSON","tool","Lightweight data exchange."],["Firebase","tool","Backend services and hosting."],["Unity","game","Game engine for 2D and 3D."],["Roblox Studio","game","Building games on Roblox."],["UI/UX","design","Interfaces people enjoy using."],["Web Design","design","Modern, responsive layouts."]];
const LANG={
JavaScript:["const","Interactive web apps","Powers interactivity in the browser and on the server.","Interactive web tools","const skills = ['code','design','create'];\n// build something alive\nfunction build(idea) {\n  return `${idea} → shipped`;\n}\nconsole.log(build('portfolio'));","portfolio → shipped"],
Python:["def","Automation & tools","Clean, readable scripting for tools and automation.","File or data automation tool","# automate the boring parts\ndef rename(files):\n    for i, f in enumerate(files):\n        print(f'{i+1:02d}_{f}')\n\nrename(['a.txt', 'b.txt'])","01_a.txt\n02_b.txt"],
"C++":["#include","Performance","Fast, close-to-the-metal programming.","Game logic or simulations","#include <iostream>\nint main() {\n    for (int i = 1; i <= 3; i++)\n        std::cout << \"Level \" << i << \"\\n\";\n    return 0;\n}","Level 1\nLevel 2\nLevel 3"],
"C#":["class","Games with Unity","The language behind Unity gameplay scripting.","Unity gameplay systems","public class Player {\n    public int health = 100;\n    public void Hit(int dmg) {\n        health -= dmg;\n        Console.WriteLine(health);\n    }\n}","80"],
Lua:["local","Roblox scripting","Lightweight scripting used in Roblox and games.","Roblox game systems","local coins = 0\nlocal function collect(n)\n    coins = coins + n\n    print(\"Coins:\", coins)\nend\ncollect(25)","Coins: 25"],
Java:["class","Object-oriented apps","Structured, object-oriented application development.","Desktop or Android style apps","public class App {\n    public static void main(String[] a) {\n        String name = \"TAKERO SAN\";\n        System.out.println(\"Hello \" + name);\n    }\n}","Hello TAKERO SAN"],
PHP:["function","Server-side web","Dynamic web pages and backend logic.","Forms and small web backends","<?php\nfunction greet($name) {\n    return \"Welcome, $name\";\n}\necho greet('visitor');","Welcome, visitor"],
SQL:["SELECT","Data queries","Ask questions of structured data.","Database-driven features","SELECT title, tech\nFROM projects\nWHERE status = 'ready'\nORDER BY title;\n-- returns the ready projects","title | tech\nWeb App | JavaScript"]};
const PROJ=[["Web Development","Responsive websites built from scratch with clean, fast code.",["HTML","CSS","JavaScript"],"web"],["Interactive Websites","Immersive pages with motion, canvas effects and playful interaction.",["JavaScript","Canvas","CSS"],"web"],["Game Development","Gameplay systems, mechanics and prototypes.",["Unity","C#","C++"],"game"],["Roblox Projects","Game systems, interfaces and scripts for Roblox experiences.",["Lua","Roblox Studio"],"game"],["JavaScript Applications","Browser apps and tools with logic, state and polished UI.",["JavaScript","React","JSON"],"web"],["Python Tools","Scripts that automate repetitive work and process data.",["Python","APIs"],"tools"],["UI/UX Designs","Interface concepts and layouts focused on clarity and feel.",["UI/UX","Web Design"],"design"],["Custom Digital Solutions","Tailored tools built around a specific idea or workflow.",["JavaScript","Python","Firebase"],"tools"]];
const SERV=[["Websites","Fast, responsive sites that present you or your brand professionally."],["Web Applications","Interactive apps with real logic, data and a smooth interface."],["Interactive UI","Animated, engaging interface components that feel alive."],["Landing Pages","Focused pages designed to turn visitors into customers."],["Game Interfaces","HUDs, menus and in-game UI with a polished look."],["Roblox Systems","Gameplay systems and scripts for Roblox projects."],["Automation Tools","Tools that remove repetitive manual work."],["Custom JavaScript Tools","Calculators, dashboards and utilities built to fit."],["Python Tools","Scripts and utilities for data and automation."],["UI/UX Designs","Layouts and flows designed for clarity and style."],["Custom Digital Experiences","Anything unique, from idea to working product."]];

/* filters helper */
function filters(box,keys,fn){box.innerHTML=keys.map((k,i)=>`<button class="fb${i?'':' on'}" data-k="${k}">${k[0].toUpperCase()+k.slice(1)}</button>`).join('');box.onclick=e=>{const b=e.target.closest('.fb');if(!b)return;$$('.fb',box).forEach(x=>x.classList.toggle('on',x===b));fn(b.dataset.k)}}
/* tech wall */
$('#wall').innerHTML=TECH.map(t=>`<div class="tc glass tilt" data-c="${t[1]}"><div class="ic mono">${t[0].slice(0,2).toUpperCase()}</div><h3>${t[0]}</h3><p>${t[2]}</p></div>`).join('');
filters($('#tf'),['all','web','lang','game','tool','design'],k=>$$('.tc').forEach(c=>c.classList.toggle('hide',k!='all'&&c.dataset.c!=k)));
/* projects */
$('#pg').innerHTML=PROJ.map((p,i)=>`<article class="pc glass tilt" data-c="${p[3]}"><div class="vis" data-n="0${i+1}" style="--x:${10+i*11}%"></div><div class="pb"><span class="tag mono">0${i+1}</span><h3>${p[0]}</h3><p>${p[1]}</p><div class="chips">${p[2].map(x=>`<span>${x}</span>`).join('')}</div><a class="vp" href="#contact">View Project →</a></div></article>`).join('');
filters($('#pf'),['all','web','game','tools','design'],k=>$$('.pc').forEach(c=>c.classList.toggle('hide',k!='all'&&c.dataset.c!=k)));
$('#sv').innerHTML=SERV.map(s=>`<div class="glass rv tilt"><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join('');

$('#mt').innerHTML=[...TECH,...TECH].map(t=>`<span>${t[0]}</span>`).join('');
$('#steps').innerHTML=[["01","Idea","We talk through your goal, audience and what success looks like."],["02","Design","Layout, style and flow take shape before any code is written."],["03","Build","Clean, responsive code with motion and interaction added with care."],["04","Launch","Tested on mobile and desktop, then live and ready to grow."]].map(x=>`<div class="st glass rv tilt"><b class="mono">${x[0]}</b><h3>${x[1]}</h3><p>${x[2]}</p></div>`).join('');
(function(){const R=['websites','web apps','games','Roblox systems','automation tools','digital experiences'],el=$('#role');let i=0,j=0,d=0;function t(){const w=R[i];el.textContent=w.slice(0,j);if(!d&&j++==w.length){d=1;return setTimeout(t,1400)}if(d&&--j<0){d=0;j=0;i=(i+1)%R.length}setTimeout(t,d?35:70)}if(RM)el.textContent=R[0];else t()})();
/* reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
$$('.rv,.pc').forEach(e=>io.observe(e));
/* counters */
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,to=+el.dataset.to;let n=0;const t=setInterval(()=>{n++;el.textContent=n+el.dataset.s;if(n>=to)clearInterval(t)},60);co.unobserve(el)}),{threshold:.6});
$$('[data-to]').forEach(e=>co.observe(e));

/* code lab */
function hl(code,kw){let h=code.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
 return h.replace(/(\/\/.*|#(?!include).*|--.*)|("(?:[^"\\]|\\.)*"|'[^']*'|`[^`]*`)|\b(const|let|def|for|in|return|function|class|public|static|void|int|local|end|then|if|else|echo|SELECT|FROM|WHERE|ORDER|BY|String|new|import|print|main|std|include)\b|\b(\d+)\b/g,(m,c,s,k,n)=>c?`<span class="c">${c}</span>`:s?`<span class="s">${s}</span>`:k?`<span class="k">${k}</span>`:`<span class="n">${n}</span>`)}
let cur='JavaScript';
function lang(n){cur=n;const d=LANG[n];$$('#tabs .fb').forEach(b=>b.classList.toggle('on',b.dataset.k==n));
 $('#lname').textContent=n+' — editor';$('#ltitle').textContent=n+' · '+d[1];$('#ldesc').textContent=d[2];$('#lproj').textContent=d[3];
 $('#ed').innerHTML=hl(d[4]);const o=$('#lout');o.textContent='$ run '+n.toLowerCase()+'\n';
 if(RM){o.textContent+=d[5];return}let i=0;clearInterval(lang.t);lang.t=setInterval(()=>{o.textContent=o.textContent.split('\n')[0]+'\n'+d[5].slice(0,++i);if(i>=d[5].length)clearInterval(lang.t)},35)}
$('#tabs').innerHTML=Object.keys(LANG).map(k=>`<button class="fb" data-k="${k}">${k}</button>`).join('');
$('#tabs').onclick=e=>{const b=e.target.closest('.fb');b&&lang(b.dataset.k)};
$('#copy').onclick=async e=>{try{await navigator.clipboard.writeText(LANG[cur][4]);e.target.textContent='Copied ✓'}catch(_){e.target.textContent='Press Ctrl+C'}setTimeout(()=>e.target.textContent='Copy code',1500)};
lang('JavaScript');

/* hero terminal */
const HL=['<span class="rd">&gt;</span> initializing developer environment...','<span class="rd">&gt;</span> loading projects...','<span class="rd">&gt;</span> compiling ideas...','<span class="ok">&gt; system ready.</span>','','<span class="rd">&gt;</span> welcome, visitor. type "help" below ↓'];
(function(){const el=$('#hterm');let i=0,out=[];(function next(){if(i>=HL.length)return;out.push(HL[i++]);el.innerHTML=out.join('\n');setTimeout(next,RM?0:700)})()})();
/* interactive terminal */
const CMD={about:'Programmer & Digital Creator\nBuilding modern digital experiences.',skills:'HTML  CSS  JavaScript  TypeScript  Python\nC  C++  C#  Java  Lua  PHP  SQL\nReact  Node.js  Git  Unity  Roblox Studio',projects:'01 Web Development\n02 Interactive Websites\n03 Game Development\n04 Roblox Projects\n05 JavaScript Applications\n06 Python Tools\n07 UI/UX Designs\n08 Custom Digital Solutions',services:'Websites · Web Apps · Interactive UI · Landing Pages\nGame Interfaces · Roblox Systems · Automation Tools',contact:'WhatsApp: +20 112 016 2474\nStatus: available for projects.',help:'Commands: about, skills, projects, services, contact, clear, whoami',whoami:'takero_san — builder of things.'};
const it=$('#iterm');function run(c){c=c.trim().toLowerCase();if(!c)return;if(c=='clear'){it.textContent='';return}const r=CMD[c]||`command not found: ${c}. try "help"`;it.textContent+=`\n> ${c}\n${r}\n`;it.scrollTop=it.scrollHeight}
$('#cmds').innerHTML=Object.keys(CMD).filter(k=>k!='whoami').map(k=>`<button class="fb" data-k="${k}">${k}</button>`).join('')+'<input id="ti" placeholder="type a command + Enter" aria-label="Terminal input">';
$('#cmds').onclick=e=>{const b=e.target.closest('.fb');b&&run(b.dataset.k)};
$('#ti').onkeydown=e=>{if(e.key=='Enter'){run(e.target.value);e.target.value=''}};

/* nav */
const secs=$$('main section'),ls=$$('#links a'),ind=$('#ind');
function mark(id){ls.forEach(a=>{const on=a.getAttribute('href')=='#'+id;a.classList.toggle('on',on);if(on){ind.style.left=a.offsetLeft+'px';ind.style.width=a.offsetWidth+'px'}})}
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const id=e.target.id;mark(['terminal','process'].includes(id)?'services':id)}}),{rootMargin:'-45% 0px -50% 0px'});
secs.forEach(s=>so.observe(s));
$('#burger').onclick=e=>{const o=$('#links').classList.toggle('open');e.target.setAttribute('aria-expanded',o)};
ls.forEach(a=>a.addEventListener('click',()=>$('#links').classList.remove('open')));
addEventListener('resize',()=>mark($('#links a.on')?.getAttribute('href').slice(1)||'home'));
/* scroll */
addEventListener('scroll',()=>{const h=document.documentElement,p=h.scrollTop/(h.scrollHeight-h.clientHeight);$('#prog').style.width=p*100+'%';$('#top').classList.toggle('v',h.scrollTop>600)},{passive:true});
$('#top').onclick=()=>scrollTo({top:0});
/* cursor, tilt, magnetic */
addEventListener('pointermove',e=>{$('#glow').style.left=e.clientX+'px';$('#glow').style.top=e.clientY+'px';$('#dot').style.left=e.clientX+'px';$('#dot').style.top=e.clientY+'px'});
document.addEventListener('pointerover',e=>$('#dot').classList.toggle('big',!!e.target.closest('a,button')));
if(!RM){document.addEventListener('pointermove',e=>{if(e.pointerType!='mouse')return;const t=e.target.closest('.tilt');if(t){const r=t.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;t.style.transform=`perspective(700px) rotateX(${-y*10}deg) rotateY(${x*10}deg)`}const m=e.target.closest('.mag');if(m){const r=m.getBoundingClientRect();m.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.2}px,${(e.clientY-r.top-r.height/2)*.3}px)`}});
document.addEventListener('pointerout',e=>{const t=e.target.closest('.tilt,.mag');t&&(t.style.transform='')})}
/* particles */
(function(){if(RM)return;const c=$('#bg'),x=c.getContext('2d'),S=['{','}','<','>','/','=',';','()','0','1','#'];let w,h,P=[];function rs(){w=c.width=innerWidth;h=c.height=innerHeight;P=Array.from({length:Math.min(45,w/28|0)},()=>({x:Math.random()*w,y:Math.random()*h,v:.15+Math.random()*.4,s:S[Math.random()*S.length|0],z:10+Math.random()*14}))}rs();addEventListener('resize',rs);
(function f(){x.clearRect(0,0,w,h);P.forEach(p=>{p.y-=p.v;if(p.y<-20){p.y=h+20;p.x=Math.random()*w}x.font=p.z+'px monospace';x.fillStyle=`rgba(255,42,61,${p.z/70})`;x.fillText(p.s,p.x,p.y)});requestAnimationFrame(f)})()})();
/* palette */
const ACT=[...ls.map(a=>[a.textContent+' (section)',()=>location.hash=a.getAttribute('href')]),['Open WhatsApp',()=>open('https://wa.me/201120162474?text=Hi%20TAKERO%20SAN%2C%20I%20would%20like%20to%20talk%20about%20a%20project.','_blank')],['Run: about (terminal)',()=>{location.hash='#terminal';run('about')}],['Back to top',()=>scrollTo({top:0})]];
const pal=$('#pal'),pi=$('#pi');function pr(q=''){$('#pl').innerHTML='';ACT.filter(a=>a[0].toLowerCase().includes(q.toLowerCase())).forEach((a,i)=>{const li=document.createElement('li');li.textContent=a[0];li.tabIndex=0;if(!i)li.className='sel';li.onclick=()=>{pal.classList.remove('open');a[1]()};li.onkeydown=e=>e.key=='Enter'&&li.click();$('#pl').appendChild(li)})}
pi.oninput=()=>pr(pi.value);pal.onclick=e=>e.target==pal&&pal.classList.remove('open');pr();
function tp(){pal.classList.add('open');pi.value='';pr();pi.focus()}
/* keys + easter egg */
const KC=['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];let ki=0;
addEventListener('keydown',e=>{const tg=e.target.tagName;if((e.ctrlKey||e.metaKey)&&e.key=='k'){e.preventDefault();tp();return}
 if(e.key=='Escape'){pal.classList.remove('open');$('#egg').classList.remove('open');return}
 if(tg=='INPUT')return;ki=e.key==KC[ki]?ki+1:(e.key==KC[0]?1:0);if(ki==KC.length){$('#egg').classList.add('open');ki=0}
 if(e.key=='/'){e.preventDefault();tp()}
 const n={1:'home',2:'about',3:'skills',4:'lab',5:'projects',6:'services',7:'contact'}[e.key];if(n&&!e.ctrlKey&&!e.altKey)location.hash='#'+n});
console.log('%cTAKERO SAN','color:#ff2a3d;font-size:20px','— psst: try ↑↑↓↓←→←→BA');
