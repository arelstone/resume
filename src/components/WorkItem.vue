<template>
    <div class="work-item">
        <div class="row">
            <div class="col-md-4 work-item--left">
                <h4>{{position}}</h4>
                <h5 v-if="summary.length > 0">{{summary}}</h5>
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
    name: 'work-item',
    introduction: 'Work item',
    description: 'A component for displaying a single work-item',
    token: '<work-item :work="{position: "" website: "" startDate="" endDate="" highlights=[]} />',
    props: {
      position: {type: String, required: true, note: 'The position I worked as'},
      summary: {type: String, required: true, note: 'A summary'},
      company: {type: String, required: true, note: 'The company I worked for'},
      website: {type: String, required: true, note: 'The website of the company'},
      highlights: {type: Array, required: true, note: 'An array of highlights'},
      startDate: {type: String, note: 'An array of highlights'},
      endDate: {type: String, note: 'An array of highlights'}
    }
  }
</script>

<style scoped lang="scss">
    @import '../assets/style/style';

    .work-item {
        margin-bottom: 50px;
        h4 {
            margin: 0;
            @include FontLight;
            font-size:2em;

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
            margin-bottom: 10px;
        }
        .work-item--right {
            ul {
                margin: 5px 0;
                padding-left: 20px;
            }
            @include FontLight;
            @include Lato;

        }
    }
</style>
