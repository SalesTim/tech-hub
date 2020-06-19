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
      class="uk-card uk-card-small uk-card-hover uk-card-default"
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
          <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid>
            <div>
              <div
                class="uk-card uk-card-hover uk-text-center uk-card-small uk-card-default uk-card-body"
              >
                <i>Anonymous:</i>&nbsp;
                <b><span id="anonymousModeStatus">Authorized 🟢</span></b>
                <button
                  id="anonymousButton"
                  class="uk-button uk-align-center"
                  disabled
                >
                  <span>You're all set</span>
                </button>
              </div>
            </div>
            <div>
              <div
                class="uk-card uk-card-hover uk-text-center uk-card-small uk-card-default uk-card-body"
              >
                <i>Delegated:</i>&nbsp;
                <b><span id="delegatedModeStatus">Unauthorized 🔐</span></b>
                <button
                  id="loginButton"
                  class="uk-button uk-align-center uk-button-danger"
                  onclick="signIn()"
                >
                  SIGN-IN
                </button>
                <button
                  id="logoutButton"
                  style="display: none;"
                  class="uk-button uk-align-center uk-button-default"
                  onclick="setAnonymous()"
                >
                  SIGN-OUT
                </button>
              </div>
            </div>
            <div>
              <div
                class="uk-card uk-card-hover uk-text-center uk-card-small uk-card-default uk-card-body"
              >
                <i>Application:</i>&nbsp;
                <b><span id="applicationModeStatus">Unauthorized 🔐</span></b>
                <button
                  id="appSelectorButton"
                  style="display: none;"
                  class="uk-button uk-align-center uk-button-primary"
                  uk-toggle="target: #appSelectorModal"
                >
                  <span id="selectedAppLabel">Select an app</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="loginFooter" class="uk-card-footer">
        <button
          id="advancedButton"
          class="uk-button uk-align-right uk-button-link"
          onclick="toggleAdvanced()"
        >
          Advanced Options
        </button>
      </div>
    </div>

    <!-- This is the modal with the outside close button -->
    <div id="appSelectorModal" uk-modal class="uk-modal-container">
      <div class="uk-modal-dialog uk-modal-body">
        <button class="uk-modal-close-outside" type="button" uk-close></button>
        <h2 class="uk-modal-title">Select an app</h2>
        <div id="appsListEmpty" style="display: none;">
          <p>There is no apps registered.</p>
        </div>
        <div id="appsListFilled">
          <div uk-grid>
            <div class="uk-width-auto@m">
              <ul
                class="uk-tab-left apps-list"
                uk-tab="connect: #component-tab-left; animation: uk-animation-fade"
              ></ul>
            </div>
            <div class="uk-width-expand@m">
              <ul
                id="component-tab-left"
                class="uk-switcher apps-contents"
              ></ul>
            </div>
          </div>
        </div>
        <p class="uk-text-right">
          <button
            id="createAppButton"
            class="uk-button uk-button-danger"
            type="button"
            onclick=""
          >
            New App
          </button>
          <button
            class="uk-button uk-button-default uk-modal-close"
            type="button"
          >
            Cancel
          </button>
          <button
            id="selectAppButton"
            class="uk-button uk-button-primary"
            style="display: none;"
            type="button"
            onclick="selectApp()"
          >
            Select
          </button>
        </p>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  mounted () {
    initExplorerHeader()
  }
}
</script>
