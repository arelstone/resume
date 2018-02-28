import { Documentor, DocItem } from '../main'

export const mapDocumentorRoutes = (components) => {
  return [{
    path: '/documentor',
    name: 'documentor',
    component: Documentor,
    props: {components: loopAndFilterComponents(components)},
    children: mapChildRoutes(components)
  }]
}

/**
 * Handle mapping of child routes according to the vue-router docs
 * @param components
 * @returns {any[]}
 */
const mapChildRoutes = (components) => {
  return Object.keys(components).map(key => {
    const component = components[key]
    return {
      path: `/documentor/${component.name}`,
      name: component.name,
      component: DocItem,
      props: {component}
    }
  })
}
/**
 * Loop thru a collection of components.
 * @param components
 * @returns {{name: string, introduction, description, token, props: component.props|{tag, path, locale, places}}[]}
 */
const loopAndFilterComponents = (components) => {
  return Object.keys(components).map(key => filterComponent(components[key]))
}

/**
 * No need to pass along all data of the component.
 * This will only return what we need
 * @param component
 * @returns {{name: string, introduction, description, token, props: component.props|{tag, path, locale, places}}}
 */
const filterComponent = (component) => {
  return {
    name: component.name,
    introduction: component.introduction,
    description: component.description,
    token: component.token,
    props: component.props
  }
}
