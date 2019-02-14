<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">User</router-link> |
    </div> -->
    <router-view/>
  </div>
</template>
<style lang="stylus"> 
#app
  font-family: Haettenschweil, 'Arial Narrow Bold', sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  // text-align center
  color #2c3e50
  background-color #fefefe

router-view
  margin 50px
  padding 0
// #nav
//   padding 30px
//   a
//     font-weight bold
//     color #2c3e50
//     &.router-link-exact-active
//       color #42b983
</style>

