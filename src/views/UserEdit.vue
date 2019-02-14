<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <h1>UserAge: {{ age }}</h1>
        <button @click="changedAge">Edit Age</button>
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
            // this.$emit('edittedAge', this.age)
            eventBus.changeAge(this.age)
        }
    }
}
</script>


<style scoped>
    div {
        background-color: rgb(221, 127, 127);
        border: 2px solid red;
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
