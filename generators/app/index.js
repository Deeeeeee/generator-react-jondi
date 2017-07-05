'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.option('run-install', {
          desc: 'run npm install after bulit',
          type: Boolean
        });
    }

    initializing() { 
        this.pkg = require('../../package.json');
    }

    prompting() {  
        this.log(yosay('Welcome to the groundbreaking ' + chalk.red('example') + ' generator!' ));
        const prompts = [
            {
                type: 'input',
                name: 'appname',
                message: 'Name of app:', 
                default: 'react-menu'
            },
            {
                type: 'input',
                name: 'author',
                message: 'Author:', 
                default: 'jondi'
            },
            {
                type: 'list',
                name: 'isMobile',
                message: 'Type of project',
                choices: [{
                    name: 'PC',
                    value: false
                }, {
                    name: 'H5',
                    value: true
                }],
            }
        ];
        return this.prompt(prompts).then(props => {  
            this.appname = props.appname;
            this.author = props.author;
            this.isMobile = props.isMobile;
        });
    }

    writing () {
        this._writingPackageJSON(); 
        this._writingSrc();
        this._writingHtml();
        this._writingReadme();
        this._writingWebpackConfig();
    }

     _writingPackageJSON() {
        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'),
            {
                appname: this.appname,
                author: this.author
            }
        );
    }

    _writingHtml(){
        this.fs.copyTpl(
          this.templatePath('index.html'),
          this.destinationPath('index.html'),
          {
              isMobile: this.isMobile
          }
        );
    }

    _writingSrc() {
        this.fs.copy(
          this.templatePath('src'),
          this.destinationPath('src')
        );
    }

    _writingReadme(){
        this.fs.copy(
          this.templatePath('README.md'),
          this.destinationPath('README.md')
        );
    }

    _writingWebpackConfig(){
        this.fs.copy(
          this.templatePath('webpack.config.js'),
          this.destinationPath('webpack.config.js')
        );
    }

    _writingServer(){
        this.fs.copy(
          this.templatePath('server.js'),
          this.destinationPath('server.js')
        );
    }

    install () {
        
    }
    end () {
       
    }
};