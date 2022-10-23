# NextJS SaaS Starter Template 

## Technologies 
- TailwindCSS
- Jest (React testing library)
- Husky (pre commit)
- ESLint & Prettier  
- Typescript 
- Next Auth

## Get Started

1. Install dependencies

```
yarn
```

2. Get dev site up and running locally

```
yarn dev
```

## Testing, workflow and CI/CD

Testing is done using the Jest framework and React Testing Library

There are several scripts and pre-scripts:

```bash
# basic test script
"test": "jest --silent --runInBand --watchAll=false",
# run in watch mode to save manually restarting tests
"test:watch": "jest --runInBand --watchAll",
# single run with coverage
"test:coverage": "yarn jest --coverage ",
# use this when committing instead of git commit -m '' - it enforces solid git commit messages making it easier to see past work
"commit-cli": "git-cz"
```

Husky is also implemented to run linting before committing and testing before pushing

This template also includes the release process, using `semantic-release`. On `push` events to `main` via pull requests, the package gets triggered, generating release notes and bumping the version in `package.json`.


## Update Log 

### 5th April 2022
Pulled together from previous client projects. 

## Hours

<!-- Setup and Landing -->
Tue Sept 20 - 2 hours
Wed Sept 21 - 2.5 hours
Thurs Sept 22 - 1.5 hours
Fri Sept 23 - 2 hours
Sat Sept 24 - 2.5 hours

<!-- About -->
Mon Sept 26 - 2.5 hours

<!-- About and Testimonial -->
Tues Sept 27 - 2 hours

<!-- Careers, form, locales, responsiveness -->
Wed Sept 29 - 3.5 hours

<!-- Cookies -->
Thurs Sept 30 - 1.5 hours

<!-- Requested changes -->
Sat Oct 1 - 3.5 hours

<!-- Requested changes -->
Sun & Mon Oct 2 & 3 - 1 hour

<!-- Requested changes -->
Wed & Thurs Oct 5 & 6 - 2 hours

<!-- TOTAL TO DATE -->
25.5 hours

## Adding items to services

To add items to services, you will need to add them into the `services1` or `services2` array and have them correspond to the new locales / copies