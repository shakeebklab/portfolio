import {useEffect,useState,type FormEvent} from 'react';
import {motion} from 'framer-motion';
import {Home,BriefcaseBusiness,Layers3,MessageCircle,Menu,X,ArrowRight,ArrowUp,Code2,Smartphone,Database,Send} from 'lucide-react';
import githubIcon from '../icons/Github_white.svg';
import instagramIcon from '../icons/Instagram_white.svg';
import linkedInIcon from '../icons/LinkedIN_white.svg';
import mailIcon from '../icons/Mail_white.svg';
import phoneIcon from '../icons/Phone_white.svg';
import whatsAppIcon from '../icons/WhatsApp_white.svg';
import wajbaBanner from '../ref_video/wajba.png';
import siinBanner from '../ref_video/siin.png';
import visitBahrainBanner from '../ref_video/visit_bahrain.png';
import aljunobyaBanner from '../ref_video/aljunobya.png';

const nav=[['home','Home',Home],['features','Features',Layers3],['skills','Skills',Code2],['portfolio','Portfolio',BriefcaseBusiness],['experience','Experience',BriefcaseBusiness],['contact','Contact',MessageCircle]] as const;
const reveal={initial:{opacity:0,y:35},whileInView:{opacity:1,y:0},viewport:{once:true,amount:.15},transition:{duration:.65}};
const features=[['01.','Flutter Applications','Pixel-accurate Android and iOS products built from one maintainable codebase.',Smartphone],['02.','Scalable Architecture','Bloc, Riverpod, Provider, GetX and MVVM patterns that grow with the product.',Code2],['03.','Product Integrations','REST APIs, Firebase, maps, payments, analytics and real-time features.',Database]] as const;
const work=[
  {name:'Wajba',banner:wajbaBanner,category:'Food Rescue & Delivery',type:'app',summary:'A mobile-first food rescue and delivery experience that connects surplus meals with people who need them.',detail:'Built as a polished cross-platform product with reliable ordering flows, real-time updates and scalable API integrations.',playStore:'https://play.google.com/store/apps/details?id=com.wajba.app&hl=en',appStore:'https://apps.apple.com/us/app/wajba-save-fresh-meals/id6740336691'},
  {name:'Siin',banner:siinBanner,category:'Live Commerce',type:'app',summary:'An engaging live-commerce experience designed around product discovery, streaming and fast checkout.',detail:'The application combines real-time interaction with a clean shopping journey and production-ready mobile architecture.',playStore:'https://play.google.com/store/search?q=Siin&c=apps',appStore:'https://apps.apple.com/us/app/siin-%D8%B3%D9%8A%D9%86/id6451072889'},
  {name:'Visit Bahrain',banner:visitBahrainBanner,category:'Travel & Tourism',type:'app',summary:'A destination discovery experience for exploring attractions, culture and memorable journeys across Bahrain.',detail:'Responsive presentation, structured destination content and intuitive navigation make trip planning simple on every screen.',playStore:'https://play.google.com/store/apps/details?id=com.btea.tg&hl=en',appStore:'https://apps.apple.com/us/app/visit-bahrain/id1136770500'},
  {name:'Aljunobya',banner:aljunobyaBanner,category:'Digital Government',type:'app',summary:'A clear digital-services platform that makes public information and essential citizen journeys easier to access.',detail:'Designed for clarity and trust with responsive interfaces, accessible content patterns and dependable integrations.',playStore:'https://play.google.com/store/apps/details?id=com.klabs.southerngovernorate&hl=en',appStore:'https://apps.apple.com/us/app/aljunobya/id1480147210'}
] as const;
const skills=[
  ['Core Mobile Development','Flutter, Dart, cross-platform mobile development, Android Studio and VS Code.'],
  ['State Management & Architecture','Bloc, Riverpod, Provider, GetX, MVVM and MVC.'],
  ['Integrations & Backend','REST APIs, Firebase Authentication, Firebase Analytics, Google Maps API and Zoom SDK.'],
  ['Data Storage & Payments','Hive, Sqflite, Apple Pay, Stripe and Tap Pay.'],
  ['DevOps & Engineering Tools','Git, GitHub, Mixpanel, Shorebird Code Push, Python and JavaScript.'],
  ['AI & Productivity Tools','Claude, ChatGPT, Grok, Cursor, Gemini and Codex.'],
  ['Web Development','React and TypeScript for responsive, modern web experiences.']
];
const roles=['Mobile App Developer','Website Developer','Freelancer'];

