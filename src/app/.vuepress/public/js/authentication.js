// ################################################################################################
// # AZURE AD AUTHENTICATION MODULE
// ################################################################################################

// #region DECLARATIONS

const TEST_MODE = false

// Config object to be passed to Msal on creation.
// For a full list of msal.js configuration parameters,
// visit https://azuread.github.io/microsoft-authentication-library-for-js/docs/msal/modules/_authenticationparameters_.html
var msalConfig = null

// Add here scopes for id token to be used at MS Identity Platform endpoints.
var loginRequest = null

// Add here scopes for access token to be used at MS Graph API endpoints.
var tokenRequest = null

// Add here the endpoints for MS Graph API services you would like to use.
var graphConfig = null

// Create the main myMSALObj instance
// configuration parameters are located at authConfig.js
var myMSALObj = null

// #endregion DECLARATIONS

// #region GRAPH HELPERS

// Helper function to call MS Graph API endpoint
// using authorization bearer token scheme
function callMSGraph(endpoint, token, callback) {
  const bearer = `Bearer ${token}`
  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': bearer
    }
  }
  console.log('request made to Graph API at: ' + new Date().toString())
  fetch(endpoint, options)
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return response.json()
    })
    .then(function (response) {
      callback(response, endpoint)
    })
    .catch(function (error) {
      console.log(error)
    })
}

function callMSGraphBinary(endpoint, token, callback) {
  const bearer = `Bearer ${token}`
  const options = {
    method: 'GET',
    headers: {
      'Authorization': bearer
    }
  }
  console.log('binary request made to Graph API at: ' + new Date().toString())
  fetch(endpoint, options)
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return response.blob()
    })
    .then(function (response) {
      callback(response, endpoint)
    })
    .catch(function (error) {
      console.log(error)
    })
}

// #endregion GRAPH HELPERS

// #region SALESTIM API HELPERS

function getApps(callback) {
  const bearer = 'Bearer ' + window.explorerLoggedUser.accessToken
  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': bearer
    }
  }

  if (TEST_MODE) {
    var apps = [
      { name: 'aaa', description: 'aaa', id: '123', secret: '123' },
      { name: 'bbb', description: 'bbb', id: '456', secret: '456' },
      { name: 'ccc', description: 'ccc', id: '789', secret: '789' }
    ]
    if (callback) { callback(null, apps) }
    window.explorerApps = apps
    initAppSelector(apps)
    return apps
  }

  fetch('https://api.salestim.io/v1.0/apps', options)
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return response.json()
    })
    .then(function (response) {
      if (callback) { callback(null, response.body) }
      window.explorerApps = response.body
      initAppSelector(window.explorerApps)
    })
    .catch(function (error) {
      console.error('Error in getApps')
      console.dir(error)
      if (callback) { callback(error, null) }
    })
}

function createApp(callback) {
  const bearer = 'Bearer ' + window.explorerLoggedUser.accessToken
  var newApp = {
    name: document.getElementById('newAppName').value,
    description: document.getElementById('newAppDescription').value
  }
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': bearer
    },
    body: JSON.stringify(newApp)
  }

  if (TEST_MODE) {
    newApp.id = "321"
    newApp.secret = "321"
    window.explorerApps.push(newApp)
    if (callback) { callback(null, newApp) }
    initAppSelector(window.explorerApps)
    return window.explorerApps
  }

  fetch('https://api.salestim.io/v1.0/apps', options)
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return response.json()
    })
    .then(function (response) {
      if (callback) { callback(null, response.body) }
      window.explorerApps.push(response.body)
      initAppSelector(window.explorerApps)
    })
    .catch(function (error) {
      console.error('Error in createApp')
      console.dir(error)
      if (callback) { callback(error, null) }
    })
}
// #endregion SALESTIM API HELPERS

// #region AUTHENTICATION - POPUP MODE

function initExplorerHeader() {
  // Init vars
  if (!msalConfig) {
    msalConfig = {
      auth: {
        clientId: '107219e4-ae69-4096-800e-c9cc2be660c7',
        // authority: "https://login.microsoftonline.com/common",
        authority: 'https://login.microsoftonline.com/common',
        redirectUri: window.location.origin + '/api/explorer'
      },
      cache: {
        cacheLocation: 'sessionStorage', // This configures where your cache will be stored
        storeAuthStateInCookie: false // Set this to "true" if you are having issues on IE11 or Edge
      }
    }
  }
  if (!loginRequest) {
    loginRequest = {
      scopes: ['email', 'offline_access', 'openid', 'profile', 'User.Read']
    }
  }
  if (!tokenRequest) {
    tokenRequest = {
      scopes: ['User.Read']
    }
  }
  if (!graphConfig) {
    graphConfig = {
      graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me',
      graphPhotoEndpoint: 'https://graph.microsoft.com/v1.0/me/photo/$value'
    }
  }
  if (!myMSALObj) {
    myMSALObj = new Msal.UserAgentApplication(msalConfig)
  }

  // Check pre-existing account
  if (myMSALObj.getAccount()) {
    getAccessToken()
  } else {
    setAnonymous()
  }
}

