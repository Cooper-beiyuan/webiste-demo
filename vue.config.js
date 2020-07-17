'use strict'
const titles = require('./title.js')
const templates = require('./templates.js')
const glob = require('glob')
const pages = {}

glob.sync('./src/pages/**/app.js').forEach(path => {
  const chunk = path.split('./src/pages/')[1].split('/app.js')[0]
  console.log('path', path, chunk)
  let filename = `${chunk}/index.html`;
  if (chunk === 'index') {
    filename = 'index.html';
  }
  pages[chunk] = {
    entry: path,
    template: templates[chunk] ? templates[chunk] : 'public/index.html',
    title: titles[chunk] ? titles[chunk] : 'Dr. Panda',
    data: chunk,
    filename: filename,
    chunks: ['chunk-vendors', 'chunk-common', chunk]
  }
})

module.exports = {
  publicPath: '/',
  pages,
  chainWebpack: config => {
    config.plugins.delete('named-chunks')
  },
}
