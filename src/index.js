const { spawn } = require('child_process');

const execHidutil = (args, options) => {
  return new Promise((resolve, reject) => {
    const childProcess = spawn('hidutil', args);

    if (!options.quiet) {
      childProcess.stdout.pipe(process.stdout);
      childProcess.stderr.pipe(process.stderr);
    }

    childProcess.on('close', code => (code === 0 ? resolve() : reject()));
  });
};

const getProperty = (key, options = {}) => {
  return execHidutil(['property', '--get', key], options);
};

const setProperty = (values, options = {}) => {
  return execHidutil(['property', '--set', JSON.stringify(values)], options);
};

const list = (options = {}) => {
  return execHidutil(['list']);
};

const hidutil = {
  getProperty,
  list,
  setProperty,
};

module.exports = hidutil;
