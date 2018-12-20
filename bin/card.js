#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 5,
  margin: 5,
  borderStyle: 'double',
  float: 'center',
  borderColor: 'black',
  backgroundColor: 'black'
}

// Text + chalk definitions
const data = {
  name: chalk.white('             mJordan Levine /'),
  handle: chalk.black.bgBlueBright(' mjordancodes '),
  work: chalk.white('Lead Instructor at Alchemy Code Lab'),
  twitter: chalk.white('https://twitter.com/mjordancodes'),
  github: chalk.white('https://github.com/mjordancodes'),
  linkedin: chalk.white('https://linkedin.com/in/mjordancodes'),
  web: chalk.white('https://mjordan.codes'),
  npx: chalk.white('npx mjordancodes'),
  labelWork: chalk.rgb(244, 65, 65).bold('      Work:'),
  labelTwitter: chalk.rgb(255, 136, 0).bold('   Twitter:'),
  labelGitHub: chalk.rgb(255, 221, 0).bold('    GitHub:'),
  labelLinkedIn: chalk.rgb(191, 255, 0).bold('  LinkedIn:'),
  labelWeb: chalk.rgb(0, 237, 255).bold('       Web:'),
  labelCard: chalk.rgb(66, 134, 244).bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding

console.log(chalk.green(boxen(output, options)))
