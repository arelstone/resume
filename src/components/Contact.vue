<template>
    <div class="row" id="Contact">
        <div class="col-5">
            <h2 id="email">{{email}}</h2>
            <h2 id="phone">{{phone}}</h2>
            <h5 id="address">{{address}} - {{zip}} {{city}}</h5>
        </div>
        <div class="col-7">
            <h2 id="headline" class="col-12">&lt;Curriculum Vitae&gt;</h2>
            <h1 id="name" class="col-12">{{name}}</h1>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Contact',
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
    #Contact {
        padding-bottom: 10px;
        h1 {
            margin: 10px;
            font-size: 2.5em;
        }
        h2 {
            margin: 5px;
            &#phone {
                font-size: 2.5em;
            }
        }

        h5 {
            margin: 5px;
        }
    }
</style>