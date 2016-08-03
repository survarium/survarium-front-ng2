'use strict';

const fs = require('fs');
const path = require('path');
const got = require('./lib/got');

const config = require('../webpack.config');

let anPath;
let anVersion;

let CONTEXT;
let CONTEXT_STATIC;

let target = path.join(__dirname, '..', 'app', 'assets', 'direct.js');
let fallback = path.join(__dirname, '..', 'app', 'services', 'direct_fallback.js');

function write() {
    return new Promise((resolve, reject) => {
        if (!CONTEXT || !CONTEXT_STATIC) {
            return reject(new Error('Content is not fully fetched'));
        }
        
        fs.writeFile(target, `${CONTEXT} ${CONTEXT_STATIC}`, (err) => {
            if (err) {
                return reject(err);
            }
            resolve(target);
        });
    });
}

function copyFile(source, target) {
    return new Promise((resolve, reject) => {
        var cbCalled = false;
    
        var rd = fs.createReadStream(source);
        rd.on('error', function(err) {
            done(err);
        });
        var wr = fs.createWriteStream(target);
        wr.on('error', function(err) {
            done(err);
        });
        wr.on('close', function() {
            done();
        });
        rd.pipe(wr);
    
        function done(err) {
            if (!cbCalled) {
                err ? reject(err) : resolve(target);
                cbCalled = true;
            }
        }
    });
}

console.log('Bundling Yandex direct **UNUSED**');

got('https://an.yandex.ru/system/context.js')
    .then(context => {
            context = context
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
    .then(context_static => CONTEXT_STATIC = context_static
        .replace(/(http(s)?:\/\/)?an\.yandex\.ru/g, `${config.metadata.API_PATH}/v2/an`)
        .replace(/(jserrlog:)"https:\/\/an([^"]*)"/, '$1"https://an.yandex.ru$2"')
    )
    .then(write)
    .catch(err => {
        console.error(err);
    
        return copyFile(fallback, target);
    })
    .then(target => console.log(`Direct bundled to ${target}\n`));
        
