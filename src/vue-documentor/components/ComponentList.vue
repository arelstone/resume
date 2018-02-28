<template>
    <div id="component-list">
        <h3>Components</h3>
        <ul>
            <li>
                <router-link to="/documentor">All components</router-link>
            </li>
            <li v-for="component in components">
                <router-link :to="`/documentor/${component.name}`">{{component.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'component-list',
    introduction: '',
    description: '',
    token: '',
    props: {
      components: {type: Array, required: true}
    }
  }
</script>

<style scoped lang="scss">
    $primary-color: #088bbf;
    $link-color: #ffffff;
    @mixin border() {
        border: 1px solid red;
    }
#component-list {
    background: $primary-color;

}
    ul {
        margin: 0;
        padding: 0;
        li {
            list-style: none;
            padding: 10px 5px;
            font-size: 12px;
            a {
                color: $link-color;
                text-decoration: none;
                &:hover{
                    text-decoration: underline;
                }
            }

        }
    }
</style>