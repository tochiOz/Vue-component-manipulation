<template>
    <div class="body">
        <div class="row">
            <app-quote-display
                    @click.native="deleteQuote(index)"
                    class="bold"
                    v-for="(quote, index) in quotes"
                    :key="quote">
                {{ quote }}
            </app-quote-display>
        </div>
    </div>
</template>

<script>

import quote from "./quote.vue";

export default {

    props: ['quotes'],

    components: {
        appQuoteDisplay: quote
    },

    methods: {
        deleteQuote (index) {
            this.$emit('quoteDelete', index)
        }
    }
}
</script>

<style scoped>

    

    .bold {
        margin: 30px 100px;
    }

</style>
