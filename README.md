# web-resume

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Project environment

### Tools

- install nodeJS (LTS) https://nodejs.org/en/
- install git https://git-scm.com/downloads
- install vue-cli (optional):

```
npm install -g @vue/cli
```

### Ressources

material design icons: https://materialdesignicons.com/cdn/3.9.97/

### VSCode configuration

- install ESLint extension
- install Vetur extension
- install prettier extension

To configure correctly the formatter we had the following workspace settings :

```
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

## Project creation (History)

```
vue create <project_name>
```

Select:

- Babel
- Progressive Web App (PWA) Support
- Router
- Vuex
- Linter / Formatter: ESLint + Prettier

```
vue add vuetify
```

- Choose a preset: Configure (advanced)
- Use a pre-made template? (will replace App.vue and HelloWorld.vue) Yes
- Use custom theme? Yes
- Use custom properties (CSS variables)? Yes
- Select icon font Material Design Icons
- Use fonts as a dependency (for Electron or offline)? Yes
- Use a-la-carte components? Yes
- Select locale English
