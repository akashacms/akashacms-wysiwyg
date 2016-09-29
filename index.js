
'use strict';

const path        = require('path');
const akasha      = require('akasharender');
const mahabhuta   = require('mahabhuta');

const log   = require('debug')('akashacms-wysiwyg:main');
const error = require('debug')('akashacms-wysiwyg:main');


module.exports = class WYSIWYGPlugin extends akasha.Plugin {
	constructor() {
		super("akashacms-wysiwyg");
	}

	configure(config) {
		this._config = config;
		config.addAssetsDir(path.join(__dirname, 'assets'));
        config.addStylesheet({ href: "/vendor/wysiwyg.css/wysiwyg.css" })
    }
}
