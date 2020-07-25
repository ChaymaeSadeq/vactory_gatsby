import React, {useContext} from 'react'
import {AuthContext} from '../../auth/authProvider'
import {LoginButton} from "./LoginButton";
import {UserProfile} from "./UserProfile";
import {useTranslation} from "react-i18next";

export const AuthUserProfile = () => {
    const {i18n} = useTranslation();

    const {isAuthenticated, getUserProfile, edit, login, logout} = useContext(AuthContext);
    const user = getUserProfile();
    const isLoggedin = isAuthenticated();
    const editUserUrl = isLoggedin ? edit(i18n.language, user.sub) : '';
    const loginUserUrl = login(i18n.language);

    if (isLoggedin) {
        return (<UserProfile logout={logout} edit={editUserUrl} user={user} />);
    }
    else {
        return <LoginButton login={loginUserUrl} />
    }
};
