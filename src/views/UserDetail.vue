<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <h1>User Name: {{ reverseName() }}</h1>
        <h3>User Age: {{ age }}</h3>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
export default {
    props: ['name', 'age'],
    //this enables the parent to communicate with the child component, by sharing properties

    methods: {
        reverseName() {
            return this.name.split(" ").reverse().join("")
        },

        resetName () {
           this.name = 'John'
           this.$emit('nameWasReset', this.name)
        }
    }
}
</script>


<style scoped>
    div {
        background-color: rgb(175, 247, 243);
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
