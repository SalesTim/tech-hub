'use strict'

// #region DECLARATIONS
// Platform Dependencies
const os = require('os')
const fs = require('fs')
// External Dependencies
const figlet = require('figlet')
const gulp = require('gulp')
const bump = require('gulp-bump')
const git = require('gulp-git')
const concat = require('gulp-concat')
const YAML = require('yamljs')
// Variables
const CONSOLE_PADDING = 120
const ROOT_FOLDER = './'
const PACKAGE_FILE = ROOT_FOLDER + 'package.json'
let pck = require(PACKAGE_FILE) // Not declared as a const as it may be refreshed/updated durung build
const SRC_FOLDER = ROOT_FOLDER + 'src/'
const PUBLIC_FOLDER = SRC_FOLDER + 'app/.vuepress/public/'
const JS_FOLDER = PUBLIC_FOLDER + 'js/'
const CSS_FOLDER = PUBLIC_FOLDER + 'css/'
// #endregion DECLARATIONS

// #region INITIALIZATION

/**
 * Log startup parameters to console
 * @param {function} done - Callback()
 */
const logInfos = (done) => {
  try {
    // Generate ASCII header using figlet
    figlet.text('Tech Hub', {
      font: 'Big',
      horizontalLayout: 'default',
      verticalLayout: 'default'
    }, (err, data) => {
      if (!err) {
        // Log basic system and package infos
        console.info(''.padEnd(CONSOLE_PADDING, '*'))
        console.info(''.padEnd(CONSOLE_PADDING, ' '))
        console.log('SalesTim')
        console.log(data)
        console.info('PACKAGE '.padEnd(CONSOLE_PADDING, '-'))
        console.info((' * NAME: ' + pck.name).padEnd(CONSOLE_PADDING, ' '))
        console.info((' * DESCRIPTION: ' + pck.description).padEnd(CONSOLE_PADDING, ' '))
        console.info((' * VERSION: ' + pck.version).padEnd(CONSOLE_PADDING, ' '))
        console.info(''.padEnd(CONSOLE_PADDING, ' '))
        console.info('SYSTEM '.padEnd(CONSOLE_PADDING, '-'))
        console.info((' * HOSTNAME: ' + os.hostname().toLocaleUpperCase()).padEnd(CONSOLE_PADDING, ' '))
        console.info((' * TYPE: ' + os.type().toLocaleUpperCase()).padEnd(CONSOLE_PADDING, ' '))
        console.info((' * RELEASE: ' + os.release().toLocaleUpperCase()).padEnd(CONSOLE_PADDING, ' '))
        console.info((' * ARCHITECTURE: ' + os.arch().toLocaleUpperCase()).padEnd(CONSOLE_PADDING, ' '))
        console.info((' * PLATFORM: ' + os.platform().toLocaleUpperCase()).padEnd(CONSOLE_PADDING, ' '))
        console.info((' * UPTIME: ' + os.uptime()).padEnd(CONSOLE_PADDING, ' '))
        console.info(''.padEnd(CONSOLE_PADDING, ' '))
        console.info(''.padEnd(CONSOLE_PADDING, '*'))
        done()
      } else {
        console.error('Error while generating build infos...')
        console.dir(err)
        done()
      }
    })
  } catch (err) { // Unexpected error
    console.error('Unexpected error logging build infos')
    console.dir(err)
    done()
  }
}

// #endregion INITIALIZATION

// #region BUILD

/**
 * Concatenate js dependencies in one file
 * @param {function} done - Callback()
 */
const concatJs = (done) => {
  gulp.src([
    './src/app/.vuepress/public/js/ga.js',
    './src/app/.vuepress/public/js/intercom.js',
    './node_modules/uikit/dist/js/uikit.min.js',
    './node_modules/uikit/dist/js/uikit-icons.min.js',
    './node_modules/msal/dist/msal.min.js',
    './node_modules/moment/min/moment.min.js'
  ])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest(JS_FOLDER)).on('end', () => {
      done()
    })
}

/**
 * Concatenate css dependencies in one file
 * @param {function} done - Callback()
 */
const concatCss = (done) => {
  gulp.src([
    './node_modules/uikit/dist/css/uikit.min.css'
  ])
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(CSS_FOLDER)).on('end', () => {
      done()
    })
}

const convertOpenApiYamlToJson = (done) => {
  try {
    const srcYamlFiles = [
      './src/app/api/definitions/v1.0/open-api/apiDefinition.swagger.yaml',
      './src/app/api/definitions/v1.0/open-api/power-platform/apiDefinition.swagger.yaml'
    ]
    for (let index = 0; index < srcYamlFiles.length; index++) {
      const srcYamlFile = srcYamlFiles[index] // eslint-disable-line
      const targetJsonFile = srcYamlFile.replace('.yaml', '.json')

      fs.readFile(srcYamlFile, 'utf8', (err, data) => { // eslint-disable-line
        if (!err) {
          console.log('JSON file has been saved.')
          const openApiJson = YAML.parse(data)
          fs.writeFile(targetJsonFile, JSON.stringify(openApiJson), 'utf8', function (err) { // eslint-disable-line
            if (!err) {
              console.log('JSON file has been saved.')
              if (index === srcYamlFiles.length - 1) {
                done()
              }
            } else {
              console.error('An error occured while writing JSON Object to File.')
              console.dir(err)
              done(err)
            }
          })
        } else {
          console.error('An error occured while reading YAML File.')
          console.dir(err)
          done(err)
        }
      })
    }
  } catch (err) { // Unexpected error
    console.error('Unexpected error in /gulpfile/convertOpenApiYamlToJson.')
    console.dir(err)
    done(err)
  }
}

// #endregion BUILD

// #region PUSH

// Update package build version using the "Bump" package
const bumpPackageJson = (done) => { // eslint-disable-line no-unused-vars
  gulp.src([ROOT_FOLDER + 'package.json'])
    .pipe(bump({ type: 'patch' }))
    .pipe(gulp.dest(ROOT_FOLDER)).on('end', () => {
      // Clear package from cache
      delete require.cache[require.resolve(ROOT_FOLDER + 'package.json')]
      pck = require(ROOT_FOLDER + 'package.json')
      done()
    })
}

const commitChanges = (done) => {
  return gulp.src('.')
    .pipe(git.add())
    .pipe(git.commit('build: v' + pck.version)).on('end', () => {
      done()
    })
}

const pushToMaster = (done) => {
  git.push('origin', 'master', done)
}

// #endregion PUSH

// #region EXPORTS

exports.infos = gulp.series(
  logInfos
)
exports.build = gulp.series(
  logInfos,
  concatJs,
  concatCss,
  convertOpenApiYamlToJson
)
exports.push = gulp.series(
  logInfos,
  bumpPackageJson,
  commitChanges,
  pushToMaster
)

// #endregion EXPORTS
