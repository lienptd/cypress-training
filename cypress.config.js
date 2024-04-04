const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    blockHosts: [
      "pagead2.googlesyndication.com",
      "www.google-analytics.com",
      "securepubads.g.doubleclick.net",
      "stats.g.doubleclick.net",
      "oajs.openx.net",
      "id5-sync.com",
      "mug.criteo.com",
      "id.geistm.com",
      "serving.stat-rock.com",
    ],
    baseUrl: "https://demoqa.com/",
  },

  env: {}
});
