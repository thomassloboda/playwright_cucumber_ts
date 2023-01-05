// module.exports = {
//   default:
//     "./features --require-module ts-node/register --require ./features/support/world.ts --require ./features/support/setup.ts --require ./features/**/*.step.ts",
//   format: [
//     "progress-bar",
//     "json:./reports/cucumber-report.json",
//     "html:./reports/cucumber-report.html",
//   ],
// };

module.exports = {
  default: {
    paths: ["./features"],
    requireModule: ["ts-node/register"],
    require: [
      "./features/support/world.ts",
      "./features/support/setup.ts",
      "./features/**/*.step.ts",
    ],
    format: [
      "progress-bar",
      "json:./reports/cucumber-report.json",
      "html:./reports/cucumber-report.html",
    ],
  },
};
