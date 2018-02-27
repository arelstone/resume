import { Documentor, DocItem } from '../main'

function mapChildRoutes (components, debug) {
  return Object.keys(components).map(key => {
    const component = components[key]
    if (debug) {
      testComponent(component)
    }
    return {path: `/documentor/${component.name}`, name: component.name, component: DocItem, props: {component}}
  })
}

function testComponent (component) {
  if (!component.name.length > 0) {
    throwError('name')
  }
  if (!component.introduction) {
    throwError('introduction', component)
  }
  if (!component.description) {
    throwError('description', component)
  }
  if (!component.token) {
    throwError('token', component)
  }

  Object.keys(component.props).forEach(key => {
    if (!component.props[key].note) {
      console.log(key)
      throwError(`note on prop ${key}`, component)
    }
  })
}

function throwError (text, component) {
  console.error(`[vue-documentor] Missing ${text} in component ${component.name}`)

}

export function mapDocumentorRoutes (components, debug = true) {
  return [{
    path: '/documentor',
    name: 'documentor',
    component: Documentor,
    props: {components},
    children: mapChildRoutes(components, debug)
  }]
}
