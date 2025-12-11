<script lang="ts">
    import type { Product } from "$lib/mock-products";

    export let product: Product;
</script>

<a href='/products/{product.id}' class="card">
<div class="image-wrapper">
    <img src="{product.imageUrl}" alt="{product.name}">
    <div class="category-tag">{product.category}</div>
</div>
<div class="info">
    <h3 class="name">{product.name}</h3>
    <p class="price titles&prices">{product.price.toFixed(2)}</p>
</div>
</a>

<style>
    .card{
        background-color: var(--bg-card);
        border: 1px solid var(--border-dim);
        border-radius: 8px;
        text-decoration: none;
        color: var(--text-primary);
        overflow: hidden;
        transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-out;
        display: block;
    }
    .card:hover{
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 0 15px rgba(0, 243, 255, 0.3);
        border-color: var(--root-cyan);
    }
    .image-wrapper{
        position: relative;
    }
    img {
        width: 100%;
        height: auto;
        display: block;
        aspect-ratio: 1 / 1; /*mantine la imagen cuadrada*/
        object-fit: cover;
    }
    .category-tag{
        position: absolute;
        top: 0.75rem;
        left: 0.75rem;
        background: rgba(5, 5, 5, 0.8);
        backdrop-filter: blur(5px);
        padding: 0.25rem 0.25rem;
        border-radius: 6px;
        font-family: "JetBrains Mono", monospace;
        font-size: 0.8rem;
        border: 1px solid var(--border-dim);
    }
    .info{
        padding: 1rem;
    }
    .name{
        font-family: 'Inter', sans-serif;
        font-size: 1.1rem;
        font-weight: 600;
        margin: 0 0 0.5rem 0;
    }
    .price{
        font-size: 1.25rem;
        color: var(--root-cyan);
        margin: 0;
    }
</style>