export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60ea113c49236b8e32e1410e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qrr4iagj',
                  apiId: 'a7ffaed7-7006-4500-907c-4f324fc0ae1f'
                },
                {
                  buildHookId: '60ea113c86b2de9bd2f264f7',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-iaenoht8',
                  apiId: '6d6fee70-05c1-40ff-885f-ba1e473c46a6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mlibk/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-iaenoht8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
