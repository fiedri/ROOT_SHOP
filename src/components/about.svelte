<section class="about-section">
    
    
        <h2 class="prompt-title">
            <span class="prompt-arrow">&gt;</span> whoami <span class="cursor">█</span></h2>
        <hr>
        <div class="about-content">
        <div class="text-content">
            <h3 class="subtitle">Somos #ROOT</h3>
            <p class="descripti">
                No diseñamos ropa. Diseñamos hardware textil para los que construyen el código. Sin adornos. Sin permiso.
            </p>
            <p class="tagline">Made in Vzla</p>
        </div>
        <div class="glitch-container" data-text="#ROOT">
            <div class="image-placeholder">

            </div>
        </div>
    </div>
</section>
<style>
    .about-section{
        width: 90%;
        max-width: 1100px;
        margin: 10rem auto;
    }
    .prompt-title{
        font-family: "JetBrains Mono", monospace;
        font-size: 1.5rem;
        color:  var(--text-primary);
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
    }
    .prompt-arrow{
        color:  var(--root-cyan);
        margin-right: 0.75rem;
        font-weight: 700;
    }
    .cursor{
        color: var(--root-cyan);
        animation: blink 1s step-end infinite;
        margin-left: 0.5rem;
    }
    @keyframes blink{
        50% {opacity: 0;}
    }

    .about-content{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        align-items: center;
    }
    .subtitle{
        font-family: "Inter", sans-serif;
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 1rem;
        color: var(--text-primary);
    }
</style>