function Typewriter({text}:{text:string|string[]}){
  const[value,setValue]=useState('');
  useEffect(()=>{
    let frame=0;
    let started=performance.now();
    const words=Array.isArray(text)?text:[text];
    let wordIndex=0;
    const typeTime=1050, holdTime=1500, deleteTime=650, restTime=280;
    const loop=(now:number)=>{
      const elapsed=(now-started)%(typeTime+holdTime+deleteTime+restTime);
      const word=words[wordIndex%words.length];
      let length=0;
      if(elapsed<typeTime) length=Math.min(word.length,Math.floor((elapsed/typeTime)*word.length)+1);
      else if(elapsed<typeTime+holdTime) length=word.length;
      else if(elapsed<typeTime+holdTime+deleteTime) length=Math.max(0,word.length-Math.floor(((elapsed-typeTime-holdTime)/deleteTime)*word.length)-1);
      else if(value===''&&words.length>1){wordIndex=(wordIndex+1)%words.length;started=now}
      setValue(current=>current.length===length&&current===word.slice(0,length)?current:word.slice(0,length));
      frame=requestAnimationFrame(loop);
    };
    const delay=window.setTimeout(()=>{started=performance.now();frame=requestAnimationFrame(loop)},350);
    return()=>{window.clearTimeout(delay);cancelAnimationFrame(frame)};
  },[text]);
  return <span className="typed-text">{value}<i aria-hidden="true"/></span>;
}

