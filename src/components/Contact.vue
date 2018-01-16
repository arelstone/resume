<template>
    <div class="row" id="Contact">
        <div class="col-12">
            <headline text="Curriculum vitae"/>
        </div>
        <div class="col-md-4">
            <h2 id="email">{{email}}</h2>
            <h2 id="phone">{{phone}}</h2>
            <h5 id="address">{{address}} - {{zip}} {{city}}</h5>
        </div>
        <div class="col-md-8">
            <h1 id="name" class="col-12">{{name}}</h1>
        </div>
    </div>
</template>

<script>
  import Headline from './Headline.vue'

  export default {
    name: 'Contact',
    components: {Headline},
    props: {
      name: {type: String, required: true},
      phone: {type: String, required: true},
      email: {type: String, required: true},
      address: {type: String, required: true},
      zip: {type: String | Number, required: true},
      city: {type: String, required: true},
      country: {type: String, required: true}
    }
  }
</script>
<style scoped lang="scss">
    @import "../assets/style/fonts";
    @import "../assets/style/variables";

    @mixin mb {
        margin: 3px;
    }

    #Contact {
        padding-bottom: 10px;


        #email {
            @include Oswald;
            @include FontThin;
            @include mb;
            font-size: 1.3em;
        }
        #phone {
            @include Oswald;
            @include FontThin;
            @include mb;
            font-size: 1.3em;

        }
        #address {
            @include Oswald;
            @include FontThin;
            @include mb;
            font-size: 0.75em;

        }
        #name {
            line-height: 0.81em;
            font-size: 3.5em;
            letter-spacing: 0.6em;
            padding: 0;
            text-transform: uppercase;
            @include mb;
            @include OpenSansCondensed;
        }

        #headline {
            @include OpenSansCondensed;
            @include mb;
        }
    }
</style>