import child_process from 'child_process';

const args = ['dist/index.js', process.env.INPUT_NAME, process.env.INPUT_FILE];
child_process.execFileSync('node', args, {stdio: 'inherit'});
