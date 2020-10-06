import React, {useState, useEffect} from "react"

const AuthContext = React.createContext({
    getUser: () => ({}),
    getUserProfile: () => ({}),
    isAuthenticated: () => ({}),
    edit: () => ({}),
    login: () => ({}),
    logout: () => ({}),
});

AuthContext.displayName = 'Auth';

export {AuthContext}

export const AuthConsumer = AuthContext.Consumer;

export const AuthProvider = (props) => {
    const {authService} = props;
    const [contextUser, setContextUser] = useState(null);
    const manager = authService.getManager();

    const onUserLoaded = (user) => {
        setContextUser(user);
    };

    // Update context value and trigger re-render
    // This patterns avoids unnecessary deep renders
    // https://reactjs.org/docs/context.html#caveats
    useEffect(() => {
        authService.handleAuthentication().then((user) => {
            setContextUser(user);
        });

        // @todo: handle more events.
        manager.events.addUserLoaded(onUserLoaded);

        return function cleanup() {
            manager.events.removeUserLoaded(onUserLoaded)
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return <AuthContext.Provider value={{
        user: contextUser,
        getUser: authService.getUser,
        getUserProfile: authService.getUserProfile,
        isAuthenticated: authService.isAuthenticated,
        edit: authService.edit,
        login: authService.login,
        logout: authService.logout,
    }}>{props.children}</AuthContext.Provider>
};
