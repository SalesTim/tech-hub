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
        "https://devgmeweb.eu.ngrok.io/definitions/io.salestim.openapi.definition.yaml";
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
        plugins: [SwaggerUIBundle.plugins.DownloadUrl]
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
