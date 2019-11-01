import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">JSON Viewer</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/*Navbar selectable items for when the pages are separate*/}
                {/*<div className="collapse navbar-collapse" id="navbarSupportedContent">*/}
                {/*    <ul className="navbar-nav mr-auto">*/}
                {/*        <li className="nav-item active">*/}
                {/*            <a className="nav-link" href="#">Viewer <span className="sr-only">(current)</span></a>*/}
                {/*        </li>*/}
                {/*        <li className="nav-item">*/}
                {/*            <a className="nav-link" href="#">Enter JSON</a>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
            </nav>
        );
    }
}

export default Navbar;
