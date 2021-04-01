<template>
  <div>
    <script src="/js/authentication.js"></script>
    <div id="loading" class="uk-text-center">
      <span class="uk-text-lead">Checking your previous sessions</span>
      <br />
      <br />
      <div uk-spinner></div>
    </div>
    <div
      id="loginCard"
      style="display: none;"
      class="uk-card uk-card-small uk-card-default"
    >
      <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
          <div class="uk-width-auto">
            <img
              id="profilePicture"
              class="uk-border-circle"
              width="40"
              height="40"
              src="/img/avatar.png"
            />
          </div>
          <div class="uk-width-expand">
            <h3
              id="userDisplayName"
              class="uk-card-title uk-margin-remove-bottom"
            >
              Anonymous
            </h3>
            <p id="loginDateTime" class="uk-text-meta uk-margin-remove-top">
              <time datetime="">...</time>
            </p>
          </div>
        </div>
      </div>
      <div class="uk-card-body">
        <div id="authorizations">
          <div class="uk-child-width-1-2@m uk-grid-small uk-grid-match" uk-grid>
            <div>
              <div
                class="uk-card uk-card-hover uk-text-center uk-card-small uk-card-default uk-card-body"
              >
                <i>Anonymous access:</i>
                <b><span id="anonymousModeStatus">🟢</span></b>
                <button
                  id="anonymousButton"
                  class="uk-button uk-align-center uk-button-default"
                  style="margin-top: 10px; margin-bottom: 10px;"
                  disabled
                >
                  <span uk-icon="icon: check; ratio: 0.9"></span>&nbsp;<span
                    class="uk-text-middle"
                    >You're all set</span
                  >
                </button>
              </div>
            </div>
            <div>
              <div
                class="uk-card uk-card-hover uk-text-center uk-card-small uk-card-default uk-card-body"
              >
                <i>Delegated Access:</i>
                <b><span id="delegatedModeStatus">🔐</span></b>
                <button
                  id="loginButton"
                  class="uk-button uk-align-center uk-button-primary"
                  onclick="signIn()"
                  style="text-decoration: none; margin-top: 10px; margin-bottom: 10px;"
                >
                  <span uk-icon="icon: sign-in; ratio: 0.8"></span>&nbsp;<span
                    class="uk-text-middle"
                    >SIGN-IN</span
                  >
                </button>
                <button
                  id="logoutButton"
                  style="display: none; text-decoration: none; margin-top: 10px; margin-bottom: 10px;"
                  class="uk-button uk-align-center uk-button-default"
                  onclick="signOut()"
                >
                  <span uk-icon="icon: sign-out; ratio: 0.8"></span>&nbsp;<span
                    class="uk-text-middle"
                    >SIGN-OUT</span
                  >
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br />
  </div>
</template>
