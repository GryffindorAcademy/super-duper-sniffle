const chalk = require("chalk");

/**
 * Simple logging functions
 *
 * Used purely for development
 * In production, set environment variable DEBUG to FALSE
 */

const success = (...log) => {
  if (process.env.DEBUG === "TRUE") {
    console.log(chalk.default.white.bgCyan.bold(...log));
  }
};

const warning = (...log) => {
  if (process.env.DEBUG === "TRUE") {
    console.log(chalk.default.white.bgYellow.bold(...log));
  }
};

const error = (...log) => {
  if (process.env.DEBUG === "TRUE") {
    console.error(chalk.default.white.bgMagenta.bold(...log));
  }
};

const log = (...log) => {
  if (process.env.DEBUG === "TRUE") {
    console.log(chalk.default.white.bgWhite.bold(...log));
  }
};

module.exports = {
  success, 
  warning, 
  error, 
  log
}; 