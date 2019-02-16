<template >
    <div class="container">
        <button @click="selectedComponent= 'appQuote'">appQuote</button>
        <button @click="selectedComponent= 'appAuthor'">appAuthor</button>
        <button @click="selectedComponent= 'appNew'">appNew</button>
        <div class="fullview">
            <!-- using the @click(selectedcomponent it triggers the component attached to the button
            this is hereby displayed by the component tag using the (is) key attribute) -->
            <!-- dynamically this selection which can be called anything can be used to create a tabs feature on vue where components are accessed individually without using a navbar -->
            <component :is="selectedComponent">
                <h2>The appQuote Page</h2>
            </component>
            <!-- <app-quote>
                <h1 slot="title">{{ quoteTittle }}</h1>
                <p slot="content">{{ quoteDescription }}</p>
            </app-quote> -->
        </div>
    </div>
</template>

<script>

import Quote from '../components/quotes/quoteDisplay.vue'
import Author from '../components/quotes/author.vue'
import New from '../components/quotes/new.vue'

export default {
    
    data () {
        return{
            quoteTittle: 'The Quote',
            quoteDescription: 'This is a Quote App made with Vue',
            selectedComponent: 'appQuote'
        }
    },

    components: {
        appQuote: Quote,
        appAuthor: Author,
        appNew: New
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

    button {
        width: 150px;
        height: 40px;
        font-size: 18px;
    }
</style>

