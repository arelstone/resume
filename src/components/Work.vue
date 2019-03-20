<template>
    <div class="row" id="work">
        <div class="col-12">
            <headline :text="$t('Experience')" :icon="Icon"/>
        </div>
        <div class="col-12">
            <work-item v-for="item, index in work"
                       :key="index"
                       :position="item.position"
                       :summary="item.summary"
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
  import Icon from '../assets/img/files-svgrepo-com.svg'

  export default {
    name: 'work',
    introduction: 'Work component',
    description: 'A component for displaying a collection of work-items',
    token: '<work :work="[{}]" />',
    props: {
      work: {type: Array, required: true, note: 'A collection of work-items'}
    },
    data () {
      return {
        Icon
      }
    },
    components: {Headline, WorkItem}

  }
</script>

<style scoped lang="scss">
    @import "../assets/style/fonts";

    #work {
        @include FontThin;
        @include Lato;
    }
</style>
