const context = require.context(`${process.env.cwd}/src`, true, /-test\.jsx$/);
context.keys().forEach(context);
