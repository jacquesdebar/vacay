/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    const modules = await graphql(`
      {
        allNodeModule {
          nodes {
            id
            field_module_number
          }
        }
      }
    `)
    
    modules.data.allNodeModule.nodes.map(moduleData =>
        createPage({
            path: `/training/${moduleData.field_module_number}`,
            component: path.resolve('src/templates/moduleCMS.js'),
            context: {
                ModuleId: moduleData.id,
            }
        })    
    )
}
