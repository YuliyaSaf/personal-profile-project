import React from "react";
import {NavLink, useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {doSignOut} from "../store/actions/act_persons"

const Navigation = ({isAuth, signOut}) => {

let history = useHistory()

    const renderAuth = () => {
        if (!isAuth) {
            return (
                <>
                    <li className="nav-item">
                        <NavLink to="/signup">Sign up</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/signin">Sign in</NavLink>
                    </li>
                </>
            )
        } else {
            return (
                <li className="nav-item">
                    <a href="/signout" className="nav-link" onClick={(event) => {
                        event.preventDefault()
                        signOut()
                        history.push("/")
                    }
                    }>Sign out</a>
                </li>
            )
        }
    }

    return (
        <nav className="navbar navbar-expand navbar-dark bg-primary mb-3">
            <div className="container">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink exact={true} to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact={true} to="/persons">All Persons</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/albums">Albums</NavLink>
                    </li>
                    {renderAuth()}
                </ul>
            </div>
        </nav>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.persons.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(doSignOut)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
