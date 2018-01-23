<template>
    <div class="work-item">
        <div class="row">
            <div class="col-md-4 work-item--left">
                <h4>{{work.position}}</h4>
                <h5><a :href="work.website" target="_blank">{{work.company}}</a></h5>
                <h6>{{work.startDate}} - {{work.endDate}}</h6>
            </div>
            <div class="col-md-8 work-item--right">
                <ul>
                    <li v-for="highlight in work.highlights">{{highlight}}</li>
                </ul>
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
    @import "../assets/style/fonts";
    @import "../assets/style/variables";

    .work-item {
        padding-bottom: 20px;
        h4 {
            margin: 0;
            @include FontLight;

        }
        h5 {
            margin: 5px 0;
            @include FontLight;
            a {
                color: $headline-color;
            }

        }
        h6 {
            margin: 5px 0;
            @include FontLight;
        }
        li {
            margin-top: 5px;
        }
        .work-item--right {
            ul {
                margin: 5px 0;
                padding-left: 20px;
            }
            @include FontThin;
            @include Lato;

        }
    }
</style>