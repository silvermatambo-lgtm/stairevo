
(function(){
"use strict";
const PHONE="27616107379", MAIL="info@stairevo.co.za",WEB="www.stairevo.co.za";
const slides=[
 {tag:"DESIGNED TO IMPRESS",title:"Architectural Glass",accent:"Staircases & Balustrades",desc:"Beautifully integrated staircases and glass balustrading for spaces that deserve a striking first impression.",img:"/assets/gallery-1.webp"},
 {tag:"QUALITY IN EVERY DETAIL",title:"Stainless Steel",accent:"Railings & Balustrades",desc:"Sleek stainless-steel handrails, precision fabrication and practical finishing for interiors and exteriors.",img:"/assets/gallery-2.webp"},
 {tag:"BUILT AROUND YOUR SPACE",title:"Glass Balcony",accent:"Balustrading Solutions",desc:"Contemporary glass barriers and custom installations for balconies, landings and outdoor spaces.",img:"/assets/gallery-3.webp"}
];
const services=[
 {t:"Glass Balustrades",icon:"◇",txt:"Modern glass balustrades for balconies, staircases and elevated walkways, with carefully considered finishes and fixings.",detail:"Glass panels, stainless-steel fittings, clear lines and sleek contemporary appearance.",img:"/assets/gallery-3.webp"},
 {t:"Stainless Steel Balustrades",icon:"▥",txt:"Steel handrails and balustrading for residential and commercial environments.",detail:"Handrails, posts and custom railings with a polished architectural finish.",img:"/assets/gallery-2.webp"},
 {t:"Custom Staircases",icon:"▰",txt:"Distinctive steel, glass and timber-finish staircase solutions designed for your space.",detail:"Floating-stair aesthetics, contemporary forms, staircase structure and integrated railings.",img:"/assets/gallery-1.webp"},
 {t:"Steel Fabrication",icon:"✧",txt:"Bespoke fabrication solutions for structural details, support frames and metalwork.",detail:"Discuss dimensions, access and requirements before requesting a personalised quotation.",img:"/assets/gallery-4.webp"},
 {t:"Construction Projects",icon:"⌂",txt:"Practical staircase construction and associated structural works.",detail:"From new stair forms to custom designs and project-specific installation planning.",img:"/assets/gallery-5.webp"},
 {t:"Residential & Commercial",icon:"▣",txt:"Purpose-fit balustrade and staircase installations for homes, buildings and commercial spaces.",detail:"Contemporary staircases, balconies and interior and exterior railings.",img:"/assets/gallery-6.webp"}
];
const gallery=[
 {title:"Glass Staircase Detail",category:"Glass Staircases",img:"/assets/gallery-1.webp"},
 {title:"Stainless-Steel Stair Railings",category:"Steel Balustrades",img:"/assets/gallery-2.webp"},
 {title:"Modern Balcony Glass",category:"Glass Balustrades",img:"/assets/gallery-3.webp"},
 {title:"Poolside Steel & Glass",category:"Glass Balustrades",img:"/assets/gallery-4.webp"},
 {title:"Architectural Staircase",category:"Custom Staircases",img:"/assets/gallery-5.webp"},
 {title:"Floating Stair Design",category:"Custom Staircases",img:"/assets/gallery-6.webp"}
];
const paths=["/","/about","/services","/gallery","/videos","/faq","/contact"], labels=["Home","About","Services","Gallery","Videos","FAQ","Contact"];
const wa=(msg)=>"https://wa.me/"+PHONE+"?text="+encodeURIComponent(msg||"Hello STAIREVO, I would like a quotation.");
const pic=(url,alt,loading)=>'<img src="'+url+'" alt="'+alt+'" loading="'+(loading||"lazy")+'" onerror="this.style.display=\'none\'"/>';
const btn=(to,text,cls)=>'<a class="btn '+(cls||"primary")+'" href="'+to+'" data-route>'+text+'</a>';
const heading=(kicker,title,desc,center)=>'<div class="section-heading '+(center?"center":"")+' reveal"><div class="eyebrow">'+kicker+'</div><h2 class="title type-head" data-text="'+escapeHtml(title)+'">'+escapeHtml(title)+'</h2><p class="lead">'+desc+'</p></div>';
const escapeHtml=(s)=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const photoCard=(p)=>'<div class="photo-tile reveal">'+pic(p.img,p.title)+'<label>'+escapeHtml(p.title)+'</label></div>';
function header(path){
 return '<header class="nav-wrap"><div class="container"><a data-route href="/" class="nav-brand"><img class="brand-icon" src="/assets/brand.svg" alt="STAIREVO emblem"/><div><div class="brand-name">STAIR<b>EVO</b></div><div class="brand-sub">STEEL & GLASS ENGINEERING</div></div></a><nav class="links" aria-label="Primary navigation">'+paths.map((p,i)=>'<a data-route class="'+(path===p?'active':'')+'" href="'+p+'">'+labels[i]+'</a>').join('')+'</nav><a class="btn primary nav-cta" data-route href="/contact">GET A QUOTE ↗</a><button class="menu-btn" id="menu-toggle" aria-label="Open mobile menu">☰</button></div></header><div class="mobile-panel" id="mobile-panel"><button class="close" id="menu-close" aria-label="Close mobile menu">×</button><div class="brand-name" style="margin:8px 0 26px">STAIR<b>EVO</b></div>'+paths.map((p,i)=>'<a data-route href="'+p+'">'+labels[i]+'</a>').join('')+'</div>';
}
function footer(){
 return '<footer class="footer"><div class="container"><div class="footer-grid"><div><a href="/" data-route class="nav-brand"><img class="brand-icon" src="/assets/stairevo-emblem.webp" alt="" onerror="this.src=\'/assets/brand.svg\'"/><div><div class="brand-name">STAIR<b>EVO</b></div><div class="brand-sub">STEEL & GLASS ENGINEERING</div></div></a><p>Balustrades, staircases and construction projects with a contemporary focus on quality, safety and design.</p><p>Made for modern spaces. Built to last.</p></div><div><h3>Explore</h3>'+paths.slice(0,6).map((p,i)=>'<a data-route href="'+p+'">'+labels[i]+'</a>').join('')+'</div><div><h3>What We Do</h3>'+services.slice(0,5).map(s=>'<a data-route href="/services">'+s.t+'</a>').join('')+'</div><div><h3>Get in Touch</h3><a href="tel:+27616107379">+27 61 610 7379</a><a href="https://wa.me/'+PHONE+'" target="_blank" rel="noopener">WhatsApp Us</a><a href="mailto:'+MAIL+'">'+MAIL+'</a><a href="https://'+WEB+'" target="_blank" rel="noopener">'+WEB+'</a></div></div><div class="footer-bottom"><span>© '+new Date().getFullYear()+' STAIREVO. All rights reserved.</span><span>Website designed by <a href="https://www.webdevpro.co.za/" target="_blank" rel="noopener noreferrer">WebDevPro</a></span></div></div></footer>';
}
function floating(){
 return '<div class="chat-teaser" id="chat-teaser" hidden><strong>Need a staircase or balustrade quote?</strong><br/>Tell us about your project on WhatsApp. <button id="teaser-close" aria-label="Close welcome message" style="background:none;border:0;position:absolute;top:4px;right:5px">×</button></div><button class="chat-bubble" id="chat-toggle" aria-label="Open quotation assistant">✆</button><div class="chat-panel" id="chat-panel"><div class="chat-head">STAIREVO Project Assistant <button id="chat-close" aria-label="Close chat" style="float:right;color:white;background:none;border:0;font-size:20px">×</button><div style="font-size:11px;font-weight:400;opacity:.75;margin-top:5px">Your details open a WhatsApp enquiry</div></div><form class="chat-body" id="chat-form"><input required name="name" placeholder="Your name" maxlength="100"/><input required name="phone" type="tel" placeholder="Contact number" maxlength="30"/><select required name="service"><option value="">Select the service needed</option>'+services.map(s=>'<option>'+s.t+'</option>').join('')+'</select><textarea required name="message" placeholder="Tell us about your project" maxlength="1000"></textarea><button class="btn primary" type="submit">CONTINUE ON WHATSAPP ↗</button></form></div><button class="pwa-btn" id="install-btn">Install STAIREVO App ↓</button><nav class="mobile-bottom" aria-label="Mobile quick navigation"><a href="/" data-route><b>⌂</b>Home</a><a href="/services" data-route><b>▥</b>Services</a><a href="/gallery" data-route><b>▧</b>Gallery</a><a href="/contact" data-route><b>✉</b>Contact</a><a href="'+wa()+'" target="_blank" rel="noopener"><b>✆</b>WhatsApp</a></nav>';
}
function hero(){
 return '<section class="hero" aria-label="STAIREVO featured services"><div id="slides">'+slides.map((s,i)=>'<div class="hero-slide '+(i===0?'active':'')+'"><div class="hero-fallback"></div>'+pic(s.img,s.title+" "+s.accent,i===0?'eager':'lazy')+'</div>').join('')+'</div><div class="hero-shade"></div><div class="container"><div class="hero-copy"><div class="hero-kicker" id="hero-tag">'+slides[0].tag+'</div><h1><span id="hero-title">'+slides[0].title+'</span><span class="typed cursor" id="hero-accent" aria-live="polite"></span></h1><div class="hero-desc" id="hero-desc" aria-live="polite"></div><div class="hero-cta">'+btn('/gallery','VIEW OUR WORK ↗')+btn('/contact','GET A FREE QUOTE','ghost')+'</div></div></div><div class="slide-controls container"><div class="slide-pips">'+slides.map((_,i)=>'<button data-slide="'+i+'" aria-label="View slide '+(i+1)+'" class="'+(i===0?'active':'')+'"></button>').join('')+'</div><div class="arrow-group"><button id="slide-prev" aria-label="Previous slide">‹</button><button id="slide-next" aria-label="Next slide">›</button><button id="slide-pause" aria-label="Pause slider">Ⅱ</button></div></div></section>';
}
function stats(){
 let a=[["◈","GLASS & STEEL EXPERTISE"],["⌁","CUSTOM DESIGNS"],["⚙","FABRICATION & INSTALLATION"],["⌂","RESIDENTIAL & COMMERCIAL"]];
 return '<div class="statsbar"><div class="container statsgrid">'+a.map(x=>'<div class="stat"><span class="symbol">'+x[0]+'</span><strong>'+x[1]+'</strong></div>').join('')+'</div></div>';
}
function serviceCards(full){
 return '<div class="cards">'+(full?services:services.slice(0,3)).map((s,i)=>'<article class="service-card reveal"><div class="card-photo"><div class="fallback"></div>'+pic(s.img,s.t)+'</div><div class="card-info"><span class="num">SERVICE '+String(i+1).padStart(2,'0')+'</span><h3>'+s.t+'</h3><p>'+s.txt+'</p><a href="/contact" data-route>ASK FOR A QUOTE ↗</a></div></article>').join('')+'</div>';
}
function flips(){
 return '<div class="cards">'+[
 ["◇","DESIGN","Clean architectural details and a modern finish.","Designed around your project requirements, with materials and proportions selected to complement the space."],
 ["⚙","CRAFT","Thoughtful metalwork, glasswork and installation.","Discuss materials, dimensions and site conditions so each installation can be planned carefully."],
 ["✦","SAFETY","Built with practical use in mind.","Balustrades and staircases require appropriate measurements, secure fixing and compliance with applicable requirements."]
 ].map(x=>'<div class="flip reveal" tabindex="0" role="button" aria-label="'+x[1]+' — flip for more information"><div class="flip-inner"><div class="flip-face"><div class="medal">'+x[0]+'</div><h3>'+x[1]+'</h3><p>'+x[2]+'</p><small style="margin-top:22px;color:#a27f39;font-weight:700">HOVER OR TAP TO EXPLORE ↻</small></div><div class="flip-face flip-back"><div class="medal">'+x[0]+'</div><h3>'+x[1]+' MATTERS</h3><p>'+x[3]+'</p></div></div></div>').join('')+'</div>';
}
function cta(){
 return '<section class="pale-band"><div class="container split"><div class="reveal"><div class="eyebrow">LET’S BUILD SOMETHING EXCEPTIONAL</div><h2 class="type-head" data-text="Your project deserves a remarkable finish.">Your project deserves a remarkable finish.</h2><p>Speak to STAIREVO about balustrades, staircases, fabrication or a construction project.</p></div><div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center" class="reveal">'+btn('/contact','REQUEST A QUOTATION ↗')+'<a class="btn ghost" href="'+wa()+'" target="_blank" rel="noopener">CHAT ON WHATSAPP ↗</a></div></div></section>';
}
function home(){
 return hero()+stats()+'<section class="section"><div class="container split"><div class="feature-visual reveal">'+pic('/assets/gallery-1.webp','Modern glass staircase')+'<div class="visual-stamp">DESIGNED TO ELEVATE<br/><span class="gold">EVERY SPACE.</span></div></div><div>'+heading('WELCOME TO STAIREVO','Steel, glass and staircase craftsmanship','STAIREVO specialises in balustrades, staircases and construction-related engineering for homes and commercial properties. Our focus is contemporary design, practical detailing and a professional installation experience.')+'<div class="tick">Custom staircase solutions</div><div class="tick">Glass and stainless-steel balustrades</div><div class="tick">Steel fabrication and construction</div><div style="margin-top:26px">'+btn('/about','MORE ABOUT US ↗')+'</div></div></div></section>'+
 '<section class="section pale"><div class="container">'+heading('OUR EXPERTISE','Solutions for outstanding spaces','From elegant glass finishes to precision metalwork, explore what we can create together.',true)+serviceCards(false)+'<p style="text-align:center;margin-top:32px">'+btn('/services','EXPLORE ALL SERVICES ↗')+'</p></div></section>'+
 '<section class="section"><div class="container">'+heading('THE STAIREVO DIFFERENCE','Purpose-built for your vision','Every project is unique. Flip the cards to learn how we approach our work.',true)+flips()+'</div></section>'+
 '<section class="section pale"><div class="container">'+heading('SELECTED INSTALLATIONS','A closer look at our work','Project photographs supplied for STAIREVO — explore stairs, glass and metalwork.',false)+'<div class="grid-photo">'+gallery.slice(0,3).map(photoCard).join('')+'</div><p style="text-align:center;margin-top:27px">'+btn('/gallery','EXPLORE FULL GALLERY ↗')+'</p></div></section>'+cta();
}
function pageHero(k,t,d){
 return '<section class="content-hero"><div class="container" style="position:relative;z-index:1"><div class="hero-kicker">'+k+'</div><h1 class="type-head" data-text="'+escapeHtml(t)+'">'+escapeHtml(t)+'</h1><p class="type-desc" data-text="'+escapeHtml(d)+'">'+escapeHtml(d)+'</p></div></section>';
}
function about(){
 return pageHero('ABOUT STAIREVO','Built around design. Grounded in craftsmanship.','Discover a company focused on contemporary staircases, durable metalwork and beautiful glass balustrading.')+
 '<section class="section"><div class="container split"><div class="feature-visual reveal">'+pic('/assets/gallery-6.webp','Architectural staircase detail')+'<div class="visual-stamp">MODERN LINES.<br/><span class="gold">ENDURING STYLE.</span></div></div><div>'+heading('WHO WE ARE','STAIREVO Steel & Glass Engineering','We provide balustrading, staircase and construction solutions with an emphasis on modern design, finishing details and tailored service. From interiors to balconies, every project begins by understanding your space.')+'<div class="tick">Professional installations</div><div class="tick">Custom designs and metalwork</div><div class="tick">Residential and commercial solutions</div></div></div></section>'+
 '<section class="section pale"><div class="container">'+heading('OUR APPROACH','Design. Plan. Create.','Simple communication, a thoughtful design process and practical solutions.',true)+flips()+'</div></section>'+cta();
}
function servicesPage(){
 return pageHero('EXPERTISE','Our Services','Balustrading, architectural stairs, steel fabrication and construction solutions.')+
 '<section class="section pale"><div class="container">'+heading('WHAT WE DO','Craftsmanship across materials','Browse our services and tell us what you have in mind.',true)+serviceCards(true)+'</div></section>'+
 '<section class="section"><div class="container split"><div>'+heading('HOW TO GET STARTED','Request your personalised quotation','Share the type of installation you need, approximate dimensions if known and photos of the location. We can discuss next steps from there.')+'<div class="tick">Tell us about your project</div><div class="tick">Discuss measurements and materials</div><div class="tick">Agree on the quotation and installation plan</div><div style="margin-top:26px">'+btn('/contact','GET IN TOUCH ↗')+'</div></div><div class="feature-visual reveal">'+pic('/assets/gallery-2.webp','Stainless-steel balustrade installation')+'</div></div></section>'+cta();
}
function galleryPage(){
 return pageHero('PHOTO GALLERY','Project Gallery','Explore stairs, glass balustrades, stainless-steel railings and architectural details.')+
 '<section class="section pale"><div class="container"><div class="gallery-filter" id="gallery-filter"><button class="active" data-filter="all">ALL PROJECTS</button><button data-filter="Glass">GLASS</button><button data-filter="Steel">STAINLESS STEEL</button><button data-filter="Stair">STAIRCASES</button></div><div class="grid-photo" id="gallery-grid">'+gallery.map(photoCard).join('')+'</div><p class="lead" style="margin-top:25px">Ask us about specific materials or installations shown in these images.</p></div></section>'+cta();
}
function videosPage(){
 return pageHero('PROJECT VIDEOS','See the craftsmanship in motion','A closer look at staircase designs, construction work and project details.')+
 '<section class="section"><div class="container">'+heading('BEHIND THE DESIGN','Videos from the workshop and job site','Explore the two project videos provided for the STAIREVO website.',true)+'<div class="video-grid">'+[
 ['1','Staircase Installation & Fabrication'],['2','Construction & Staircase Progress']
 ].map(x=>'<div class="video-card reveal"><video controls playsinline preload="metadata" poster="/assets/gallery-'+x[0]+'.webp"><source src="/assets/project-'+x[0]+'.webm" type="video/webm"/>Video playback is not available in this browser.</video><div class="video-caption">'+x[1]+'</div></div>').join('')+'</div></div></section>'+cta();
}
const FAQs=[
 ["What services does STAIREVO offer?","We specialise in glass and stainless-steel balustrades, custom staircases, steel fabrication and selected construction projects."],
 ["Can I request a custom staircase?","Yes. Share photos of your space, your design preferences and any measurements you already have. We can discuss the requirements and quotation process."],
 ["Do you install both glass and stainless-steel balustrades?","Yes. We work with both glass and stainless-steel balustrading solutions, depending on the project and design requirements."],
 ["Do you work on residential and commercial properties?","Yes. The company offers solutions for residential and commercial projects. Contact us to discuss your specific site."],
 ["How do I get a quote?","Use the form on the Contact page or send us a WhatsApp message at +27 61 610 7379 with details and photos of your project."],
 ["Do you provide installation services?","Yes. Fabrication and installation form part of our service offering. Exact scope and scheduling depend on the project."],
 ["Can you help with balcony and poolside railings?","We offer glass balustrading and railing solutions for different architectural settings. Site requirements and applicable safety regulations must be assessed."],
 ["What is the best way to contact you?","Call or WhatsApp +27 61 610 7379, or email info@stairevo.co.za."]
];
function faq(){
 return pageHero('FREQUENTLY ASKED QUESTIONS','Helpful answers','Find answers to common questions about our staircase and balustrading solutions.')+
 '<section class="section"><div class="container"><div class="faq-list">'+FAQs.map((f,i)=>'<div class="faq-item reveal"><button data-faq="'+i+'" aria-expanded="false">'+f[0]+'<span class="gold">＋</span></button><div class="answer" hidden>'+f[1]+'</div></div>').join('')+'</div></div></section>'+cta();
}
function contact(){
 return pageHero('LET’S TALK','Your project starts here','Tell us what you are planning and our team can discuss the next step with you.')+
 '<section class="section pale"><div class="container contact-grid"><div class="contact-box reveal"><div class="eyebrow">CONTACT STAIREVO</div><h2 style="font:800 32px Manrope">Discuss your project</h2><p style="line-height:1.85;color:#ccd4de">Contact us for staircase and balustrading enquiries, fabrication solutions or installation questions.</p><a href="tel:+27616107379"><small>Call us</small>+27 61 610 7379</a><a href="'+wa()+'" target="_blank" rel="noopener"><small>WhatsApp</small>Chat with STAIREVO ↗</a><a href="mailto:'+MAIL+'"><small>Email</small>'+MAIL+'</a><a href="https://'+WEB+'" target="_blank" rel="noopener"><small>Website</small>'+WEB+'</a></div><div class="reveal"><div class="eyebrow">REQUEST AN ESTIMATE</div><h2 class="title type-head" data-text="Tell us what you have in mind">Tell us what you have in mind</h2><p class="lead">The form prepares your enquiry and opens WhatsApp, where you can review and send it.</p><form class="form" id="contact-form"><div class="pair"><div><label for="name">Full name</label><input id="name" name="name" required maxlength="100"/></div><div><label for="phone">Phone number</label><input id="phone" type="tel" name="phone" required maxlength="30"/></div></div><div class="pair"><div><label for="email">Email</label><input id="email" type="email" name="email" maxlength="140"/></div><div><label for="service">Service required</label><select id="service" name="service" required><option value="">Choose a service</option>'+services.map(s=>'<option>'+s.t+'</option>').join('')+'</select></div></div><div><label for="message">Project details</label><textarea id="message" name="message" required maxlength="1500" placeholder="Describe the work, location and approximate dimensions, if available."></textarea></div><label style="font-weight:500"><input name="consent" type="checkbox" required style="width:auto;vertical-align:middle"/> I agree that my details will be shared via WhatsApp to respond to my enquiry.</label><button type="submit" class="btn primary">SEND ENQUIRY VIA WHATSAPP ↗</button></form></div></div></section>';
}
const pageMeta={"/":"Balustrades & Staircases","/about":"About","/services":"Services","/gallery":"Our Projects","/videos":"Project Videos","/faq":"FAQ","/contact":"Contact"};
function render(){
 const path=location.pathname.replace(/\/+$/,"")||"/";
 const r=({"/":home,"/about":about,"/services":servicesPage,"/gallery":galleryPage,"/videos":videosPage,"/faq":faq,"/contact":contact})[path];
 const content=r?r():pageHero('PAGE NOT FOUND','404 — We could not find this page','Visit the home page or contact STAIREVO for assistance.')+cta();
 document.title=(pageMeta[path]||"Not Found")+" | STAIREVO — Steel & Glass Engineering";
 document.getElementById("app").innerHTML=header(path)+"<main id='main'>"+content+"</main>"+footer()+floating();
 bindCommon();
 initMotion();
 if(path==="/")initSlides();
 if(path==="/gallery")initGallery();
 if(path==="/faq")initFAQ();
 window.scrollTo({top:0,behavior:"instant"});
}
function bindCommon(){
 document.querySelectorAll("[data-route]").forEach(a=>a.addEventListener("click",e=>{if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;const href=a.getAttribute("href");if(!href||!href.startsWith("/"))return;e.preventDefault();history.pushState({},"",href);render()}));
 const open=document.getElementById("menu-toggle"),panel=document.getElementById("mobile-panel"),close=document.getElementById("menu-close");
 if(open)open.onclick=()=>panel.classList.add("open");if(close)close.onclick=()=>panel.classList.remove("open");
 document.querySelectorAll(".flip").forEach(el=>{el.addEventListener("click",()=>el.classList.toggle("flipped"));el.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();el.classList.toggle("flipped")}})});
 const form=document.getElementById("contact-form");
 if(form)form.addEventListener("submit",e=>{e.preventDefault();if(!form.reportValidity())return;const f=new FormData(form);const text="Hello STAIREVO, I would like to request a quotation.\nName: "+f.get("name")+"\nPhone: "+f.get("phone")+"\nEmail: "+(f.get("email")||"-")+"\nService: "+f.get("service")+"\nProject details: "+f.get("message");window.open(wa(text),"_blank","noopener,noreferrer")});
 const chatToggle=document.getElementById("chat-toggle"),chatPanel=document.getElementById("chat-panel"),teaser=document.getElementById("chat-teaser");
 chatToggle.onclick=()=>{chatPanel.classList.toggle("open");teaser.hidden=true};
 document.getElementById("chat-close").onclick=()=>chatPanel.classList.remove("open");
 document.getElementById("chat-form").addEventListener("submit",e=>{e.preventDefault();const f=new FormData(e.currentTarget);window.open(wa("Hello STAIREVO, I would like a quotation.\nName: "+f.get("name")+"\nPhone: "+f.get("phone")+"\nService: "+f.get("service")+"\nProject: "+f.get("message")),"_blank","noopener,noreferrer")});
 document.getElementById("teaser-close").onclick=()=>{teaser.hidden=true;sessionStorage.setItem("stairevo-teaser-dismissed","1")};
 if(!sessionStorage.getItem("stairevo-teaser-dismissed"))setTimeout(()=>{if(document.body.contains(teaser)&&!chatPanel.classList.contains("open"))teaser.hidden=false},5500);
 if(window.__deferredInstall){const b=document.getElementById("install-btn");b.style.display="block";b.onclick=async()=>{window.__deferredInstall.prompt();await window.__deferredInstall.userChoice;window.__deferredInstall=null;b.style.display="none"}}
}
let heroInterval,typingTimers=[];
function typeIn(el,text,speed,cb){
 if(!el)return;
 const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 if(reduced){el.textContent=text;cb&&cb();return}
 el.textContent="";let i=0;
 function step(){if(!document.body.contains(el))return;el.textContent=text.slice(0,++i);if(i<text.length)typingTimers.push(setTimeout(step,speed));else if(cb)cb()}
 step()
}
function initSlides(){
 const pictures=[...document.querySelectorAll(".hero-slide")],pips=[...document.querySelectorAll("[data-slide]")];let current=0,paused=false;
 function show(i){current=(i+slides.length)%slides.length;const d=slides[current];pictures.forEach((x,j)=>x.classList.toggle("active",j===current));pips.forEach((x,j)=>x.classList.toggle("active",j===current));document.getElementById("hero-tag").textContent=d.tag;document.getElementById("hero-title").textContent=d.title;typingTimers.forEach(clearTimeout);typingTimers=[];typeIn(document.getElementById("hero-accent"),d.accent,37);typeIn(document.getElementById("hero-desc"),d.desc,15)}
 pips.forEach((x,i)=>x.onclick=()=>show(i));document.getElementById("slide-prev").onclick=()=>show(current-1);document.getElementById("slide-next").onclick=()=>show(current+1);
 document.getElementById("slide-pause").onclick=e=>{paused=!paused;e.currentTarget.textContent=paused?"▶":"Ⅱ";e.currentTarget.setAttribute("aria-label",paused?"Resume slider":"Pause slider")};
 clearInterval(heroInterval);heroInterval=setInterval(()=>{if(!paused&&document.getElementById("slides"))show(current+1)},6900);show(0)
}
function initGallery(){
 document.querySelectorAll("[data-filter]").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll("[data-filter]").forEach(x=>x.classList.toggle("active",x===b));const category=b.dataset.filter;document.getElementById("gallery-grid").innerHTML=gallery.filter(g=>category==="all"||g.category.includes(category)).map(photoCard).join('');initMotion()}))
}
function initFAQ(){
 document.querySelectorAll("[data-faq]").forEach(b=>b.onclick=()=>{const answer=b.nextElementSibling;const expanded=b.getAttribute("aria-expanded")==="true";b.setAttribute("aria-expanded",String(!expanded));answer.hidden=expanded;b.querySelector("span").textContent=expanded?"＋":"−"})
}
function initMotion(){
 const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;
 const els=[...document.querySelectorAll(".reveal")];
 if(reduced||!window.IntersectionObserver){els.forEach(e=>e.classList.add("visible"));return}
 const obs=new IntersectionObserver(entries=>entries.forEach(en=>{if(en.isIntersecting){en.target.classList.add("visible");obs.unobserve(en.target)}}),{threshold:.08});
 els.forEach(e=>obs.observe(e));
 document.querySelectorAll(".type-head").forEach(el=>{const value=el.getAttribute("data-text")||el.textContent; if(reduced)return;el.style.minHeight="1.2em";const o=new IntersectionObserver(entries=>{entries.forEach(en=>{if(en.isIntersecting){o.disconnect();typeIn(el,value,22)}})},{threshold:.15});o.observe(el)});
 document.querySelectorAll(".type-desc").forEach(el=>{const value=el.getAttribute("data-text")||el.textContent;if(reduced)return;const o=new IntersectionObserver(entries=>entries.forEach(en=>{if(en.isIntersecting){o.disconnect();typeIn(el,value,13)}}),{threshold:.15});o.observe(el)})
}
window.addEventListener("popstate",render);
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();window.__deferredInstall=e;const b=document.getElementById("install-btn");if(b){b.style.display="block";b.onclick=async()=>{e.prompt();await e.userChoice;window.__deferredInstall=null;b.style.display="none"}}});
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("/sw.js").catch(()=>{}));
render();
})();