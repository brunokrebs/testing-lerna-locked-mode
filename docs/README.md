# Auth0 React Components

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and exists
to show Auth0 React Components in action. Alongside with the components, we also show how to use them.

We hope you guys enjoy!

## Running Locally

To test changes locally, we have to `npm link` whatever component we are interested, and then `npm link componentName`
in this directory. For example, if we want to change the `Button` component, we have to go to
`PROJECT_ROOT$/packages/Button` and issue `npm link`. Then, we have to come back to this directory and issue
`npm link Button`.

__Note that__, whenever we update a component, we need to `lerna run prepublishOnly` to be able to see changes in this
demo.
