import React from 'react';
import assert from 'assert';
import ReactTestUtils from 'react-dom/test-utils';
import Button from './Button.jsx';

const { renderIntoDocument, Simulate } = ReactTestUtils;

describe('Button', () => {
  it('should render a Button', () => {
    assert(window, 'window is required to test React components');
    assert(window.document, 'document is required to test React components');
    assert(window.document.createElement, 'createElement is required to test React components');
    assert(ReactTestUtils, 'ReactTestUtils must be available');
    assert(renderIntoDocument, 'ReactTestUtils.renderIntoDocument must be available');

    let called = false;
    function clickHandler() {
      called = true;
    }

    const buttonClass = 'some-button-class';
    const div = (
      <div>
        <Button onClick={clickHandler} text="Button Label" className={buttonClass} />
      </div>
    );

    const element = renderIntoDocument(div);
    assert(element, 'Button must be rendered');
    const found = element.getElementsByClassName(buttonClass)[0];
    assert(found.tagName === 'BUTTON', 'must find');

    Simulate.click(found);
    assert(called, 'Must call click listener');
  });
});
