<template>
    <div class="work-item">
        <div class="row">
            <div class="col-md-4 work-item--left">
                <h4>{{position}}</h4>
                <h5><a :href="website" target="_blank">{{company}}</a></h5>
                <h6>{{startDate}} - {{endDate}}</h6>
            </div>
            <div class="col-md-8 work-item--right">
                <ul>
                    <li v-for="highlight in highlights">{{highlight}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'WorkItem',

    introduction: '',
    description: '',
    token: '<work-item :work="{position: "" website: "" startDate="" endDate="" :highlights=[]} />',
    props: {
      position: {type: String, required: true, note: 'The position I worked as'},
      company: {type: String, required: true, note: 'The company I worked for'},
      website: {type: String, required: true, note: 'The website of the company'},
      highlights: {type: Array, required: true, note: 'An array of highlights'},
      startDate: {type: String, note: 'An array of highlights'},
      endDate: {type: String, note: 'An array of highlights'}
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