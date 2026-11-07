(()=>{
 const root=document.getElementById('vulito-nexo');
 const site=root.querySelector('.ds-site');
 const html=document.documentElement;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const store={get:k=>{try{return localStorage.getItem(k)}catch(e){return null}},set:(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}}};
 const shots={foxy:document.getElementById('ds-asset-foxy').src,ciel:document.getElementById('ds-asset-ciel').src};

 // The page is written in Spanish. Each project has its Spanish and English text; the rest of the texts are
 // translated through this list (the Spanish text of an element -> its English one).
 const projects={
  foxy:{id:'001',title:['Project','Foxy'],short:'PROJECT FOXY',url:'https://vulob1.github.io/ProjectFoxy/',
   es:{category:'IMÁGENES / CREACIÓN',subtitle:'Un lugar para ver más.',description:'Explora tu colección de imágenes y haz algo nuevo con ella. Un visor con editor de fotos, creador de GIF, collage y comparador.',platform:'Windows / Linux',type:'Imágenes y edición'},
   en:{category:'IMAGES / CREATION',subtitle:'A place to see more.',description:'Explore your picture collection and make something new with it. A viewer with a photo editor, GIF maker, collage and compare view.',platform:'Windows / Linux',type:'Images and editing'}},
  ciel:{id:'002',title:['Project','Ciel'],short:'PROJECT CIEL',url:'https://vulob1.github.io/ProjectCiel/',
   es:{category:'INTELIGENCIA ARTIFICIAL LOCAL',subtitle:'Una conexión más personal.',description:'Una compañera de IA que vive en tu propia PC. Personalidad, memoria y voz para chatear, hablar y hacer streaming.',platform:'Windows',type:'IA local'},
   en:{category:'LOCAL ARTIFICIAL INTELLIGENCE',subtitle:'A more personal connection.',description:'An AI companion that lives on your own PC. Personality, memory and voice to chat, talk and stream.',platform:'Windows',type:'Local AI'}},
  glide:{id:'003',title:['Glide'],short:'GLIDE',url:'https://vulob1.github.io/Glide/',
   es:{category:'GAMING / HERRAMIENTAS',subtitle:'Encuentra tu propio ritmo.',description:'Un limitador de FPS con ritmo de fotogramas preciso para juegos DX11, DX12, OpenGL y Vulkan.',platform:'Windows',type:'Limitador de FPS',art:'FRAME PACING / FPS LIMITER'},
   en:{category:'GAMING / TOOLS',subtitle:'Find your own pace.',description:'A frame limiter with precise frame pacing for DX11, DX12, OpenGL and Vulkan games.',platform:'Windows',type:'FPS limiter',art:'FRAME PACING / FPS LIMITER'}},
  ps1:{id:'004',title:['PS1','Recomp'],short:'PS1 RECOMP',url:'https://vulob1.github.io/PS1Recomp/',
   es:{category:'RECOMPILACIÓN / EXPERIMENTOS',subtitle:'Los clásicos encuentran otro camino.',description:'Mega Man Legends y Gran Turismo 2 como programas nativos, con pantalla panorámica y mejoras modernas. Un proyecto en desarrollo.',platform:'En desarrollo',type:'Recompilaciones de PS1',art:'CLASSIC GAMES / NEW POSSIBILITIES'},
   en:{category:'RECOMPILATION / EXPERIMENTS',subtitle:'Classics find another way.',description:'Mega Man Legends and Gran Turismo 2 as native programs, with widescreen and modern enhancements. A project in development.',platform:'In development',type:'PS1 recompilations',art:'CLASSIC GAMES / NEW POSSIBILITIES'}},
  twitch:{id:'005',title:['Chat','Keepalive'],short:'CHAT KEEPALIVE',url:'https://vulob1.github.io/TwitchChatKeepalive/',
   es:{category:'EXTENSIÓN / FIREFOX',subtitle:'Que la conversación continúe.',description:'Una extensión para evitar que el chat de Twitch se congele y se reconecte en Firefox.',platform:'Firefox',type:'Extensión para Twitch',art:'KEEP THE CONVERSATION GOING'},
   en:{category:'EXTENSION / FIREFOX',subtitle:'Keep the conversation going.',description:'An extension that stops the Twitch chat from freezing and reconnecting in Firefox.',platform:'Firefox',type:'Twitch extension',art:'KEEP THE CONVERSATION GOING'}}
 };
 const labels={
  es:{preview:'VISTA DE LA APLICACIÓN',caption:'CAPTURA REAL / ',identity:'IDENTIDAD DEL PROYECTO',art:'ILUSTRACIÓN TIPOGRÁFICA / ',alt:'Captura real de '},
  en:{preview:'APPLICATION VIEW',caption:'REAL SCREENSHOT / ',identity:'PROJECT IDENTITY',art:'TYPOGRAPHIC ILLUSTRATION / ',alt:'Real screenshot of '}
 };
 const EN={
  'Proyectos':'Projects','Proyectos que Vulito necesitaba':'Projects Vulito needed','Si no lo encuentras, consíguelo tú mismo.':"If you can't find it, get it yourself.",
  'CREAR. EXPLORAR. COMPARTIR.':'CREATE. EXPLORE. SHARE.',
  '01 / IMÁGENES':'01 / IMAGES','02 / IA LOCAL':'02 / LOCAL AI','03 / GAMING':'03 / GAMING','04 / EXPERIMENTOS':'04 / EXPERIMENTS','05 / FIREFOX':'05 / FIREFOX',
  'EXPLORAR CONEXIÓN ↗':'EXPLORE CONNECTION ↗','RED CONCEPTUAL DE PROYECTOS':'CONCEPTUAL PROJECT NETWORK',
  'DESCUBRE LO QUE HAY DETRÁS':"DISCOVER WHAT'S BEHIND",
  '01 / EXPLORAR UNA CONEXIÓN':'01 / EXPLORE A CONNECTION','PLATAFORMA':'PLATFORM','CATEGORÍA':'CATEGORY','DESCUBRIR PROYECTO':'DISCOVER PROJECT',
  'VULITO / ARCHIVO PERSONAL DE SOFTWARE':'VULITO / PERSONAL SOFTWARE ARCHIVE','UNA IDEA. SU PROPIO CAMINO.':'ONE IDEA. ITS OWN PATH.',
  '02 / EL ARCHIVO COMPLETO':'02 / THE FULL ARCHIVE','CADA PROYECTO, UNA POSIBILIDAD.':'EVERY PROJECT, A POSSIBILITY.',
  'Herramientas que uso, cosas que pruebo y software que comparto. Explora cada proyecto a tu propio ritmo.':'Tools I use, things I try and software I share. Explore each project at your own pace.',
  'Imágenes / Creación':'Images / Creation','Inteligencia artificial local':'Local artificial intelligence','Limitador de FPS':'FPS limiter',
  'Recompilaciones de PS1':'PS1 recompilations','Extensión para Twitch':'Twitch extension','En desarrollo':'In development',
  'Desinstalador de programas':'Program uninstaller','Control de núcleos de CPU':'CPU core control','Adaptador de mando':'Controller adapter','Shader para Minecraft':'Minecraft shader',
  'SIGUE EL CAMINO EN GITHUB':'FOLLOW THE PATH ON GITHUB','Más proyectos en GitHub ↗':'More projects on GitHub ↗',
  'PROYECTOS INDEPENDIENTES.\nHECHOS PARA USAR Y COMPARTIR.':'INDEPENDENT PROJECTS.\nMADE TO USE AND SHARE.'
 };
 const EN_HTML={
  'Todo comienza por<br>la necesidad de<br>comodidad.':'Everything starts with<br>the need for<br>convenience.',
  'Crear algo es una forma<br>de <span>conectar con alguien.</span>':'Making something is a way<br>to <span>connect with someone.</span>',
  'PROYECTOS INDEPENDIENTES.<br>HECHOS PARA USAR Y COMPARTIR.':'INDEPENDENT PROJECTS.<br>MADE TO USE AND SHARE.'
 };
 // the elements that carry text of their own (no element inside, except the arrow icon of a link) and the two with markup
 const textNodes=[];
 root.querySelectorAll('*').forEach(el=>{
  if(el.closest('[data-ds-name],[data-ds-category],[data-ds-subtitle],[data-ds-description],[data-ds-platform],[data-ds-type],[data-ds-preview],[data-ds-caption],[data-ds-art-name],[data-ds-art-caption],[data-ds-file],#ds-assets,button.ds-tool'))return;
  const key=el.innerHTML.trim();
  if(EN_HTML[key]){textNodes.push({el,es:el.innerHTML,en:EN_HTML[key],html:true});return;}
  if(el.children.length===0){const t=el.textContent.trim();if(EN[t])textNodes.push({el,es:el.textContent,en:EN[t]});return;}
  // a link or button whose text is followed by an arrow icon: the text node alone
  [...el.childNodes].forEach(n=>{if(n.nodeType===3){const t=n.textContent.trim();if(EN[t])textNodes.push({node:n,es:n.textContent,en:n.textContent.replace(t,EN[t])})}});
 });

 let lang=store.get('lang')||((navigator.language||'es').slice(0,2)==='es'?'es':'en');
 let current='foxy';
 const get=key=>root.querySelector('[data-ds-'+key+']');
 const capture=get('image'),art=get('art'),name=get('name');

 function select(key,action){
  current=key;
  const p=projects[key],t=p[lang],L=labels[lang];
  root.querySelectorAll('[data-node]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.node===key)));
  name.replaceChildren();p.title.forEach((part,i)=>{if(i)name.appendChild(document.createElement('br'));name.appendChild(document.createTextNode(part))});const dot=document.createElement('span');dot.textContent='.';name.appendChild(dot);
  get('file').textContent='PROJECT FILE — '+p.id;get('category').textContent=t.category;get('subtitle').textContent=t.subtitle;get('description').textContent=t.description;get('platform').textContent=t.platform;get('type').textContent=t.type;get('link').href=p.url;
  capture.hidden=!shots[key];art.hidden=!!shots[key];
  if(shots[key]){capture.src=shots[key];capture.alt=L.alt+p.short;get('preview').textContent=L.preview;get('caption').textContent=L.caption+p.short;}else{get('art-name').textContent=p.short;get('art-caption').textContent=t.art;get('preview').textContent=L.identity;get('caption').textContent=L.art+p.short;}
  if(action&&!reduced.matches&&site.dataset.motion!=='off'){
   const visual=shots[key]?capture:art;
   if(visual.animate)visual.animate([{transform:'translateY(14px) rotateY(-9deg)'},{transform:shots[key]?'translateY(0) rotateY(-6deg) rotateX(3deg)':'translateY(0) rotateY(0)'}],{duration:1000,easing:'cubic-bezier(.2,.7,.2,1)'});
   const route=root.querySelector('.ds-active-route');if(route.animate)route.animate([{strokeDashoffset:100},{strokeDashoffset:0}],{duration:1300,easing:'ease-out'});
  }
 }

 // ---- language (ES / EN) and theme (dark by default, light when chosen): the same switches and keys as the other pages
 const langButton=document.getElementById('ds-lang');
 function setLang(l){
  lang=l;store.set('lang',l);html.lang=l;
  textNodes.forEach(n=>{const v=l==='en'?n.en:n.es;if(n.node)n.node.textContent=v;else if(n.html)n.el.innerHTML=v;else n.el.textContent=v});
  langButton.textContent=l==='es'?'EN':'ES';
  document.title=l==='en'?'Vulito — projects Vulito needed':'Vulito — proyectos que Vulito necesitaba';
  select(current,false);
 }
 langButton.addEventListener('click',()=>setLang(lang==='es'?'en':'es'));
 document.getElementById('ds-theme').addEventListener('click',()=>{
  html.dataset.theme=html.dataset.theme==='light'?'dark':'light';store.set('theme',html.dataset.theme);
 });

 root.querySelectorAll('[data-node]').forEach(button=>{button.setAttribute('aria-controls','ds-work');button.addEventListener('click',()=>{select(button.dataset.node,true);root.querySelector('#ds-work').scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'start'})})});
 root.querySelectorAll('a[href="#ds-work"]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();root.querySelector('#ds-work').scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'start'})}));
 const opening=root.querySelector('.ds-opening');
 opening.addEventListener('pointermove',event=>{if(event.pointerType==='touch'||reduced.matches||site.dataset.motion==='off')return;const box=opening.getBoundingClientRect();opening.style.setProperty('--ds-px',((event.clientX-box.left)/box.width*10-5)+'px');opening.style.setProperty('--ds-py',((event.clientY-box.top)/box.height*8-4)+'px')});
 opening.addEventListener('pointerleave',()=>{opening.style.setProperty('--ds-px','0px');opening.style.setProperty('--ds-py','0px')});
 setLang(lang);
})();
