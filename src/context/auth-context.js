import React from 'react';

const authContext = React.createContext({
    authendicated: false,
    login: () => {}
});

export default authContext;