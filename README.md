# Header Playground

Hi! Happy first time at Ideometry. We've laid out a small project for you to work on and have included some steps to help you out along the way.
If you get stuck on any step, or don't know how/what to do- just ask! This repo is a skeletal setup of what we normally use. Not everyone's tools are the same so feel free to add or remove anything here.


### Project Overview

Here's what the project structure looks like.
```
headers/
├── index.html
├── dist/
│   ├── main.css
│   ├── main.js
├── src/
│   ├── styles/
│   │   ├── base/
│   │   │   ├── _base.sass
│   │   │   └── _helpers.sass
│   │   ├── utils/
│   │   │   ├── _functions.sass
│   │   │   ├── _standardize.sass
│   │   │   ├── _type.sass
│   │   │   └── _vars.sass
│   │   ├── components/
│   │   │   ├── _hexagons.sass
│   │   │   └── _custom.sass
│   │   └── main.sass
│   └── scripts/
│       └── main.js
└── assets/
    └── images/ [all .svg files are here]
```

The files you'll be editing are `_hexagons.sass` and `_custom.sass`, and `main.js` if you want.
Take a look at the base styles to get an idea of what's there and what you can use and reuse-- please don't remove them, but feel free to extend any of them.

The project uses Neat by Thoughtbot-- version 1.

You'll notice there are 2 'styles' folders-- one contains `.sass` files and one contains `.scss` files. **Choose your sass flavor and then delete the other folder.**

### Tools

Assuming you're familiar with the following things:

- Git & Github
- A task runner / compiler (webpack, gulp, grunt, etc.)
- Sass/SCSS
- SVG
- Yarn or NPM
- Some grasp of the command line
- Text editors

If you aren't super comfortable with any of these, just let me know and I'll help you out.

If your process is completely different, go ahead and strip out or add anything you'd rather use! Again this is just a skeleton of what we use, but everyone is different.

### Steps

Alright let's do it. If you need more detail on any of these steps, just ask.

### Spin it up 🚀

1. Fork this repo
2. Open up your terminal and clone your repo so you have it locally. `git clone https://github.com/[your-username]/headers.git`
3. Go into the folder, `cd headers`.
4. I've included a `.gitignore` file, but chances are your environment won't be the same as mine.

    a. Go ahead and open up the `.gitignore` and erase it.

    b. You can develop a new file with this [awesome generator](https://www.gitignore.io/
      - Add your operating system, text editor, and sass.

**If you decide not to use git, you can manually download these files and set them up your own way**

### Choose your weapon 🔫

1. Choose which task runner you want to use (grunt, gulp, or webpack)
2. Delete the other task runner files
    - If you aren't using webpack, you can also remove `index.js`
3. Choose whether or not you want to use Indented Syntax (sass) or SCSS
4. Remove the other `styles-` folder you won't be using
5. **Important** make sure your task runner is configured with either `sass` or `scss` (you'll just have to change the folder name and file extension)

### Fire it up 🔥

1. `npm install` or `yarn` - you choose

All done!

### Hammer time 🔨

Your task runner is configured to compile the code you work on, and will fire up a local server so you can work faster.

- Gulp: `gulp watch`

- Grunt: `grunt watch`

- Webpack: `webpack-dev-server`

The watch task is configured to compile everything and then reload your browser for seamless development. Yeehaw.

### Bugs 👾

It's always possible you'll run into a bug. In the interest of time, if you find you're up against a bug you just know you can't figure out within 10 minutes, just holler at someone and we'll handle it. On the other hand, feel free to tackle/fix any all bugs you find in my code or elsewhere.

## Help

We've got your back so don't be afraid to not know something or be stuck.