<template>
    <div class="col-12" id="WorkItem">

        <div class="row">
            <div class="col-5">
                <h4>{{work.position}}</h4>
                <h5><a :href="work.website" target="_blank">{{work.company}}</a></h5>
                <h6>{{work.startDate}} - {{work.endDate}}</h6>
            </div>
            <div class="col-7">
                <div>{{work.summary}}</div>
                <ul><li v-for="highlight in work.highlights">{{highlight}}</li></ul>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'WorkItem',
    props: {
      work: {type: Object | Array, required: true}
    }
  }
</script>

<style scoped lang="scss">
#WorkItem {
    padding-bottom: 20px;
    h4 { margin: 0;}
    h5 { margin: 5px 0;}
    h6 { margin: 5px 0;}
}
</style>