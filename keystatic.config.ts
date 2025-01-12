import { config, collection, fields, singleton } from '@keystatic/core';

export const markdocConfig = fields.markdoc.createMarkdocConfig({});

export default config({
  storage: {
    // kind: 'local',
    kind: 'github',
    repo: {
      name: "portfolio-keystatic",
      owner: "gaurav-vala",
    },
  },
  collections: {
    notes: collection({
      label: 'Notes',
      slugField: 'title',
      path: 'content/notes/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.mdx({
          label: 'Content',
          options: {
            image: {
              directory: "public/assets/images/posts",
              publicPath: "/assets/images/posts/", // Adjusted the path
            },
          },
        }),
      },
    }),
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'content/projects/*',
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
    experience: collection({
      label: 'Experience',
      slugField: 'companyName',
      path: 'content/experience/*',
      schema: {
        companyName: fields.slug({ name: { label: 'Company Name', validation: { isRequired: false } } }),
        jobTitle: fields.text({ label: 'Job Title', validation: { isRequired: false } }),
        location: fields.text({ label: 'Location', validation: { isRequired: false } }),
        duration: fields.text({ label: 'Duration', validation: { isRequired: true } }),
        description: fields.text({ label: 'Description', multiline: true }),
        technologies: fields.array(
          fields.text({ label: 'Technology' }),
          { label: 'Technologies Used', itemLabel: props => props.value }
        ),
      },
    }),
    skills: collection({
      label: 'Skills',
      slugField: 'title',
      path: 'content/skills/*',
      format: 'json',
      schema: {
        title: fields.slug({ name: { label: 'Skill' } }),
      },
    }),
    aboutpage: collection({
      label: 'About',
      slugField: 'title',
      path: 'content/aboutpage/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.mdx({
          label: 'About Page Content',
          options: {
            image: {
              directory: "public/assets/images/about",
              publicPath: "/assets/images/about/", // Adjusted the path
            },
          },
        }),
      },
    }),
    uses: collection({
      label: 'Uses',
      slugField: 'title',
      path: 'content/uses/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.mdx({
          label: 'About Page Content',
          options: {
            image: {
              directory: "public/assets/images/about",
              publicPath: "/assets/images/about/", // Adjusted the path
            },
          },
        }),
      },
    }

    )
  },
  singletons: {
    about: singleton({
      label: "About Me Page",
      path: "content/about-me/index",
      schema: {
        description: fields.mdx({ label: "About Me Page Content" }),
      },
    }),
    homepage: singleton({
      label: 'Homepage',
      path: 'src/content/homepage/index',
      schema: {
        title: fields.text({ label: 'Title' }),
        description: fields.text({ label: 'Description', multiline: true }),
      },
    }),
  },
});
