<script lang="ts">
    import { products } from "$lib/mock-products";

    import ProductCard from "../../components/ProductCard.svelte";
</script>
<div class="page-container">
    <h1 class="page-title titles&prices">Catalogo</h1>
    <div class="products-grid">
        {#each products as product (product.id)}
            <ProductCard {product}/>
        {/each}
    </div>
</div>
<style>
    .page-container{
        width: 90%;
        max-width: 1400px;
        margin: 5rem auto;
        padding-top: 5rem;
    }
    .page-title{
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 3rem;
        /* Letra en degradado*/
        background: linear-gradient(90deg, var(--root-cyan), var(--root-purple));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }
    .products-grid{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1rem;
    }
    @media (max-width: 640px){
        .products-grid{
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1rem;
        }
        .page-title{
            font-size: 2rem;
        }
    }
</style>