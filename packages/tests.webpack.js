const componentsContext = require.context(`${process.env.cwd}/src`, true, /\.jsx$/);

componentsContext.keys().forEach(componentsContext);

module.exports = componentsContext;
