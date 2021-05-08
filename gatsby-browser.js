import React from 'react';
import DataProvider from './src/fixtures/data';
const wrapRootElement = ({ element }) => <DataProvider>{element}</DataProvider>;

export { wrapRootElement };
