<template>
    <div class="row">
        <div class="col-12">
            <headline text="Erfarring"/>
        </div>
        <div class="col-12">
            <work-item v-for="item in work" :work="item"/>
        </div>
    </div>
</template>

<script>
  import Headline from './Headline.vue'
  import WorkItem from './WorkItem.vue'

  export default {
    name: 'Work',
    props: {
      work: {type: Object | Array, required: true}
    },
    components: {Headline, WorkItem}
  }
</script>

<style scoped lang="scss">

</style>