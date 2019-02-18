<template>
    <div class="full">
        <div class="display">
            <div>
                <!-- //slots helps to distribute data round our components
                //the name attribute helps slots pass data posted on the same selector in differnt hml layouts -->
                <slot></slot>
            </div>
            <hr>
            <div>
                <span><slot slot="Subtitle">Subtitle</slot></span>
            </div>
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
        box-shadow: 2px 1px 2px rgb(128, 5, 153);
        margin: 50px;
        text-align: center;
        color: azure; background-color: #d31aab;
        padding: 30px;
    }
</style>

