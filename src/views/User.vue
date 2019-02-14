<template>
    <div class="container">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <h1>Name: {{ name }}</h1>
        <button @click="changeName">Change my name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                :name="name"
                @nameWasReset="name = $event"
                :age="age">//the $event is used to listen to event binded to the property title
                </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                :age="age"
                @edittedAge="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import Detail from './UserDetail.vue';
    import Edit from './UserEdit.vue';
    import { eventBus } from '../main.js'

    export default {
        components: {
            appUserDetail: Detail,
            appUserEdit: Edit
        },

        data () {
            return {
                name: 'John',
                age: 19880
            }
        },

        methods: {
            changeName () {
                return this.name = 'Paul'
            }
        },

        created() {
            eventBus.$on('edittedAge', (age) => {
                this.age = age
            })
        }
    }
</script>

<style scoped>

    .container {
        margin: 100px;
        padding: 30px;
        background-color: rgb(14, 219, 151);
        height: 65vh;
        text-align: center;
    }
    .row {
        padding: 10px;
        display: grid;
        grid-template: 250px / 1fr 1fr;
    }

    button {
        background-color: rgb(4, 77, 58);
        color: white;
        width: 150px;
        height: 50px;
        border: none;
        font-size: 16px; 
    }
</style>
