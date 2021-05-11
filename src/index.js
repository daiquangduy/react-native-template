import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Root from './routes';

class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <Root />
            </Provider>
        );
    }
}

export default App;