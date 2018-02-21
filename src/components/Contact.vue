<template>
    <div class="row" id="Contact">
        <div class="col-md-4">
            <div id="info-section">
                <h2 id="email"><a :href="`mailto:${email}`">{{email}}</a></h2>
                <h2 id="phone"><a :href="`tel:${phone}`">{{phone}}</a></h2>
            </div>
        </div>
        <div class="col-md-8">
            <div id="name-section">
                <h1 id="name">{{name}}</h1>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'contact',
    introduction: 'Contact information',
    description: 'A component for displaying contact information',
    token: '<contact name="John Doe" phone="10101010" />',
    props: {
      name: {type: String, required: true, note: 'The name to display'},
      phone: {type: String, required: true, note: 'The phone number to display'},
      email: {type: String, required: true, note: 'The e-mail to display'},
      address: {type: String, required: true, note: 'The address to display'},
      zip: {type: String, required: true, note: 'The zip code to display'},
      city: {type: String, required: true, note: 'The city to display'},
      country: {type: String, required: true, note: 'The country to display'}
    }
  }
</script>
<style scoped lang="scss">
    @import '../assets/style/style';
    @import '../assets/style/palettes/palette5';

    a {
        color: $text-color;
        text-decoration: none;
    }

    @mixin mb {
        margin: 3px;
    }

    @mixin padding {
        padding: 5px;
        margin: 10px;
    }

    #name-section {
        color: white;
        background: #088bbf;
        @include padding;
        height: 120px;
    }

    #info-section {
        background: $color2;
        @include padding;
        height: 120px;
    }

    #Contact {

        padding-top: 400px;
        padding-bottom: 150px;
        margin-top: -200px;
        //padding-right: 25vw;
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
            //letter-spacing: 0.6em;
            padding: 0;
            margin-top: 10px;
            text-transform: uppercase;
            @include mb;
            //@include OpenSansCondensed;
        }

        #headline {
            @include OpenSansCondensed;
            @include mb;
        }
    }
</style>