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
    name: 'contact',
    components: {Headline},
    token: '<contact name="John Doe" phone="10101010" email="hello@email.com" address="Some address" zip="90210" country="Denmark" />',
    props: {
      name: {type: String, required: true, note: 'The name to display'},
      phone: {type: String, required: true, note: 'The phone number to display'},
      email: {type: String, required: true, note: 'The e-mail to display'},
      address: {type: String, required: true, note: 'The address to display'},
      zip: {type: String | Number, required: true, note: 'The zip code to display'},
      city: {type: String, required: true, note: 'The city to display'},
      country: {type: String, required: true, note: 'The country to display'}
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