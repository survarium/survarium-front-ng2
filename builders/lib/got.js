'use strict';

const http = require('http');
const https = require('https');

const got = function (url, options) {
    options = options || {};
    let data = '';
    return new Promise((resolve, reject) => {
        (url.match(/^https/) ? https : http)
            .get(url, res => {
                res
                    .on('data', chunk => {
                        data += chunk;
                    })
                    .on('end', () => {
                        resolve(options.json ? JSON.parse(data) : data);
                    });
            })
            .on('error', e => {
                reject(e);
            });
    });
};

module.exports = got;
