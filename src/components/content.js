import React from "react";
import App from "../App";
// Extends Content so its useable in App.js
export class Content extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <h2>It is: {new Date().toLocaleTimeString()}.</h2>
            </div>
        );

    }


}