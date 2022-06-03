const path = require('path')
const cwd = process.cwd()

module.exports = {
  data: '@import "./src/styles/variables";',
  includePaths: [path.resolve(cwd, 'src', 'scss')],
}
