const malta = require('malta');
const fs = require('fs');

fs.readdir('./part-i-the-big-picture', (err, filenames) => {
    if (err) {
      return console.log(err);
    }

  filenames.map((fileName) => {
    console.log(`./part-i-the-big-picture/${fileName}`);
    return {
      path: `./part-i-the-big-picture/${fileName}`,
      updatedContent: fs.readFileSync(`./part-i-the-big-picture/${fileName}`, {encoding:'utf8', flag:'r'}),
    }
  }).forEach(fileData => {
    fs.writeFileSync(fileData.path, fileData.updatedContent, 'utf8');
  });
  const epubScript = malta.get().check(["the_better_way.json", ".gitbook", "-plugins=malta-epub"]).start();

  epubScript.then(() => {
    epubScript.stop();
  });
});


