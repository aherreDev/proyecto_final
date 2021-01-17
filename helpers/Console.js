const Colors = require("colors");

module.exports = {
  // ? Get parameters by index
  getParamByIndex: (paramIndex) => process.argv.slice(2)[paramIndex],
  // ? Print Warnings with colors
  printWarning: (warningText, commonText) =>
    console.log(
      `${Colors.bgYellow("WARNING:")} + ${Colors.yellow(warningText)}  ${commonText}`
    ),
  // ? Print Errors with colors
  printError: (errorText, commonText) =>
  console.log(
    `${Colors.bgRed("ERROR:")}  ${Colors.red(errorText)}  ${commonText}`
  ),
  // ? Print Success with colors
  printSuccess: (sucessText, commonText) =>
  console.log(
    `${Colors.bgGreen("SUCCESS:")}  ${Colors.green(sucessText)}  ${commonText}`
  ),
};
