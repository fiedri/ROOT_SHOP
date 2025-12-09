<script>
    // declaramos una prop
    let {id, children} = $props()
</script>

<section {id}>
<div >
 {@render children()}

</div>
</section>
<style>
    section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 90vh;
    }
    section div{
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
    }
</style>