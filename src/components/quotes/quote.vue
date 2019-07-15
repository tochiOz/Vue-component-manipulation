<template>
    <div class="row">
        <slot></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .row {
        /* width: 90%; */
        padding: 30px;
        text-align: center;
        border: 0.5px solid #ccc;
        box-shadow: 5px 5px 5px #bcbcbc;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
</style>
