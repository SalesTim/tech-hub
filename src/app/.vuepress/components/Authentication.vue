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
          <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid>
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
            <div>
              <div
                class="uk-card uk-card-hover uk-text-center uk-card-small uk-card-default uk-card-body"
              >
                <i>Application Access:</i>
                <b><span id="applicationModeStatus">🔐</span></b>
                <button
                  id="applicationModeDisabled"
                  class="uk-button uk-align-center uk-button-default"
                  style="display: none; margin-top: 10px; margin-bottom: 10px;"
                  disabled
                >
                  <span uk-icon="icon: ban; ratio: 0.9"></span>&nbsp;<span
                    class="uk-text-middle"
                    >Sign-In required</span
                  >
                </button>
                <button
                  id="appSelectorButton"
                  style="display: none; text-decoration: none; margin-top: 10px; margin-bottom: 10px;"
                  class="uk-button uk-align-center uk-button-primary"
                  uk-toggle="target: #appSelectorModal"
                >
                  <span id="selectedAppLabel" class="uk-text-middle"
                    >Select an app...</span
                  >
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="loginFooter" class="uk-card-footer">
        <button
          id="advancedButton"
          class="uk-button uk-button-small uk-align-right uk-button-link"
          onclick="toggleAdvanced()"
          style="text-decoration: none;"
        >
          <span uk-icon="icon: settings; ratio: 0.8"></span>&nbsp;<span
            class="uk-text-middle"
            >Advanced Options</span
          >
        </button>
      </div>
    </div>

    <!-- This is the modal with the apps list -->
    <div id="appSelectorModal" uk-modal class="uk-modal-container">
      <div class="uk-modal-dialog">
        <button class="uk-modal-close-outside" type="button" uk-close></button>
        <div class="uk-modal-header">
          <div class="uk-modal-title">
            <span>Virtual Apps</span>
            <button
              id="NewAppButton"
              class="uk-button uk-align-right uk-button-secondary"
              type="button"
              style="margin-bottom: 0px;"
              uk-toggle="target: #createAppPanel; animation: uk-animation-fade"
            >
              <span uk-icon="icon: plus; ratio: 0.7"></span>&nbsp;<span
                class="uk-text-middle"
                >New</span
              >
            </button>
          </div>
        </div>
        <div class="uk-modal-body">
          <div id="createAppPanel">
            <div class="uk-section uk-section-small uk-section-secondary">
              <div class="uk-container">
                <form>
                  <fieldset class="uk-fieldset">
                    <legend class="uk-legend">Create a new virtual app</legend>

                    <div class="uk-margin">
                      <input
                        id="newAppName"
                        class="uk-input"
                        type="text"
                        placeholder="Name"
                      />
                    </div>

                    <div class="uk-margin">
                      <textarea
                        id="newAppDescription"
                        class="uk-textarea"
                        type="text"
                        placeholder="Description"
                        rows="3"
                      ></textarea>
                    </div>

                    <div class="uk-margin">
                      <input
                        class="uk-input"
                        type="text"
                        placeholder="App ID"
                        disabled
                        style="display: none;"
                      />
                    </div>

                    <div class="uk-margin">
                      <input
                        class="uk-input"
                        type="text"
                        placeholder="App Secret"
                        disabled
                        style="display: none;"
                      />
                    </div>
                  </fieldset>
                </form>
                <button
                  id="createAppButton"
                  class="uk-button uk-align-right uk-button-small uk-button-danger"
                  type="button"
                  onclick="createApp()"
                >
                  <span uk-icon="icon: plus-circle; ratio: 0.7"></span
                  >&nbsp;<span class="uk-text-middle">Create</span>
                </button>
              </div>
            </div>
            <hr class="uk-divider-icon" />
          </div>
          <div id="appsList">
            <div id="appsListEmpty" style="display: none;">
              <p>There is no apps registered.</p>
            </div>
            <div id="appsListFilled">
              <div uk-grid>
                <div class="uk-width-auto@m">
                  <ul
                    id="appsTabs"
                    class="uk-tab-left apps-list"
                    uk-tab="connect: #component-tab-left; animation: uk-animation-fade;"
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
          </div>
        </div>
        <div class="uk-modal-footer uk-text-right">
          <button
            class="uk-button uk-button-default uk-modal-close"
            type="button"
          >
            <span uk-icon="icon: ban; ratio: 0.7"></span>&nbsp;<span
              class="uk-text-middle"
              >Cancel</span
            >
          </button>
          <button
            id="selectAppButton"
            class="uk-button uk-button-primary"
            style="display: none;"
            type="button"
            onclick="selectApp()"
          >
            <span uk-icon="icon: check; ratio: 0.7"></span>&nbsp;<span
              class="uk-text-middle"
              >Select</span
            >
          </button>
        </div>
      </div>
    </div>

    <br />
  </div>
</template>
