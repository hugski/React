import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
require('./main.scss');
import injectTapEventPlugin from 'react-tap-event-plugin';

const rootEl = document.getElementById('root');
injectTapEventPlugin();
ReactDOM.render(
    <AppContainer>
    <App />
  </AppContainer>,
    rootEl
);

if (module.hot) {
    module.hot.accept('./component/App', () => {
        // If you use Webpack 2 in ES modules mode, you can
        // use <App /> here rather than require() a <NextApp />.
        const NextApp = require('./component/App').default;
        ReactDOM.render(
            <AppContainer>
         <NextApp />
      </AppContainer>,
            rootEl
        );
    });
}