export default {
  title: 'Internal Link',
  name: 'internalLink',
  type: 'object',
  fields: [
    {
      name: 'reference',
      type: 'reference',
      title: 'Reference',
      to: [
        { type: 'post' },
        { type: 'project' },
        { type: 'page' }
      ]
    }
  ]
}
