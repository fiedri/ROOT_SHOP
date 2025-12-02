<script>
  import { onMount } from "svelte";
  const fullText = `Lifestyle brand for creators, innovators, and digital rebels.\nWe believe in unrestricted self-expression.\nWear your code, live your passion
Your style, your rules.`
  let textDisplayed = $state("")
  let index = $state(0)
  onMount(()=>{
    const interval = setInterval(() => {
      if(index< fullText.length){
        textDisplayed += fullText.charAt(index)
        index++
      }else{
        clearInterval(interval)
      }
    }, 50);
    return ()=> clearInterval(interval)
  })
</script>
<section id="hero" class="hero-section background">
  <div class="hero-wrapper">
    <div class="hero-content">
      
      <img src="./logo.png" alt="" class="img_logo">
      
      <div class="terminal">
<div class="terminal-header">
        <span class="terminal-dot" style="background:#ff5f56;"></span>
          <span class="terminal-dot" style="background:#ffbd2e;"></span>
          <span class="terminal-dot" style="background:#27c93f;"></span>
        </div>
        <div class="terminal-body">
          <p class="slogan">#ROOT: No Permission Denied.</p>
          <pre class="description"><code>{textDisplayed}</code></pre>
        </div>
      </div>
      
      <a class="CTAs titles&prices" href="https://youtu.be/dQw4w9WgXcQ?si=48X8Nc8DbBZPeGro" target="_blank">
        <span class="cta-text">¡CTAs! &rArr;</span>
      </a>

    </div>
  </div>
</section>

<style>
  /* --- Estilos del Hero Section --- */
  .hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: var(--bg-main);
  }

  .hero-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    align-items: center;
    width: 100%;
    max-width: 800px;
    margin-top: -5vh;
    margin: auto;
  }


  .img_logo{
    width: 250px;
    max-width: 70%;
    /*Efecto glow*/
    filter: drop-shadow(0 0 8px var(--root-cyan));
    transition: filter 0.3s ease;
  }
  .img_logo:hover{
    filter: drop-shadow(0 0 12px var(--root-purple));
  }
  .terminal{
    background-color: var(--bg-card);
    border: 1px solid var(--border-dim);
    border-radius: 8px;
    width: 100%;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  }
.terminal-header{
  background-color: #2e2e2e;
  padding: 8px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.terminal-dot{
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.terminal-body{
  font-family: "JetBrains Mono", monospace;
}
.slogan{
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-top: 1rem;
  background: linear-gradient(90deg, var(--root-cyan), var(--root-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.description{
  font-size: 1rem;
  color: var(--text-secondary);
  white-space: pre-wrap;
  line-height: 1.6;
  min-height: 100px;
  position: relative;
}

.description::after{
  content: '█';
color: var(--root-cyan);
animation: blink 1s step-end infinite;
position: absolute;
margin-left: 2px;
}
@keyframes blink{
  50%{
    opacity: 0;
  }
}

  /* Texto dentro del botón */
  .cta-text {
    display: block; /* Para que se comporte bien dentro del enlace */
  }

  @media (min-width: 640px) {
    .img_logo { width: 300px; }
    .slogan { font-size: 1.5rem; }
    .description { font-size: 1.1rem; }
  }

  @media (min-width: 768px) { /* md */
    .hero-content { padding-bottom: 3.5rem; } /* pb-14 */
    .cta-text { font-size: 1.25rem; } /* text-xl */
  }

  @media (min-width: 1024px) { /* lg */
    .img_logo{
    width: 600px;}
  }

  /* --- Tus estilos originales para el botón --- */
  .CTAs {
    background: linear-gradient(90deg, var(--root-purple) 0%, var(--root-cyan) 100%);

    color: var(--bg-main);
    border-radius: 8px;
    min-width: 9rem;
    padding: 12px 24px;
    cursor: pointer;
    text-align: center;
    border: 1px solid var(--root-cyan);
    box-shadow: 0 0 15px rgba(0, 243, 255, 0.4); 
    font-weight: 700;
    font-size: 1.1rem; /* Este es el tamaño base del botón contenedor */
    letter-spacing: 0.05em;
    transition: all 0.3s ease-in-out;
    
    text-decoration: none;
  }

  .CTAs:hover, .CTAs:focus {
    background: linear-gradient(90deg, var(--root-cyan) 0%, var(--root-purple) 100%);
    color: var(--text-primary);
    border: 1px solid var(--root-purple);
    text-decoration: none;
     box-shadow: 0 0 25px rgba(188, 19, 254, 0.6);
  }
</style>