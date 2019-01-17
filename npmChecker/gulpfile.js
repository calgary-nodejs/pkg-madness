const gulp = require('gulp');

const ncu = require('npm-check-updates'); //https://www.npmjs.com/package/npm-check-updates
const NPMpolicy = require('./NPM.policy.js');


//////////////////////////////////////////////////////////////////////////////////////////////////////
//  NPM-CHECK TASK
//////////////////////////////////////////////////////////////////////////////////////////////////////
gulp.task('npm-check', () => {
    let ignoreUpdateList = NPMpolicy._ignoreUpdateList;
    ncu.run({
        packageFile: 'package.json',
        reject: ignoreUpdateList
    }).then(upgraded => {
        if(JSON.stringify(upgraded).length > 2) {
            console.log('dependencies to upgrade:', upgraded);
            process.exit(1);
        } else console.log("All Modules up to date according to the NPM policy");
    });
})
