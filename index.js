#!/usr/bin/env node

const { program } = require('commander');
const inquirer = require('inquirer')
// 处理文件
const fs = require("fs");

// 引入模版 文件
const templates = require('./templates/index')

// 命令行选择列表
let prompList = [
  {
    type: 'list',
    name: 'template',
    message: '请选择你想要生成的模版？',
    choices: templates,
    default: templates[0],
  }
]


// 字符串分割为数组的方法
function strToArr(value, preValue){
    return value.split(',')
}
// cli版本
program.version(require('./package').version, '-v, --version', 'cli的最新版本');
// 设置选项
program
    .option('-d, --debug', '调试一下')
    .option('-l, --list <value>', '把字符串分割为数组', strToArr)
    .action((options, command) => {
        // 进行逻辑处理
        if(options.debug) {
            console.log("调试成功")
        }
        if(options.list !== undefined) {
            console.log(options.list)
        }
    });

program
    .command('create <filename>')
    .description('创建一个文件')
    .action(async(filename)=> {
      const res = await inquirer.prompt(prompList)
      if(res.template === 'reactFunction') {
        templates.forEach(item=> {
          if(item.name === 'reactFunction') {
            fs.writeFile(`./${filename}.tsx`, item.src(filename), function(err) {
              if(err) {
                console.log('创建失败：', err)
              } else {
                console.log(`创建文件成功！${filename}.tsx`)
              }
            })
          }
        })
      }
      if(res.template === 'vueTemplate') {
        templates.forEach((item) => {
            if(item.name === 'vueTemplate') {
                fs.writeFile(`./${filename}.vue`, item.src(), function(err) {
                    if(err) {
                        console.log('创建失败：', err)
                    } else {
                        console.log(`文件创建成功！${filename}`);
                    }
                })
            }
        })
    } 

    })

// 处理命令行输入的参数
program.parse(process.argv);
