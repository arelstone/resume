<template>
    <div class="row" id="work">
        <div class="col-12">
            <headline text="Erfarring" icon="../../static/img/headline/files-svgrepo-com.svg"/>
        </div>
        <div class="col-12">
            <work-item v-for="item, index in work"
                       :key="index"
                       :position="item.position"
                       :company="item.company"
                       :website="item.website"
                       :highlights="item.highlights"
                       :start-date="item.startDate"
                       :end-date="item.endDate"/>
        </div>
    </div>
</template>

<script>
  import Headline from './Headline.vue'
  import WorkItem from './WorkItem.vue'

  export default {
    name: 'work',
    introduction: '',
    description: '',
    token: '<work :work="[{}]" />',
    props: {
      work: {type: Array, required: true, note: 'A collection of work-items'}
    },
    components: {Headline, WorkItem}
  }
</script>

<style scoped lang="scss">
    @import '../assets/style/style';

    #work {
        @include FontThin;
        @include Lato;
    }
</style>