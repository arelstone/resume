<template>
    <div class="col-2">

        <img src="../assets/profile-image.png"/>
        <pre>{{basics}}</pre>

    </div>
</template>

<script>
  export default {
    name: 'Basics',
    props: {
      basics: {type: Object | Array, required: true}
    }
  }
</script>

<style scoped lang="scss">

</style>