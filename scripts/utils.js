'use-strict';

const fs = require('fs');
const { spawn } = require('child_process');

function deleteFile(filepath) {
  if (!fs.existsSync(filepath)) return;
  if (isDirectory(filepath)) {
    const file = fs.readdirSync(filepath);
    file.forEach((item) => {
      const fileWithPath = `${filepath}/${item}`;
      console.log(fileWithPath);
      if (isDirectory(fileWithPath)) {
        deleteFile(fileWithPath);
      } else {
        fs.unlinkSync(fileWithPath);
      }
    });
    fs.rmdirSync(filepath);
  } else {
    fs.unlinkSync(filepath);
  }
}

function isDirectory(filepath) {
  return fs.statSync(filepath).isDirectory();
}

function runCommand(command, params, cwd) {
  return new Promise((resolve, reject) => {
    const result = spawn(command, params, {
      cwd,
      stdio: 'inherit', // 打印命令原始输出
      shell: process.platform === 'win32', // 兼容windows系统
    });

    result.on('error', (err) => {
      reject(err);
    });

    result.on('close', (code) => {
      if (code === 0) resolve();
      else reject(code);
    });
  });
}

function copyFile(from, to) {
  fs.writeFileSync(to, fs.readFileSync(from));
}

module.exports = { deleteFile, isDirectory, runCommand, copyFile };
