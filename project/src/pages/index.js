import React from "react"
import {WelcomeComponent, WelcomeText} from "vactory-gatsby-core"

export default () => {
    return (
        <div>
            <WelcomeComponent text={WelcomeText()}/>
            <div>Homepage in a user's site</div>
        </div>
    )
}
