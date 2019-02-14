<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <h1>UserAge: {{ age }}</h1>
        <button @click="changedAge">Edit Age</button>
        <button @click="resetAge">Reset Age</button>
    </div>
</template>

<script>

import { eventBus } from '../main.js'

export default {
    props: ['age'],

    // data () {
    //     return {
    //         age: this.age
    //     }
    // },

    methods: {
        changedAge () {
            this.age = 456788
            eventBus.changeAge(this.age)
        },

        resetAge () {
            this.age = 19880
            eventBus.resetA(this.age)
        }
    }
}
</script>


<style scoped>
    div {
        background-color: rgb(216, 214, 243);
        border: 1px solid #f8c6b7;
        box-shadow: 2px 2px 2px rgb(230, 79, 79);
        padding: 10px;
        margin: 10px;
        height: 240px;
    }

    button {
        width: 150px;
        height: 40px;
        border-radius: none;
        font-size: 14px; 
    }
</style>
