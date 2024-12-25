import { config, collection, fields } from '@keystatic/core';

export const markdocConfig = fields.markdoc.createMarkdocConfig({});

export default config({
  storage: {
    kind: 'github',
    repo: {
      name: "portfolio-keystatic",
      owner: "gaurav-vala",
    },
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.mdx({
          label: 'Content',
          options: {
            image: {
              directory: "src/assets/images/posts",
              publicPath: "@assets/images/posts/",
            },
          },
        }),
      },
    }),
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'projects/*',
      format: 'json',
      schema: {
        title: fields.slug({ name: { label: 'Project Title' } }),
        onhomepage: fields.checkbox({
          label: 'Show on Homepage',
          description: 'Check this if you want to show this project on the homepage',
        }),
        description: fields.text({ label: 'Project Description', multiline: true }),
        technologies: fields.text({ label: 'Techologies Used', description: 'Add Technologies with commas' }),
        github: fields.url({ label: 'Github Repository' }),
        live: fields.url({ label: 'Live Link' }),

      },
    }),
    skills: collection({
      label: 'Skills',
      slugField: 'title',
      path: 'skills/*',
      format: 'json',
      schema: {
        title: fields.slug({ name: { label: 'Skill' } }),
      },
    })
  },
});
