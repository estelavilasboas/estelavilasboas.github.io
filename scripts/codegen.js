var task = require('./task');
var dotenv = require('dotenv');

dotenv.config({ path: process.env.ENV_FILE ?? '.env'});

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;

const cleanSchema = task.newTask('Clean schema', 'npx rimraf ./src/app/data/graphql/schema.json');
const downloadSchema = task.newTask(
  'Donwload schema',
  `npx get-graphql-schema ${GRAPHQL_ENDPOINT} > ./src/app/data/graphql/schema.json --json`,
);
const generateSchema = task.newTask('Generating schema', `npx graphql-codegen --config codegen.yml`);

(async function () {
  await task.exec(cleanSchema);
  await task.exec(downloadSchema);
  await task.exec(generateSchema);
})();