<template lang="pug">
  #app
    //- h1 Main
    div
      router-view
</template>

<style lang="scss">
main {
  padding: calc(2* var(--extra-padding)) 10%;
}
</style>
