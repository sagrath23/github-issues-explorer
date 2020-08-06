import React from 'react';
import { screen } from '@testing-library/react';
import { SearchResult } from '../SearchResult';
import { renderRoutingComponent } from '../../utils';

describe('SearchResult component', () => {
  const resultTitle = 'result 0';

  test('Should render component', () => {
    renderRoutingComponent(SearchResult, { number: 0, title: resultTitle });
    expect(screen.getByText(resultTitle)).toBeDefined();
  });
});