function BrandIcon({name}:{name:string}){if(name==='Instagram')return <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" className="social-dot"/></svg>;if(name==='LinkedIn')return <svg viewBox="0 0 24 24"><path d="M6 9v9M6 6.5v.01M10 18v-9m0 4c1-5 8-5 8 1v4"/></svg>;if(name==='GitHub')return <svg viewBox="0 0 24 24"><path d="M15 22v-4c.1-1-.4-1.8-1-2 3 0 6-1.5 6-6a4.7 4.7 0 0 0-1.3-3.3A4.5 4.5 0 0 0 18.6 3S17.5 2.7 15 4.3a13 13 0 0 0-6 0C6.5 2.7 5.4 3 5.4 3a4.5 4.5 0 0 0-.1 3.7A4.7 4.7 0 0 0 4 10c0 4.5 3 6 6 6-.6.2-1.1 1-1 2v4M9 19c-3 .9-3-1.5-4-2"/></svg>;if(name==='Twitter')return <svg viewBox="0 0 24 24" className="brand-fill"><path d="M21 6.2c-.7.3-1.4.5-2.2.6a3.8 3.8 0 0 0 1.7-2.1c-.8.5-1.6.8-2.5 1a3.8 3.8 0 0 0-6.6 2.6c0 .3 0 .6.1.9A10.8 10.8 0 0 1 3.7 5.3a3.8 3.8 0 0 0 1.2 5.1c-.6 0-1.2-.2-1.7-.5 0 1.9 1.4 3.5 3.1 3.8-.3.1-.7.2-1 .2-.2 0-.5 0-.7-.1a3.8 3.8 0 0 0 3.6 2.7A7.7 7.7 0 0 1 3.5 18H2.6a10.8 10.8 0 0 0 5.8 1.7c7 0 10.8-5.8 10.8-10.8v-.5c.7-.5 1.3-1.2 1.8-2.2z"/></svg>;if(name==='Facebook')return <svg viewBox="0 0 24 24" className="brand-fill"><path d="M14 8h3V4h-3c-3 0-5 2-5 5v2H6v4h3v7h4v-7h3l1-4h-4V9c0-.7.3-1 1-1z"/></svg>;if(name==='WhatsApp')return <svg viewBox="0 0 24 24"><path d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4A8 8 0 1 1 20 11.7z"/><path d="M9 8.5c.5 2.8 2 4.3 4.8 5l1.2-1.2 2 .9c-.2 1.5-1 2.3-2.5 2.3-4.2-.5-7.5-3.8-8-8 0-1.5.8-2.3 2.3-2.5l.9 2z"/></svg>;return <svg viewBox="0 0 24 24" className="brand-fill"><path d="M14 3v11.2a4.7 4.7 0 1 1-4-4.6v3.3a1.6 1.6 0 1 0 1 1.5V3h3c.4 2.2 1.7 3.5 4 3.8v3.1a8 8 0 0 1-4-1.2V3z"/></svg>}
const socialIcons:Record<string,string>={Instagram:instagramIcon,LinkedIn:linkedInIcon,GitHub:githubIcon,Email:mailIcon,WhatsApp:whatsAppIcon,Phone:phoneIcon};
const socialLinks:Record<string,string>={Instagram:'https://www.instagram.com/syed_shakeeb_01/',LinkedIn:'https://www.linkedin.com/in/syedshakeeb01/',GitHub:'https://github.com/shakeebklab',Email:'mailto:shakeeb12a@gmail.com',WhatsApp:'https://wa.me/923101301446',Phone:'tel:+923101301446',Twitter:'https://x.com/shakeeb_sm',Facebook:'https://www.facebook.com/shaoib.khan.3538/'};
function Socials({drawer=false}:{drawer?:boolean}){const names=drawer?['Instagram','LinkedIn','Twitter','WhatsApp']:['Instagram','LinkedIn','GitHub','Email','WhatsApp'];return <div className={`socials ${drawer?'drawer-socials':'home-socials'}`}>{names.map(name=><a href={socialLinks[name]} target={name==='Email'||name==='Phone'?'_self':'_blank'} rel="noreferrer" aria-label={name} key={name}>{!drawer&&socialIcons[name]?<img src={socialIcons[name]} alt=""/>:<BrandIcon name={name}/>}</a>)}</div>}
function ScrollProgress(){const[progress,setProgress]=useState(0);useEffect(()=>{let frame=0;const update=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{const max=document.documentElement.scrollHeight-window.innerHeight;setProgress(max>0?Math.min(1,Math.max(0,window.scrollY/max)):0)})};update();window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);return()=>{cancelAnimationFrame(frame);window.removeEventListener('scroll',update);window.removeEventListener('resize',update)}},[]);return <button className="scroll-progress" style={{'--scroll-fill':`${progress*100}%`} as React.CSSProperties} onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} aria-label={`Scroll progress ${Math.round(progress*100)} percent. Back to top`}><span className="scroll-water" aria-hidden="true"/><ArrowUp aria-hidden="true"/></button>}
function Title({overline,children,text}:{overline:string,children:React.ReactNode,text?:string}){return <motion.header className="section-title" {...reveal}><span>{overline}</span><h2>{children}</h2>{text&&<p>{text}</p>}</motion.header>}
function Sidebar({open,close}:{open:boolean,close:()=>void}){return <aside className={open?'open':''}><button className="menu close" onClick={close}><X/></button><a className="avatar" href="#home" onClick={close}><img src="/ref_video/image.png" alt="Syed Muhammad Shakeeb"/><span>SMS</span></a><nav>{nav.map(([id,label,Icon])=><a href={'#'+id} key={id} onClick={close}><Icon/><span>{label}</span></a>)}</nav><div className="social"><b>Find With Me</b><Socials drawer/></div></aside>}

function ContactForm({compact=false,onSent}:{compact?:boolean;onSent?:()=>void}){
  const[status,setStatus]=useState<'idle'|'sending'|'sent'|'error'>('idle');
  const submit=async(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    setStatus('sending');
    const form=event.currentTarget;
    try{
      const response=await fetch('https://formsubmit.co/ajax/shakeeb12a@gmail.com',{method:'POST',headers:{Accept:'application/json'},body:new FormData(form)});
      if(!response.ok)throw new Error('Message delivery failed');
      form.reset();
      setStatus('sent');
      onSent?.();
    }catch{
      setStatus('error');
    }
  };
  return <form onSubmit={submit} className={compact?'compact-contact-form':undefined}>
    <input name="name" aria-label="Your name" placeholder={compact?'Your Name':'Your name'} autoComplete="name" required/>
    <input name="email" aria-label="Your email" type="email" placeholder={compact?'Your Email':'Email address'} autoComplete="email" required/>
    <textarea name="message" aria-label="Your message" className={compact?undefined:'full'} placeholder={compact?'Your Message':'Your message'} required/>
    <input type="text" name="_honey" className="form-honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true"/>
    <input type="hidden" name="_subject" value="New portfolio message"/>
    <button type="submit" className={compact?undefined:'button primary full'} disabled={status==='sending'}>{status==='sending'?'Sending...':'Send Message'}{!compact&&<Send/>}</button>
    <p className={`form-status ${compact?'':'full'}`} role="status" aria-live="polite">{status==='sent'?'Thanks! Your message has been sent.':status==='error'?'Could not send the message. Please email me directly.':''}</p>
  </form>;
}

