<template>
  <div>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://unpkg.com/swagger-ui-dist@3/swagger-ui.css"
    />
    <script
      type="text/javascript"
      src="https://unpkg.com/swagger-ui-dist@3/swagger-ui-bundle.js"
    ></script>
    <script src="https://unpkg.com/swagger-ui-dist@3/swagger-ui-standalone-preset.js"></script>
    <div id="swagger-ui"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.debug("SwaggerViewer Mounted");
    var pOpenApiFileUrl = this.openApiFileUrl;

    // Replace openapi definition with local in dev mode
    if (
      window.location.host.indexOf("localhost", 0) > -1 ||
      window.location.host.indexOf("devgme", 0) > -1
    ) {
      pOpenApiFileUrl =
        "/api/definitions/v1.0/open-api/apiDefinition.swagger.yaml";
    }

    var s = document.createElement("script");
    s.setAttribute(
      "src",
      "https://unpkg.com/swagger-ui-dist@3/swagger-ui-bundle.js"
    );
    s.onload = function () {
      var t = document.createElement("script");
      t.setAttribute(
        "src",
        "https://unpkg.com/swagger-ui-dist@3/swagger-ui-standalone-preset.js"
      );
      t.onload = function () {
        loadUi(pOpenApiFileUrl);
      };
      document.head.appendChild(t);
    };
    document.head.appendChild(s);

    window.onload = function () {
      if (!window.ui) {
        loadUi(pOpenApiFileUrl);
      }
    };
    function loadUi(url) {
      // Build a system
      const ui = SwaggerUIBundle({
        url: url,
        dom_id: "#swagger-ui",
        deepLinking: true,
        displayOperationId: true,
        displayRequestDuration: false,
        defaultModelsExpandDepth: 0,
        defaultModelExpandDepth: 0,
        showExtensions: false,
        filter: false,
        operationsSorter: "alpha",
        tagsSorter: "alpha",
        tryItOutEnabled: true,
        syntaxHighlight: {
          activate: true,
          theme: "agate",
        },
        presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
        plugins: [
          SwaggerUIBundle.plugins.DownloadUrl,
          {
            statePlugins: {
              spec: {
                wrapActions: {
                  updateJsonSpec: function (oriAction, system) {
                    return (spec) => {
                      // Replace API URL with local in dev mode
                      const urlParams = new URLSearchParams(
                        window.location.search
                      );
                      const devmode = urlParams.get("dev");
                      if (
                        window.location.host.indexOf("localhost", 0) > -1 ||
                        window.location.host.indexOf("devgme", 0) > -1 ||
                        devmode === "true"
                      ) {
                        // change spec.servers here to add new entry, use concat to put it as the first & default one
                        spec.servers = [
                          {
                            url: "https://devgmeweb.eu.ngrok.io/v1.0",
                            description: "Development Environment",
                          },
                          {
                            url: "https://apippr.salestim.io/v1.0",
                            description: "Pre-Production Environment",
                          },
                        ].concat(spec.servers || []);
                        // Show server list
                        var checkExist = setInterval(function () {
                          if (
                            document.querySelector(".information-container") !==
                            null
                          ) {
                            clearInterval(checkExist);
                            // Show containers
                            document.querySelector(
                              ".information-container"
                            ).style.display = "block";
                            document.querySelector(
                              ".scheme-container"
                            ).style.display = "block";
                          }
                        }, 100); // check every 100ms
                      }
                      return oriAction(spec);
                    };
                  },
                },
              },
            },
          },
        ],
        // To make the open api file url visible, add:
        // layout: 'StandaloneLayout'
      });
      window.ui = ui;
      window.initExplorerHeader();
    }
  },
  props: ["openApiFileUrl"],
};
</script>

<style scoped></style>
