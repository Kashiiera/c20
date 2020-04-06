const {html} = require("common-tags");
const {wrapper, renderMarkdown, metabox, alert} = require("./shared");

module.exports = (page, metaIndex) => {
  const metaboxOpts = {
    ...page,
    metaTitle: `\u{1F527} ${page.title} (tool)`,
    metaColour: "navy",
    mdFooter: metaIndex.mdFooter,
    mdSections: [
      page.info
    ]
  };

  return wrapper(page, metaIndex, html`
    ${metabox(metaboxOpts)}
    ${renderMarkdown(page._md, metaIndex.mdFooter)}
  `);
};