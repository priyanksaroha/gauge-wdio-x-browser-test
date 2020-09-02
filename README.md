# gauge-wdio-x-browser-test
A cross browser test automation app using `Gauge` and `WebdriverIO`

## Table of Contents

- [gauge-wdio-x-browser-test](#gauge-wdio-x-browser-test)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Execute Tests](#execute-tests)
    - [grunt gauge-tests [options]](#grunt-gauge-tests-options)
    - [yarn commands](#yarn-commands)
      - [Syntax: `yarn test:<browser>`](#syntax-yarn-testbrowser)


## Getting Started

1. Install [Active LTS](https://github.com/nodejs/Release#release-schedule) (Long Term Support) version of Node.js and use **npm@6**

2. Clone the repo and install dependencies

```bash
git clone https://github.com/pradeep0601/gauge-wdio-x-browser-test.git

# Switch to the project directory
cd gauge-wdio-x-browser-test

# Install project node modules.
yarn
```

## Execute Tests

Use below grunt commands to execute test - 

### grunt gauge-tests [options]

It will run test as per given options.

`options`

- `--browser=<browserName>` runs test on given browser.(***supported browser: chrome(default), firefox, edge, ie and safari***)
- `--headless` runs test against given browser in headless mode (***supported browser: chrome, firefox***)
- `--tags=<tagName>` runs only those `scenario` which is tagged with given tagName.
- `--env=<envValue>` runs test on given environment (***Valid value: integration, prod***).

```bash
grunt gauge-tests --browser=ie
```
will run all tests `locally` against internet explorer

```bash
grunt gauge-tests --browser=ie --tags=search
```
will run all scenarios tagged with `search` `locally` against internet explorer

### yarn commands

You can use below yarn commands as well to run test cases

#### Syntax: `yarn test:<browser>`

**Example:**

```
yarn test:ie will run tests locally

```
