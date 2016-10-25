'use strict';

const url = require('url');
const got = require('got');
const cheerio = require('cheerio');

function getUserUrl(username = '') {
  return `https://github.com/${username}`
}

function getUsername(userUrl = 'https://github.com/sindresorhus') {
  
  // @todo fix problems caused by using http protocol vs https
}
