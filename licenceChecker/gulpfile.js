const gulp = require('gulp');

const argv = require('yargs').argv;
const checker = require('license-checker'); //https://www.npmjs.com/package/license-checker


//////////////////////////////////////////////////////////////////////////////////////////////////////
//  LICENSING TASK - PERMISSION DILIGENCE
//////////////////////////////////////////////////////////////////////////////////////////////////////
gulp.task('lice', () => {
    const allowedLicenseTypes = [
        "MIT", 
        "ISC", 
        "Apache-2.0", 
        "BSD-3-Clause", 
        "MIT*",
        "BSD*", 
        "Public Domain", 
        "Apache License, Version 2.0",
        "BSD-2-Clause",
        "ISC*",
        "Apache*",
        "(WTFPL OR MIT)",
        "BSD",
        "(MIT OR Apache-2.0)",
        "Apache 2.0",
    ];

    //Handling for dependencies(prod) vs devDependencies (dev)
    let dev = true;
    let prod = true;
    switch (argv.env) {
        case 'dev':
            prod = false;
            break;
        case 'prod':
            dev = false;
            break;
        default:
            prod = undefined;
            dev = undefined;
    }

    
    checker.init({
        start: './',
        development: dev,
        production: prod,
    }, (err, json) => {
        if (err) swallowError (err)
        else {
            let i
            for(i in json) {
                if (!json[i].licenses) console.log("WARNING: Missing Licence for: ", i)
                else {
                    let allowed = false
                    allowedLicenseTypes.forEach(licenseType => {
                        if(json[i].licenses === licenseType) allowed = true
                    });
                    if(!allowed) console.log("WARNING: Disallowed Licence type " + json[i].licenses + " for: " + i)
                }
                if (!json[i].repository) console.log("WARNING: Missing Repository for: ", i)
            }
        }
    });
})

//This will prevent hanging builds and allow for faster failure/feedback
function swallowError (error) {
    // If you want details of the error in the console
    console.log(error.toString())
    process.exit(1)
}
