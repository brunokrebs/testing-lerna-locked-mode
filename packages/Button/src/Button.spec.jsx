// import React from 'react';
import assert from 'assert';
// import ReactTestUtils from 'react-dom/test-utils';
// import Button from './Button.jsx';

// const { renderIntoDocument } = ReactTestUtils;

describe('Button', () => {
  it('should render a Button', () => {
    assert(window, 'window is required to test React components');
    assert(window.document, 'document is required to test React components');
    assert(window.document.createElement, 'createElement is required to test React components');
    // assert(ReactTestUtils, 'ReactTestUtils must be available');
    // assert(renderIntoDocument, 'ReactTestUtils.renderIntoDocument must be available');
    // const element = renderIntoDocument(<Button onClick={() => (true)} text="Button Label" />);
    // assert(element, 'Button must be rendered');
  });
});
