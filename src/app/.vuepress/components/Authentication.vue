<template>
  <div>
    <script src="/js/authentication.js"></script>
    <div id="loading" class="uk-text-center">
      <span class="uk-text-lead">Checking your previous sessions</span>
      <br />
      <br />
      <div uk-spinner></div>
    </div>
    <div id="authorizations" style="display: none">
      <div class="uk-child-width-1-2@m uk-grid-small uk-grid-match" uk-grid>
        <div>
          <div
            class="uk-card uk-card-hover uk-card-small uk-card-default uk-card-body"
          >
            <label class="uk-text-lead">Delegated Access</label>
            <br />
            <label class="uk-text-meta uk-text-small"
              >on behalf of a user (authorization code flow)</label
            >
            <hr />
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
                <label
                  id="userDisplayName"
                  class="uk-text-lead uk-align-left uk-margin-remove-bottom"
                >
                  Anonymous
                </label>
                <label
                  id="userLoginDateTime"
                  class="uk-align-left uk-text-meta uk-text-small uk-margin-remove-top uk-margin-remove-bottom"
                >
                  <time datetime=""></time>
                </label>
                <label
                  id="userRoles"
                  class="uk-align-left uk-text-meta uk-text-small uk-margin-remove-top"
                >
                </label>
              </div>
            </div>
            <hr />
            <div>
              <button
                id="delegatedLoginButton"
                class="uk-button uk-align-right uk-button-secondary uk-button-small"
                onclick="delegatedSignIn()"
                style="
                  text-decoration: none;
                  margin-top: 10px;
                  margin-bottom: 10px;
                "
              >
                <span uk-icon="icon: sign-in; ratio: 0.8"></span>&nbsp;<span
                  class="uk-text-middle"
                  >SIGN-IN</span
                >
              </button>
              <button
                id="delegatedLogoutButton"
                style="
                  display: none;
                  text-decoration: none;
                  margin-top: 10px;
                  margin-bottom: 10px;
                "
                class="uk-button uk-align-right uk-button-danger uk-button-small"
                onclick="delegatedSignOut()"
              >
                <span uk-icon="icon: sign-out; ratio: 0.8"></span>&nbsp;<span
                  class="uk-text-middle"
                  >SIGN-OUT</span
                >
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            class="uk-card uk-card-hover uk-card-small uk-card-default uk-card-body"
          >
            <label class="uk-text-lead">Application Access</label>
            <br />
            <label class="uk-text-meta uk-text-small"
              >as an application (client credentials flow)</label
            >
            <hr />
            <div class="uk-grid-small uk-flex-middle" uk-grid>
              <div class="uk-width-auto">
                <img
                  id="appPicture"
                  class="uk-border-circle"
                  width="40"
                  height="40"
                  src="/img/avatar.png"
                />
              </div>
              <div class="uk-width-expand">
                <label
                  id="appDisplayName"
                  class="uk-text-lead uk-align-left uk-margin-remove-bottom"
                >
                  Anonymous
                </label>
                <label
                  id="appLoginDateTime"
                  class="uk-align-left uk-text-meta uk-text-small uk-margin-remove-top uk-margin-remove-bottom"
                >
                  <time datetime=""></time>
                </label>
                <label
                  id="appRoles"
                  class="uk-align-left uk-text-meta uk-text-small uk-margin-remove-top"
                >
                </label>
              </div>
            </div>
            <hr />
            <div>
              <form class="uk-grid-small uk-form-horizontal" uk-grid>
                <div class="uk-width-1-1@s">
                  <div class="uk-form-label uk-text-meta uk-text-small">Tenant ID</div>
                  <input
                    id="appTenantId"
                    class="uk-input uk-form-small"
                    type="text"
                    placeholder=""
                  />
                </div>
                <div class="uk-width-1-2@s">
                  <div class="uk-form-label uk-text-meta uk-text-small">Client ID</div>
                  <input
                    id="appClientId"
                    class="uk-input uk-form-small"
                    type="text"
                    placeholder=""
                  />
                </div>
                <div class="uk-width-1-2@s">
                  <div class="uk-form-label uk-text-meta uk-text-small">Client Secret</div>
                  <input
                    id="appClientSecret"
                    class="uk-input uk-form-small"
                    type="password"
                    placeholder=""
                  />
                </div>
              </form>
              <br />
              <button
                id="appLoginButton"
                class="uk-button uk-align-right uk-button-secondary uk-button-small"
                onclick="appSignIn()"
                style="
                  text-decoration: none;
                  margin-top: 10px;
                  margin-bottom: 10px;
                "
              >
                <span uk-icon="icon: sign-in; ratio: 0.8"></span>&nbsp;<span
                  class="uk-text-middle"
                  >SIGN-IN</span
                >
              </button>
              <button
                id="appLogoutButton"
                style="
                  display: none;
                  text-decoration: none;
                  margin-top: 10px;
                  margin-bottom: 10px;
                "
                class="uk-button uk-align-right uk-button-danger uk-button-small"
                onclick="appSignOut()"
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
    <br />
  </div>
</template>
