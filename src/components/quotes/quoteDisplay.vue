<template>
    <div class="full">
        <div class="display">
            <div>
                <!-- //slots helps to distribute data round our components
                //the name attribute helps slots pass data posted on the same selector in differnt hml layouts -->
                <slot></slot>
                <span style="color: #ccc; font-style: italics;"><slot name="Subtitle">Subtitle</slot></span>
            </div>
            <hr>
            <!-- <div>
                <slot name="content"></slot>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .full {
        border: 1px solid blanchedalmond;
        box-shadow: 2px 1px 2px rgb(110, 64, 64);
        margin: 50px;
        text-align: center;
        padding: 30px;
    }
</style>

