<template>

    <div id="app">

        <header class="header">
            <div class="nav-brand">
                <h2><router-link to="/">Vue-Components</router-link></h2>
            </div>
            <div>
                <ul>
                    <li class="nav-list">
                        <router-link class="nav-item" to="/">Home</router-link>
                        <router-link class="nav-item" to="/color">Colors</router-link>
                        <router-link class="nav-item" to="/quotes">Quotes</router-link>
                    </li>
                </ul>
            </div>
        </header>

        <router-view/>

        <footer class="footer">
            <div class="foot1">
                <p>&copy; Copyright, 2019</p>
            </div>
            <div class="foot2">
                <p>The Vue Training Continues</p>
            </div>
        </footer>

    </div>
</template>
<style lang="stylus">
    html, body
        margin: 0;
        height: 100%;
        width: 100%;

    #app
        font-family: Haettenschweil, 'Arial Narrow Bold', sans-serif
        -webkit-font-smoothing antialiased
        -moz-osx-font-smoothing grayscale
        // text-align center
        color #2c3e50
        background-color #fefefe
        margin 0
        padding 0

    a
        font-weight bold
        text-decoration none
        color #fefefe
    // &.router-link-exact-active
    //   color #42b983

    .header
        display grid
        grid-template 70px / auto 1fr
        grid-gap 100px
        font-size 20px
        margin 0
        padding 0 30px
        color #fefefe
        background-color  rgb(47, 47, 49);

        .nav-brand
            display flex
            align-items center
            margin 0 70px

        .nav-list
            font-size 24px
            display flex
            align-items center
            justify-content flex-end

        .nav-item
            padding 0 20px

    .footer
        display grid
        grid-template 70px / auto 1fr
        grid-gap 100px
        font-size 20px
        margin 0
        padding 0 30px
        color #fefefe
        background-color  rgb(47, 47, 49);

        .foot1
            display flex
            align-items center
            margin 0 70px

        .foot2
            display flex
            align-items center
            justify-content flex-end

</style>

