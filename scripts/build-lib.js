'use-strict';

const ora = require('ora');
const { deleteFile, runCommand, copyFile } = require('./utils');

const cwd = process.cwd();

// 删除 dist
const deleteOra = ora('正在删除：dist...\n').start();
deleteFile(cwd + '/dist');
deleteOra.succeed('dist 删除完成！\n');

// ts编译成js
const builldOra = ora('正在将ts编译成js...').start();

runCommand('yarn', ['run tsc'], cwd).then(() => {
  builldOra.succeed('编译完成！\n');

  // 复制类型文件
  const copyOra = ora('正在复制 index.d.ts...\n').start();

  copyFile('./src/index.d.ts', './dist/index.d.ts');
  copyOra.succeed('index.d.ts 复制完成！\n');

  ora().succeed('打包输出 dist 完成！\n');
});
