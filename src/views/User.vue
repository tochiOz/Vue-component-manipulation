<template>
    <div class="container">
        <div class="backdrop">
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

            eventBus.$on('formalAge', (age) => {
                this.age = age
            })
        }
    }
</script>

<style scoped>

    div.container {
        margin: 0;
        padding: 59px;
        background-image: url(https://www.blakesguam.com/wp-content/uploads/2016/08/photodune-6207464-geometric-polygon-abstract-background-l-4.jpg)
    }

    .backdrop {
        padding: 30px;
        background-color: #ffe6e6 transparent;
        height: 64vh;
        text-align: center;
    }
    .row {
        padding: 10px;
        display: grid;
        grid-template: 250px / 1fr 1fr;
    }

    button {
        background-color: rgb(43, 87, 75);
        color: white;
        width: 150px;
        height: 50px;
        border: none;
        font-size: 16px; 
    }
</style>
