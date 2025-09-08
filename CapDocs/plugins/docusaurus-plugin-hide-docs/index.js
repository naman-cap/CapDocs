const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

module.exports = function (context, options) {
  return {
    name: 'docusaurus-plugin-hide-docs',
    async loadContent() {
      // ...
    },
    async contentLoaded({ content, actions }) {
      // Docusaurus v3 no longer exposes other plugins' content here for mutation.
      // Safely no-op if expected structure is not present to avoid crashing dev server.
      try {
        const docsPluginId = 'default';
        if (!content || !content.docs || !content.docs[docsPluginId]) {
          return;
        }

        const { setDocVersions } = actions || {};
        if (typeof setDocVersions !== 'function') {
          return;
        }

        const version = content.docs[docsPluginId].loadedVersions?.[0];
        if (!version || !Array.isArray(version.docs)) {
          return;
        }

        const newDocs = version.docs.filter((doc) => {
          try {
            const { data } = matter(fs.readFileSync(doc.source, 'utf8'));
            return data.hidden !== true;
          } catch (e) {
            return true;
          }
        });

        const newVersion = {
          ...version,
          docs: newDocs,
        };

        setDocVersions({
          [docsPluginId]: {
            ...content.docs[docsPluginId],
            loadedVersions: [newVersion],
          },
        });
      } catch (_) {
        // swallow errors to avoid breaking dev server
        return;
      }
    },
  };
};