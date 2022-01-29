const fetch = require('node-fetch')

module.exports = async () => {
  const contact_info =
      await fetch(
          'https://raw.githubusercontent.com/JulesFouchy/JulesFouchy/main/contact.json')
          .then((res) => res.json())
  const classes =
      await fetch(
          'https://raw.githubusercontent.com/JulesFouchy/JulesFouchy/main/my-classes.json')
          .then((res) => res.json())
  return {
    github_account: 'JulesFouchy', repo: 'Learn--Generative-Art',
        title: 'Generative Art', docusaurus_config: {
          tagline: 'Making 🎨 with 👩‍💻',
          // Override any parts of docusaurus.config.js you want
        },
        main_page_link: 'lessons',
        navbar_items:
            [
              {to: '/lessons', label: 'Lessons', position: 'left'},
              {to: '/resources', label: 'Resources', position: 'left'},
              {to: '/inspirations', label: 'Inspirations', position: 'left'},
            ],
        should_sort_lessons_by_priority: false,
        //   footer: {}, // Uncomment this to override the hardcoded footer in
        //   docusaurus.config.js
        contact_info:
            [
              {
                label: 'Discord',
                to: `https://discord.com/users/${contact_info.discord_user_id}`,
              },
              {
                label: 'E-Mail',
                to: `mailto:${contact_info.email}`,
              },
              {
                label: 'GitHub',
                to: 'https://github.com/JulesFouchy/JulesFouchy/issues',
              },
            ],
        classes: classes,
        extra_copyright:
            `<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/authors/justicon" title="justicon">justicon</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>`,
        lessons_allowed_tags: [],
  }
}
