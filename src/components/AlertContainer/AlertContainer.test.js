import React from 'react';
import { render } from '@testing-library/react';
import {
  SUBMITTEDALERTTITLE,
  SUBMITTEDALERTDESCRIPTION,
  ALERTIDMESSAGE,
  WARNINGMESSAGE,
} from 'config/languages/en';
import { AlertContainer } from './AlertContainer';

let GetByText;
beforeEach(() => {
  GetByText = render(
    <AlertContainer
      STATUS="success"
      id="Test ID"
      ALERTTITLE={SUBMITTEDALERTTITLE}
      ALERTDESCRIPTION={SUBMITTEDALERTDESCRIPTION}
      ALERTIDMESSAGE={ALERTIDMESSAGE}
      NOTICEMESSAGE={WARNINGMESSAGE}
    />
  ).getByText;
});

afterEach(() => {
  GetByText = null;
});

test('Component should render SUBMITTEDALERTTITLE.', () => {
  GetByText(SUBMITTEDALERTTITLE);
});

test('Component should render SUBMITTEDALERTDESCRIPTION.', () => {
  GetByText(SUBMITTEDALERTDESCRIPTION);
});

test('Component should render ALERTIDMESSAGE.', () => {
  GetByText(`${ALERTIDMESSAGE}Test ID`);
});

test('Component should render WARNINGMESSAGE.', () => {
  GetByText(WARNINGMESSAGE);
});
