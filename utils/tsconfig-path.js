const { join } = require('path');

const packageJsonPath = join(process.cwd(), 'package.json');
const packageJson = require(packageJsonPath); // eslint-disable-line import/no-dynamic-require

module.exports = packageJson.workspaces
    ? packageJson.workspaces.map((workspace) => join(workspace, '/tsconfig.json'))
    : 'tsconfig.json';