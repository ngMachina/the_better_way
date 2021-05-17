const malta = require('malta');

// todo: have the configuration json actually get generated dynamically

const epubScript = malta.get().check(["the_better_way.json", ".gitbook", "-plugins=malta-epub"]).start();

epubScript.then(() => {
    epubScript.stop();
  });
