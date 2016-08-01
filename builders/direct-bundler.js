'use strict';

const fs = require('fs');
const path = require('path');
const got = require('./lib/got');

let anPath;
let anVersion;

let CONTEXT;
let CONTEXT_STATIC;

function write() {
    return new Promise((resolve, reject) => {
        let target = path.join(__dirname, '..', 'app', 'services', 'direct.js');
        
        fs.writeFile(target, `${CONTEXT} ${CONTEXT_STATIC}`, (err) => {
            if (err) {
                return reject(err);
            }
            resolve(target);
        });
    });
}

got('https://an.yandex.ru/system/context.js')
    .then(context => {
            context = context
                .replace('(this,this.document)', '(window,window.document)')
                .replace(/var .{1,2}="(an\.yandex\.ru.*)";if\(.{1,2}.getElementById\(.{1,2}\)&&/, 'if(');
        
            anPath = `https://${RegExp.$1}`;
        
            return CONTEXT = context.replace(/;var .{1,2}="https:\/\/.*\<\/script\>'\)/, '');
        }
    )
    .then(context => {
        let versions = context.match(/codeVer=\d+/g);
        
        if (!versions || !versions.length) {
            return console.error('Fail to determine an.yandex.ru version');
        }
        
        versions = versions
            .map(ver => +ver.match(/\d+/))
            .sort((a, b) => b - a);
        
        anVersion = versions[0];
        
        return got(anPath = anPath.replace(/".+"/, anVersion));
    })
    .then(context_static => CONTEXT_STATIC = context_static)
    .then(write)
    .then(target => console.log(`Direct bundled to ${target}`));
        