function signIn() {
  myMSALObj
    .loginPopup(loginRequest)
    .then(loginResponse => {
      console.log('id_token acquired at: ' + new Date().toString())
      console.log(loginResponse)

      if (myMSALObj.getAccount()) {
        getAccessToken()
      }
    })
    .catch(error => {
      console.log(error)
    })
}

function getAccessToken() {
  getTokenPopup(loginRequest)
    .then(response => {
      console.info('Access Token:')
      console.dir(response.accessToken)
      callMSGraph(
        graphConfig.graphMeEndpoint,
        response.accessToken,
        function (data, endpoint) {
          console.log('Data:')
          console.dir(data)
          console.log('Endpoint:')
          console.dir(endpoint)
          window.explorerLoggedUser = response
          // getApps(function (err, apps) {
          //   if (!err) {
          //     console.info(apps)
          //   } else {
          //     console.error('Error in getApps')
          //     console.dir(err)
          //   }
          // })

          setBearerAuth(response.accessToken)
          setAuthenticated(response, data)
          UIkit.notification({
            message: 'Successfully signed-in...',
            status: 'success',
            timeout: 2000
          })
        }
      )
    })
    .catch(error => {
      console.log(error)
      setAnonymous()
    })
}

// Send access token to swagger ui
function setBearerAuth(token) {
  // "Bearer " is automatically added by swagger ui
  ui.preauthorizeApiKey('bearerAuth', token)
}

// Send app secret to swagger ui
function setAppSecret(appSecret) {
  ui.preauthorizeApiKey('appSecret', appSecret)
}

function signOut() {
  window.explorerLoggedUser = null
  // Actually don't do a real ad logout to prevent a global browser-wide logout
  // myMSALObj.logout()
  // Reset swagger ui bearer token
  setBearerAuth('')
  setAnonymous()
  UIkit.notification({
    message: 'Successfully signed-out...',
    status: 'success',
    timeout: 2000
  })
}

function getTokenPopup(request) {
  return myMSALObj.acquireTokenSilent(request).catch(error => {
    console.log(error)
    console.log(
      'silent token acquisition fails. acquiring token using popup'
    )

    // fallback to interaction when silent call fails
    return myMSALObj
      .acquireTokenPopup(request)
      .then(tokenResponse => {
        return tokenResponse
      })
      .catch(error => {
        console.log(error)
      })
  })
}

// #endregion AUTHENTICATION - POPUP MODE

// #region UI

function initAppSelector(apps) {
  if (apps) {
    if (apps.length > 0) {
      // Initialize apps list
      var appsList = document.getElementsByClassName('apps-list')[0]
      appsList.innerHTML = ''
      apps.forEach((app, i) => {
        var li = document.createElement('li')
        var a = document.createElement('a')
        a.href = '#'
        a.setAttribute('app-id', app.id)
        a.innerText = app.name
        li.appendChild(a)
        appsList.appendChild(li)
      })

      // Initialize apps content
      var appsContentElement = document.getElementsByClassName('apps-contents')[0]
      appsContentElement.innerHTML = ''
      apps.forEach((app, i) => {
        var li = document.createElement('li')
        var appsHtmlContent = ''
        appsHtmlContent += `
        <dl class="uk-description-list">
        <dt>Name</dt>
        <dd>
        ${app.name}
        </dd>
        <dt>Description</dt>
        <dd>
        ${app.description}
        </dd>
        <dt>App ID</dt>
        <dd>
        ${app.id}
        </dd>
        <dt>App secret</dt>
        <dd>
        ************************************
        </dd>
        </dl>`
        li.innerHTML += appsHtmlContent
        appsContentElement.appendChild(li)
      })
      UIkit.tab(document.getElementById('appsTabs'), null)
      showAppsFilled()
    } else {
      showAppsEmpty()
    }
  } else {
    showAppsEmpty()
  }
}

function showAppsFilled() {
  document.getElementById('appsListEmpty').style.display = "none"
  document.getElementById('appsListFilled').style.display = ""
  document.getElementById('selectAppButton').style.display = ""
}

function showAppsEmpty() {
  document.getElementById('appsListEmpty').style.display = ""
  document.getElementById('appsListFilled').style.display = "none"
  document.getElementById('selectAppButton').style.display = "none"
}

function enableLoading() {
  document.getElementById('loading').style.display = ""
  document.getElementById('loginCard').style.display = "none"
}

function disableLoading() {
  document.getElementById('loading').style.display = "none"
  document.getElementById('loginCard').style.display = ""
}

