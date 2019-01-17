let NPMpolicy = {

    _ignoreUpdateList : [
        'gulp-mocha', //MAJOR UPDATE
        'yargs', //MAJOR UPDATE
        'socket.io', //MAJOR UPDATE - not being used
        'moo', // Latest moo (0.5.0) doesn't seem to work with the latest Nearley (2.15.11)
        'stripe',//New minor version available as of May 11th - waiting week for potential issues to shake out.
        'gulp-minify',//New major version available to v1.0.0 from 0.0.15 as of May 12th - waiting week for potential issues to shake out.
        'express-rate-limit', //New minor version available as of May 15th - waiting week for potential issues to shake out.
        'body-parser', //minor update - being a naughty pacakge - check later
        'gulp-uglify', //MAJOR UPDATE may 20th
        'gulp-imagemin', //Minor update may 31st
        'run-sequence', //minor update july 4th
        'compression', //minor update july 11th  
        'fs-extra',
        'helmet', //minor update july 21st
        'gulp-babel', //MAJOR update Aug 7th 6.1.2 to 7.0.0
        'morgan', // minor update Sep 27th
        'aws-sdk', //Minor update October 26th 2017
        'mongoose', // ignoring update for urgency
        'webpack', //downgraded to v3 as v4 appears to have bugs with plugin provider,
        'webpack-stream', //Keeping at V4 as V5 breaks frontend
        'babel-loader', // version 8 borked for asyncawaits
        'gulp-htmlmin', // currently ver 4 - waiting till ver 5 is stable
        'express-fileupload', // Oct 18 offical 1.0.0 release from alpha
    ],
} 

module.exports = NPMpolicy;
