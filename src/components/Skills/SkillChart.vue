<script>
  import { Line } from 'vue-chartjs'

  export default {
    name: 'skill-chart',
    extends: Line,
    introduction: '',
    description: '',
    token: '',
    data () {
      return {
        collection: {
          labels: [],
          datasets: [{data: []}]
        },
        datacollection: {
          labels: ['languages', 'frameworks'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: 'blue',
              data: [40, 11, 20]
            },
            {
              label: 'Data two',
              backgroundColor: '#f87979',
              data: [35]
            }
          ]
        }
      }
    },
    props: {
      skills: {type: Array | Object, default: {}, required: true}
    },
    mounted () {
      /* */
      Object.keys(this.skills).forEach(key => {
        this.datacollection.labels[key] = this.skills[key][0].type
        Object.keys(this.skills[key]).forEach(k => {
          console.log(this.skills[key][k])
          //this.datacollection.datasets[k] = this.skills[key].level
        })
      })
      console.log(this.datacollection)
      this.renderChart(this.datacollection, {responsive: true, maintainAspectRatio: false})
    },
    methods: {}
  }
</script>

<style scoped lang="scss">

</style>