function setAnonymous() {
  disableLoading()
  window.explorerLoggedUser = null
  document.getElementById('loginDateTime').innerText = '...'
  document.getElementById('userDisplayName').innerText = 'Anonymous'
  document.getElementById('profilePicture').setAttribute('src', '/img/avatar.png')
  document.getElementById('delegatedModeStatus').innerText = '🔴'
  document.getElementById('logoutButton').style.display = 'none'
  document.getElementById('loginButton').style.display = 'block'
}

function setAuthenticated(userInfos, profile) {
  disableLoading()
  document.getElementById("loginDateTime").innerText = profile.mail + ' (sign-in: ' + moment().format('MMMM Do YYYY, h:mm:ss a') + ')'
  document.getElementById("userDisplayName").innerText = profile.displayName
  setProfilePicture(userInfos.accessToken)
  document.getElementById('delegatedModeStatus').innerText = '🟢'
  document.getElementById('loginButton').style.display = 'none'
  document.getElementById('logoutButton').style.display = 'block'
}

// function toggleAdvanced () {
//   var advancedZoneTitle = document.getElementsByClassName('servers-title')[0]
//   var advancedZoneServers = document.getElementsByClassName('servers')[0]
//   if (advancedZoneTitle.style.display === 'none' || advancedZoneTitle.style.display === '') {
//     advancedZoneTitle.style.display = 'block'
//     advancedZoneServers.style.display = 'block'
//   } else {
//     advancedZoneTitle.style.display = 'none'
//     advancedZoneServers.style.display = 'none'
//   }
// }

function selectApp() {
  UIkit.modal(document.getElementById('appSelectorModal')).hide()
  var selectedAppId = document.querySelector('.uk-tab-left .uk-active a').getAttribute('app-id')
  var app = getAppById(selectedAppId)
  if (app) {
    document.getElementById('appSelectorButton').classList.remove('uk-button-primary')
    document.getElementById('appSelectorButton').classList.add('uk-button-default')
    // document.getElementById('selectedAppLabel').innerText = app.name
    document.getElementById('selectedAppLabel').innerHTML = `
      <span uk-icon="icon: check; ratio: 0.7"></span>&nbsp;<span
      class="uk-text-middle"
      >${app.name}</span
      >`
    setAppSecret(app.secret)
    document.getElementById('applicationModeStatus').innerHTML = '🟢'
  }
}

function getAppById(appId) {
  var foundApp = null
  window.explorerApps.forEach((app, i) => {
    if (app.id === appId) {
      foundApp = app
    }
  })
  return foundApp
}

function setProfilePicture(token) {
  callMSGraphBinary(graphConfig.graphPhotoEndpoint, token, function (response, endpoint) {
    const url = window.URL || window.webkitURL
    const blobUrl = url.createObjectURL(response)
    document.getElementById('profilePicture').setAttribute("src", blobUrl)
  })
}

// #endregion UI

// #region AUTHENTICATION - REDIRECT MODE

/*

// Create the main myMSALObj instance
// configuration parameters are located at authConfig.js
const myMSALObj = new Msal.UserAgentApplication(msalConfig);

let accessToken;

// Register Callbacks for Redirect flow
myMSALObj.handleRedirectCallback(authRedirectCallBack);

function authRedirectCallBack (error, response) {
if (error) {
console.log(error);
} else {
if (response.tokenType === "id_token") {
  console.log('id_token acquired at: ' + new Date().toString());
} else if (response.tokenType === "access_token") {
  console.log('access_token acquired at: ' + new Date().toString());
  accessToken = response.accessToken;

  callMSGraph(graphConfig.graphMailEndpoint, accessToken, updateUI);
  profileButton.style.display = 'none';
  mailButton.style.display = 'initial';
} else {
  console.log("token type is:" + response.tokenType);
}
}
}

// Redirect: once login is successful and redirects with tokens, call Graph API
if (myMSALObj.getAccount()) {
showWelcomeMessage(myMSALObj.getAccount());
}

function signIn () {
myMSALObj.loginRedirect(loginRequest);
}

function signOut () {
myMSALObj.logout();
}

// This function can be removed if you do not need to support IE
function getTokenRedirect (request, endpoint) {
return myMSALObj.acquireTokenSilent(request, endpoint)
.then((response) => {
  console.log(response);
  if (response.accessToken) {
    console.log('access_token acquired at: ' + new Date().toString());
    accessToken = response.accessToken;

    callMSGraph(endpoint, response.accessToken, updateUI);
    profileButton.style.display = 'none';
    mailButton.style.display = 'initial';
  }
})
.catch(error => {
  console.log("silent token acquisition fails. acquiring token using redirect");
  // fallback to interaction when silent call fails
  return myMSALObj.acquireTokenRedirect(request)
});
}

function seeProfile () {
getTokenRedirect(loginRequest, graphConfig.graphMeEndpoint);
}

function readMail () {
getTokenRedirect(tokenRequest, graphConfig.graphMailEndpoint);
}

*/

// #endregion AUTHENTICATION - REDIRECT MODE
