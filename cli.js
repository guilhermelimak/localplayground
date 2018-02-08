#!/usr/bin/env node

const util = require('util')
const chalk = require('chalk')
const exec = util.promisify(require('child_process').exec)
const log = console.log

const repo = 'https://github.com/guilhermelimak/localplayground.git'
const branch = 'master'

const printNpmScripts = () => {
  const pScripts = require('./package.json').scripts
  const scriptKeys = Object.keys(pScripts)

  log(
    scriptKeys.map(key => `  ${chalk.bold(key)}: ${pScripts[key]}`).join('\n')
  )
}

const cloneBoilerplate = async () => {
  try {
    await exec(`git clone --depth=1 --branch=${branch} ${repo} .`)
    await exec(`rm -rf ./.git`)
    log(chalk.green.bold('Boilerplate downloaded!'))
    log(`You can now write your code on the src/ folder.`)
    log()
    log(chalk.bold(`Available npm scripts:`))
    printNpmScripts()
  } catch (e) {
    log(chalk.red.bold(e))
  }
}

cloneBoilerplate()
