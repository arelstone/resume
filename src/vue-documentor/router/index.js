import DocumentorView from '../DocumentorView'
import DocItem from '../components/DocItem'

function mapChildRoutes (components) {
  return Object.keys(components).map(key => {
    const component = components[key]
    const obj = {
      path: `/documentor/${component.name}`,
      name: key,
      component: DocItem,
      props: {component: component}
    }
    return obj
  })
}

export function setRouterData (components, options = {}) {
  const oPath = options.path || '/documentor'
  const oName = options.name || 'Documentor'
  const routes = [
    {path: oPath, name: oName, component: options.view || DocumentorView, props: {components}},
    ...mapChildRoutes(components)
  ]
  return routes
}
