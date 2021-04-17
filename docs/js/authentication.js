// ################################################################################################
// # AZURE AD AUTHENTICATION MODULE
// ################################################################################################

// #region DECLARATIONS
// UI controls
var loading = document.getElementById('loading')
var authorizations = document.getElementById('authorizations')
// User mode
var profilePicture = document.getElementById('profilePicture')
var userDisplayName = document.getElementById('userDisplayName')
var userLoginDateTime = document.getElementById('userLoginDateTime')
var delegatedLoginButton = document.getElementById('delegatedLoginButton')
var delegatedLogoutButton = document.getElementById('delegatedLogoutButton')
// App mode
var Picture = document.getElementById('appPicture')
var appDisplayName = document.getElementById('appDisplayName')
var appLoginDateTime = document.getElementById('appLoginDateTime')
var appTenantId = document.getElementById('appTenantId')
var appClientId = document.getElementById('appClientId')
var appClientSecret = document.getElementById('appClientSecret')
var appLoginButton = document.getElementById('appLoginButton')
var appLogoutButton = document.getElementById('appLogoutButton')
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

// #region AUTHENTICATION - POPUP MODE

function initExplorerHeader() {
  // Init vars
  if (!msalConfig) {
    msalConfig = {
      auth: {
        clientId: '107219e4-ae69-4096-800e-c9cc2be660c7',
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
  // Check pre-existing user session
  if (myMSALObj.getAccount()) {
    getDelegatedAccessToken()
  } else {
    setUserAnonymous()
  }
}

function delegatedSignIn() {
  myMSALObj
    .loginPopup(loginRequest)
    .then(loginResponse => {
      if (myMSALObj.getAccount()) {
        getDelegatedAccessToken()
      }
    })
    .catch(error => {
      console.log(error)
    })
}

function appSignIn() {
  if (appTenantId.value === '' || appClientId.value === '' || appClientSecret.value === '') {
    UIkit.notification({
      message: 'Please fill "Tenant ID", "Client ID" and "Client Secret"',
      status: 'warning',
      timeout: 2000
    })
  } else {
    // Replace api root url with local in dev mode
    var apiRootUrl = 'https://api.salestim.io/v1.0'
    if (
      window.location.host.indexOf("localhost", 0) > -1 ||
      window.location.host.indexOf("devgme", 0) > -1
    ) {
      apiRootUrl = 'https://devgmeweb.eu.ngrok.io/v1.0'
    }
    fetch(`${apiRootUrl}/authentication/clientcredentials/token`,
      {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'api_explorer'
        },
        body: JSON.stringify(
          {
            tid: appTenantId.value,
            clientid: appClientId.value,
            clientsecret: appClientSecret.value
          }
        )
      })
      .then((response) => {
        if (response) {
          if (response.status === 200) {
            response.json().then((data) => {
              window.explorerLoggedApp = data
              setAppBearerAuth(data.access_token)
              setAppAuthenticated(data)
              UIkit.notification({
                message: 'Successfully signed-in...',
                status: 'success',
                timeout: 2000
              })
            })
          } else {
            console.dir(response)
            let message = `Error ${response.status} fetching app token: ${response.statusText}`
            showError(message)
          }
        } else {
          console.error('No response fetching app token')
        }
      })
      .catch((error) => {
        console.dir(error)
        let message = 'Error fetching app token'
        if (error.message && error.message !== '') {
          message += ': ' + error.message
        }
        showError(message)
      })
  }
}

function showError(message) {
  console.error(message)
  UIkit.notification({
    message: message,
    status: 'danger',
    timeout: 2000
  })
}

function getDelegatedAccessToken() {
  getDelegatedPopUp(loginRequest)
    .then(response => {
      callMSGraph(
        graphConfig.graphMeEndpoint,
        response.accessToken,
        function (data, endpoint) {
          window.explorerLoggedUser = response
          setUserBearerAuth(response.accessToken)
          setUserAuthenticated(response, data)
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
      setUserAnonymous()
    })
}

function getDelegatedPopUp(request) {
  return myMSALObj.acquireTokenSilent(request).catch(error => {
    console.log(error)
    console.log('silent token acquisition fails. acquiring token using popup')
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

function delegatedSignOut() {
  window.explorerLoggedUser = null
  // Actually don't do a real ad logout to prevent a global browser-wide logout
  // myMSALObj.logout()
  // Reset swagger ui bearer token
  setUserBearerAuth('')
  setUserAnonymous()
  UIkit.notification({
    message: 'Successfully signed-out...',
    status: 'success',
    timeout: 2000
  })
}

function appSignOut() {
  window.explorerLoggedApp = null
  // Reset swagger ui bearer token
  setAppBearerAuth('')
  setAppAnonymous()
  UIkit.notification({
    message: 'Successfully signed-out...',
    status: 'success',
    timeout: 2000
  })
}

// Send user access token to swagger ui
function setUserBearerAuth(token) {
  // "Bearer " is automatically added by swagger ui
  ui.preauthorizeApiKey('bearerAuth', token)
}

// Send app access token to swagger ui
function setAppBearerAuth(token) {
  // "Bearer " is automatically added by swagger ui
  ui.preauthorizeApiKey('bearerAuth', token)
}

// #endregion AUTHENTICATION - POPUP MODE

// #region UI

function enableLoading() {
  loading.style.display = ""
  authorizations.style.display = "none"
}

function disableLoading() {
  loading.style.display = "none"
  authorizations.style.display = ""
}

function setUserAnonymous() {
  disableLoading()
  window.explorerLoggedUser = null
  userLoginDateTime.innerText = ''
  userDisplayName.innerText = 'Anonymous'
  profilePicture.setAttribute('src', '/img/avatar.png')
  delegatedLogoutButton.style.display = 'none'
  delegatedLoginButton.style.display = 'block'
}

function setAppAnonymous() {
  disableLoading()
  window.explorerLoggedApp = null
  appLoginDateTime.innerText = ''
  appDisplayName.innerText = 'Anonymous'
  appLogoutButton.style.display = 'none'
  appLoginButton.style.display = 'block'
}

function setUserAuthenticated(userInfos, profile) {
  disableLoading()
  userLoginDateTime.innerText = profile.mail + ' (sign-in: ' + moment().format('MMMM Do YYYY, h:mm:ss a') + ')'
  userDisplayName.innerText = profile.displayName
  setUserProfilePicture(userInfos.accessToken)
  delegatedLoginButton.style.display = 'none'
  delegatedLogoutButton.style.display = 'block'
}

function setAppAuthenticated(token) {
  disableLoading()
  appLoginDateTime.innerText = 'App ID: ' + token.app.id + ' (sign-in: ' + moment().format('MMMM Do YYYY, h:mm:ss a') + ')'
  appDisplayName.innerText = token.app.display_name
  appLoginButton.style.display = 'none'
  appLogoutButton.style.display = 'block'
}

function setUserProfilePicture(token) {
  callMSGraphBinary(graphConfig.graphPhotoEndpoint, token, function (response, endpoint) {
    const url = window.URL || window.webkitURL
    const blobUrl = url.createObjectURL(response)
    profilePicture.setAttribute("src", blobUrl)
  })
}

// #endregion UI
