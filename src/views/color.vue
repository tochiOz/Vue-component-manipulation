<template >
    <div class="container">
        <div class="flex">
            <button class="indigo" @click="selectedComponent= 'appIndigo'">Indigo Component Selector</button>
            <button class="coral" @click="selectedComponent= 'appCoral'">Coral Component Selector</button>
            <button class="magenta" @click="selectedComponent= 'appMagenta'">Mangeta Component Selector</button>
        </div>
        <div class="fullview">
            <!-- using the @click(selectedcomponent it triggers the component attached to the button
            this is hereby displayed by the component tag using the (is) key attribute) -->
            <!-- dynamically this selection which can be called anything can be used to create a tabs feature on vue where components are accessed individually without using a navbar -->
            <component :is="selectedComponent">
                <h2>The appQuote Page</h2>
                <em name="Subtitle">Subtitle</em>
            </component>
        </div>
    </div>
</template>

<script>

import Indigo from '../components/colors/indigo.vue'
import Coral from '../components/colors/coral.vue'
import Magenta from '../components/colors/magenta.vue'

export default {
    
    data () {
        return{
            quoteTittle: 'The Quote',
            quoteDescription: 'This is a Quote App made with Vue',
            selectedComponent: 'appIndigo'
        }
    },

    components: {
        appIndigo: Indigo,
        appCoral: Coral,
        appMagenta: Magenta
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
        height: 60vh;
        
    }

    .flex {
        display: flex;
        justify-content: center;
    }

    button {
        margin: 0 1px;
        width: 300px;
        height: 40px;
        font-size: 18px;
        border: none;
        color: azure;
    }

    .indigo {
        background-color: rgb(67, 50, 116) !important;

    }

    .coral {
        background-color: #f01e4c;
    }

    .magenta {
        background-color: #d31aab;
    }
</style>

