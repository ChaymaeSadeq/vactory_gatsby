import {IDENTITY_CONFIG} from "./config"
import {UserManager, WebStorageStateStore, Log} from "oidc-client"

export default class AuthService {
    UserManager;
    User;

    constructor() {
        if (typeof window !== 'undefined') {
            this.UserManager = new UserManager({
                ...IDENTITY_CONFIG,
                userStore: new WebStorageStateStore({store: window.localStorage}),
            })
        }

        // Logger
        if (typeof window !== 'undefined') {
            Log.logger = console
            Log.level = Log.NONE
            // Log.level = Log.DEBUG
        }

        if (typeof window !== 'undefined') {
            this.UserManager.events.addUserLoaded((user) => {
                this.User = user
            })
        }

        if (typeof window !== 'undefined') {
            this.UserManager.events.addSilentRenewError((e) => {
                console.log("silent renew error", e.message)
            })
        }

        // if (typeof window !== 'undefined') {
        //     this.UserManager.events.addAccessTokenExpiring(() => {
        //         console.log("token expiring");
        //         this.renewToken();
        //     })
        // }
    }

    handleAuthentication = async () => {
        if (typeof window === 'undefined') {
            return null;
        }

        const user = await this.UserManager.getUser();
        this.User = user;

        this.UserManager.signinSilent()
            .then((user) => {
                this.User = user;
            });

        return user;
    };

    signinRedirect = async () => {
        if (typeof window !== 'undefined') {
            return await this.UserManager.signinRedirect()
        }

        return null;
    };

    getUser = () => {
        return this.User;
    };

    getUserProfile = () => {
        if (!this.User) {
            return null;
        }
        return this.User.profile;
    };

    isAuthenticated = () => {
        if (typeof window === 'undefined') {
            return false;
        }

        return this.User != null && !this.User.expired;
    };

    renewToken = async () => {
        if (typeof window !== 'undefined') {
            console.log("renewToken")
            this.UserManager.signinSilent()
                .then((user) => {
                    console.log("signed in", user);
                })
                .catch(async (err) => {
                    console.error(err)
                    /*window.localStorage.removeItem(`oidc.user:${IDENTITY_CONFIG.authority}:${IDENTITY_CONFIG.client_id}`)
                    await this.UserManager.clearStaleState();
                    window.location.reload();*/
                });
        }
    };

    logout = () => {
        if (typeof window !== 'undefined') {
            return this.UserManager.signoutRedirect()
        }
    };

    login = (lng) => {
        return `${IDENTITY_CONFIG.authority}/${lng}/user/login`
    };

    edit = (lng, id) => {
        return `${IDENTITY_CONFIG.authority}/${lng}/user/${id}/edit`
    };

    getManager = () => {
        return this.UserManager
    }

}
