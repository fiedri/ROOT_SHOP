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
    <p class="price">{product.price.toFixed(2)}</p>
</div>
</a>