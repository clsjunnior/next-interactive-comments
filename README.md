# Frontend Mentor - Interactive comments section solution

This is a solution to the [Interactive comments section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, Read, Update, and Delete comments and replies
- Upvote and downvote comments
- **Bonus**: If you're building a purely front-end project, use `localStorage` to save the current state in the browser that persists when the browser is refreshed.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

The concept of atomic design was used to build the components and Jest for unit tests.

Using Node to build a functional API using Prisma ORM with Postgres database to make the comments dynamic.

### Components list

### Atoms

| Component        | Develop | Testing |
|------------------|:--------------:|:------:|
| Button           |        ✔️        |   ✔️   |
| Avatar           |        ✔️        |   ✔️   |
| Textarea Input   |        ✔️        |   ✔️   |
| Card             |        ⬜️       |   ⬜️  |
| Badge            |        ✔️        |   ✔️   |
| Icon             |        ✔️        |   ✔️   |

### Molecules

| Component        | Develop        | Testing |
|------------------|:--------------:|:------: |
| User label       |       ⬜️       |    ⬜️   |
| Modal            |       ⬜️       |    ⬜️   |
| Icon Button      |       ⬜️       |    ⬜️   |
| Score Button     |       ⬜️       |    ⬜️   |

### Organisms

| Component               | Develop | Testing |
|-------------------------|:--------------:|:--------:|
| Delete Comments Modal   |        ⬜️       |    ⬜️   |
| Add Comments Card       |        ⬜️       |    ⬜️   |
| Nested Comments Content |        ⬜️       |    ⬜️   |

### Templates

| Component        | Develop | Testing |
|------------------|:--------------:|:------:|
| Comment list     |        ⬜️       |    ⬜️   |

### Pages

| Component        | Develop | Testing |
|------------------|:--------------:|:------:|
| Main page        |        ⬜️       |    ⬜️   |

### Built with

- NextJs
- TailwindCss
- Atomic Design
- Prisma ORM
- Next API routes
- ESlint and Prettier
- Husky
- Jest with react/testing-library
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

## Author

- Website - [Add your name here](https://cjunnior.dev)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
