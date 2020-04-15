import * as React from "react"
import PropTypes from 'prop-types';

const WelcomeText = () => "Hello World"

const WelcomeComponent = (props) => {
    const {text} = props
    return (
        <h1>{text}</h1>
    )
}

WelcomeComponent.propTypes = {
    text: PropTypes.string.isRequired
}

export {WelcomeText, WelcomeComponent}
