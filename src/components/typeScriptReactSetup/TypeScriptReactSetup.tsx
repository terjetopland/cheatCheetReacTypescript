import React from "react";


const NpmStartWarnFix = () => {
    const warningMessageFirst : string= 
        'One of your dependencies, babel-preset-react-app, is importing the' +
        '"@babel/plugin-proposal-private-property-in-object" package without' +
        'declaring it in its dependencies. This is currently working because' +
        '"@babel/plugin-proposal-private-property-in-object" is already in your' +
        'node_modules folder for unrelated reasons, but it may break at any time.';

    const warningMessageLast : string =
        'babel-preset-react-app is part of the create-react-app project, which' +
        'is not maintianed anymore. It is thus unlikely that this bug will' +
        'ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to' +
        'your devDependencies to work around this error. This will make this message' +
        'go away.';

    
    const fixWarn : string = 'npm install --save-dev @babel/plugin-proposal-private-property-in-object';

    return (
        <div>
            <div>You will probably get a warning like this:</div>
            <div className="greyBoxRounded">
                <div>{warningMessageFirst}</div>
                <div>{warningMessageLast}</div>
            </div>
            <div>{fixWarn}</div>
        </div>
    )
}

export const Setup = () => {
    return (
        <div>
            <div style={{fontSize: 20, }}>
                To set up an environment for <em>React</em> and <em>Typescript</em>, 
                I followed <a href="https://create-react-app.dev/docs/adding-typescript/">this setup</a>.
            </div>
            <div>
                In this way you get a setup ready to work on. It also includes a test library that I will not cover in debts now.
            </div>
            <NpmStartWarnFix/>
            <div></div>
        </div>
    )
}