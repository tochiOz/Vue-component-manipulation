<template >
    <div class="container">
        <div class="fullview">
            <app-quote>
                <h1 slot="title">{{ quoteTittle }}</h1>
                <p slot="content">{{ quoteDescription }}</p>
            </app-quote>
        </div>
    </div>
</template>

<script>

import QuoteD from './quoteDisplay'

export default {
    
    data () {
        return{
            quoteTittle: 'The Quote',
            quoteDescription: 'This is a Quote App made with Vue'
        }
    },

    components: {
        appQuote: QuoteD    
    }
}
</script>

<style scoped>

    div.container {
        margin: 0;
        padding: 59px;
        background-image: url(https://www.blakesguam.com/wp-content/uploads/2016/08/photodune-6207464-geometric-polygon-abstract-background-l-4.jpg)
    }

    .fullview {
        height: 64.5vh;
        
    }
</style>

