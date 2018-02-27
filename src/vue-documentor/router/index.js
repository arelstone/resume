import { DocumentorView, DocItem } from '../main'

function mapChildRoutes (components) {
  return Object.keys(components).map(key => {
    const component = components[key]
    return {path: `/documentor/${component.name}`, name: component.name, component: DocItem, props: {component}}
  })
}

export function mapDocumentorRoutes (components) {
  return [{
    path: '/documentor',
    name: 'documentor',
    component: DocumentorView,
    props: {components},
    children: mapChildRoutes(components)
  }]
}