export function App(){const[open,setOpen]=useState(false);const[chatOpen,setChatOpen]=useState(false);const[selectedProject,setSelectedProject]=useState<(typeof work)[number]|null>(null);const[storePicker,setStorePicker]=useState(false);useEffect(()=>{const ss=document.querySelectorAll('section[id]');const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-35% 0px -55%'});ss.forEach(s=>o.observe(s));return()=>o.disconnect()},[]);useEffect(()=>{if(window.matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches)return;const cards=[...document.querySelectorAll<HTMLElement>('.feature-grid article,.skills-grid article,.education-card,.experience-visual,.project-card')];const cleanups=cards.map(card=>{const move=(event:PointerEvent)=>{const rect=card.getBoundingClientRect();const x=event.clientX-rect.left;const y=event.clientY-rect.top;const rx=((y/rect.height)-.5)*-9;const ry=((x/rect.width)-.5)*9;card.style.setProperty('--pointer-x',`${x}px`);card.style.setProperty('--pointer-y',`${y}px`);card.style.transform=`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-5px)`};const leave=()=>{card.style.transform='';card.style.removeProperty('--pointer-x');card.style.removeProperty('--pointer-y')};card.addEventListener('pointermove',move);card.addEventListener('pointerleave',leave);return()=>{card.removeEventListener('pointermove',move);card.removeEventListener('pointerleave',leave)}});return()=>cleanups.forEach(cleanup=>cleanup())},[]);useEffect(()=>{document.body.style.overflow=selectedProject?'hidden':'';return()=>{document.body.style.overflow=''}},[selectedProject]);const closeProject=()=>{setSelectedProject(null);setStorePicker(false)};const viewProject=()=>{if(selectedProject)setStorePicker(true)};return <>
  <button className="menu mobile" onClick={()=>setOpen(true)}><Menu/></button><Sidebar open={open} close={()=>setOpen(false)}/><ScrollProgress/><main>
  <section id="home" className="hero"><div className="stars" aria-hidden="true"/><div className="hero-photo"><img src="/ref_video/transparent_profile.png" alt="S M Shakeeb"/></div><motion.div className="hero-copy" initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.8}}><p className="kicker">HELLO, I'M</p><h1>S M Shakeeb</h1><h2>A <b><Typewriter text={roles}/></b></h2><a className="hero-button" href="#contact">Contact Me <ArrowRight/></a><Socials/></motion.div><a className="scroll" href="#features">SCROLL DOWN ↓</a></section>
  <section id="features"><Title overline="FEATURES" text="Clean engineering, thoughtful interactions and reliable delivery for polished mobile products.">What I Do</Title><div className="feature-grid">{features.map(([n,t,d,Icon],i)=><motion.article {...reveal} transition={{duration:.55,delay:i*.08}} key={t}><b>{n}</b><Icon/><h3>{t}</h3><p>{d}</p><ArrowRight className="go"/></motion.article>)}</div></section>
  <section id="skills"><Title overline="MY EXPERTISE" text="The technologies and tools I use to turn product ideas into dependable digital experiences.">Skills</Title><div className="skills-grid">{skills.map(([name,detail],i)=><motion.article {...reveal} transition={{duration:.5,delay:i*.06}} key={name}><span>{String(i+1).padStart(2,'0')}.</span><h3>{name}</h3><p>{detail}</p></motion.article>)}</div></section>
  <section id="portfolio"><Title overline="VISIT MY PORTFOLIO" text="Selected production work across sustainability, commerce, travel and public services.">My Portfolio</Title><div className="projects">{work.map((p,i)=><motion.article {...reveal} className="project-card" key={p.name} onClick={()=>setSelectedProject(p)} tabIndex={0} role="button" onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setSelectedProject(p)}}}><div className={'project-art art'+(i+1)}><div className="mock-phone"><span>{p.name[0]}</span></div></div><div className="project-info"><div><small>APP DEVELOPMENT</small><h3>{p.name}</h3><p>{p.category}</p></div><span className="project-open" aria-hidden="true"><ArrowRight/></span></div></motion.article>)}</div></section>
  <section id="experience" className="career"><Title overline="EDUCATION & EXPERIENCE" text="A foundation in software engineering, strengthened by hands-on experience delivering production-ready mobile applications.">Empowering Ideas Through Technology</Title><div className="education-block"><h3>Education</h3><motion.article className="education-card" {...reveal}><div><span>FEB 2022 — FEB 2026</span><h4>Software Engineering</h4><strong>University of Karachi · Karachi, Pakistan</strong></div><p>Built a strong foundation in software design, problem solving and collaborative product development, with a focus on creating dependable digital experiences.</p></motion.article></div><div className="experience-block"><div className="experience-copy"><h3>Experience</h3><motion.article className="experience-entry" {...reveal}><span>EXPERIENCE</span><h4>K-Labs Technologies Solution</h4><strong>Flutter Developer · Sep 2024 — Present</strong><p>Engineering, testing and deploying cross-platform applications with remote agile teams, integrating APIs, maps, payments, analytics and real-time features.</p></motion.article><motion.article className="experience-entry" {...reveal}><span>EXPERIENCE</span><h4>Quanrio</h4><strong>Trainee Flutter Developer · Mar 2024 — Jun 2024</strong><p>Designed interactive Flutter features, researched mobile best practices and partnered with QA to resolve bugs and improve application quality.</p></motion.article></div><motion.div className="experience-visual" {...reveal}><div className="experience-glow"/><img src="/ref_video/experience.png" alt="Syed Muhammad Shakeeb, Flutter developer"/><div className="experience-badge"><b>2+</b><span>Years of<br/>experience</span></div></motion.div></div></section>
  <section id="contact"><motion.div className="contact-card" {...reveal}><div><span className="kicker">CONTACT</span><h2>Let's work together.</h2><p>Have a mobile product or opportunity in mind? Tell me about it.</p><a href="mailto:shakeeb12a@gmail.com">shakeeb12a@gmail.com</a></div><ContactForm/></motion.div></section><footer>© 2026 Syed Muhammad Shakeeb — Flutter Mobile Developer</footer></main>{chatOpen&&<motion.section className="chat-dialog" role="dialog" aria-modal="false" aria-labelledby="chat-title" initial={{opacity:0,y:18,scale:.96}} animate={{opacity:1,y:0,scale:1}}><header id="chat-title">Let's chat with me? - Online</header><p>Please fill out the form below to start<br/> chatting with me directly.</p><ContactForm compact/></motion.section>}<button className={`chat ${chatOpen?'is-open':''}`} onClick={()=>setChatOpen(value=>!value)} aria-expanded={chatOpen} aria-controls="chat-title" aria-label={chatOpen?'Close chat':'Open chat'}>{chatOpen?<X/>:<MessageCircle/>}</button>{selectedProject&&<div className="modal-backdrop" role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)closeProject()}}><motion.div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" initial={{opacity:0,scale:.94,y:24}} animate={{opacity:1,scale:1,y:0}}><button className="modal-close" onClick={closeProject} aria-label="Close project details"><X/></button><div className={'modal-art art'+(work.indexOf(selectedProject)+1)}><div className="mock-phone"><span>{selectedProject.name[0]}</span></div></div><div className="modal-copy"><span>Featured — {selectedProject.type==='app'?'App Development':'Web Design'}</span><h2 id="project-modal-title">{selectedProject.name}</h2><h3>{selectedProject.category}</h3><p>{selectedProject.summary}</p><p>{selectedProject.detail}</p><button className="button modal-view" onClick={viewProject}>View Project <ArrowRight/></button></div></motion.div>{storePicker&&selectedProject.type==='app'&&<motion.div className="store-modal" role="dialog" aria-modal="true" aria-label="Choose an app store" initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}}><button className="modal-close" onClick={()=>setStorePicker(false)} aria-label="Close store selection"><X/></button><span>OPEN {selectedProject.name.toUpperCase()}</span><h3>Choose your store</h3><div><a className="store-link" href={selectedProject.appStore} target="_blank" rel="noreferrer">App Store <ArrowRight/></a><a className="store-link" href={selectedProject.playStore} target="_blank" rel="noreferrer">Play Store <ArrowRight/></a></div></motion.div>}</div>}</>}
