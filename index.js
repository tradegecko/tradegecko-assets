/* eslint-env node */
'use strict';

var BroccoliFunnel = require('broccoli-funnel');
var BroccoliMergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: require('./package').name,

  treeForStyles(){
    console.log()
    return BroccoliFunnel('./node_modules/@tradegecko/styles/scss',{
      destDir: '@tradegecko/styles',
    }
    );
  }
};
