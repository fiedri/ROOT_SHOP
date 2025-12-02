
<nav class="navbar">
    <img src="./logo.png" alt="">
    <ul>
        <li>home</li>
        <li>About</li>
        <li>Products</li>
        <li>Contacts</li>
    </ul>
    <div class="btn-container">
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-bag-shopping"></i>
    </div>
</nav>
<style>
    .navbar{
        position: fixed;
        background-color: var(--bg-card);
        color: white;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        padding: 0.5rem 0;
        border-bottom: 1px solid var(--border-dim);
        z-index: 10000;
    }
    .navbar ul{
        display: flex;
        list-style: none;
        gap: 20px;
        text-transform: capitalize;
    }
    .navbar ul li{
        cursor: pointer;
        transition: color 0.2s ease-in-out;
    }
    .navbar ul li:hover{
        color: var(--root-cyan);
    }
    img{
        background-color: transparent;
        width: 9rem;
    }
    .btn-container{
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
    div i{
        cursor: pointer;
        font-size: 1.7rem;
        transition: color 0.2s ease-in-out;
    }
    div i:hover{
        color: var(--root-cyan);
    }
</style>