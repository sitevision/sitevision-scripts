const zipdir = require('zip-dir');
const fs = require('fs');
const properties = require('../util/properties');
const chalk = require('chalk');

(function () {
  if (!fs.existsSync(properties.DIST_DIR_PATH)) {
    fs.mkdirSync(properties.DIST_DIR_PATH);
  }

  const { id } = properties.getManifest();
  zipdir(
    properties.BUILD_DIR_PATH,
    { saveTo: `${properties.DIST_DIR_PATH}/${id}.zip` },
    (err) => {
      if (err) {
        return console.error(`${chalk.red('Compression failed:')}, ${err}`);
      }

      console.log(`${chalk.green('Compression successful')}`);
    }
  );
})();
