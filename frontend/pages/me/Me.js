import React from 'react';

import {NavLink} from "react-router-dom";

export default class Me extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: null,
            user: null,
            inventoryId: null,
            inventory: null,
            items: null
        };
    }

    componentDidMount() {
        fetch('api/user/me').then((response) => response.json()).then((data) => {
            this.setState({
                userId: data.user.id,
                user: data.user,
                inventoryId: data.inventory.id,
                inventory: data.inventory,
                items: data.items
            });
        });
    }

    render() {
        console.log(this.state.items);
        return (
            <React.Fragment>
                <div className="card-header">
                    <NavLink to={'/signin'}>
                        <input className="btn btn-primary mb-2" type="submit" value="Sign In"/>
                    </NavLink>
                    <NavLink to={'/me'}>
                        <input className="btn btn-primary mb-2" type="submit" value="Me"/>
                    </NavLink>
                </div>
                <span>
                    <h3>Your inventory ID:</h3>
                    <h2>{this.state.inventoryId}</h2>
                    <h3>Your items:</h3>
                    {/*<h2>{this.state.items.description}</h2>*/}
                    {/*<ul> {*/}
                    {/*this.state.items.length === 0 ? "" :*/}
                    {/*this.state.items.map(el => (*/}
                    {/*<li>*/}
                    {/*{el.sign}: {el.category}*/}
                    {/*</li>*/}
                    {/*))}*/}
                    {/*</ul>*/}
                </span>
            </React.Fragment>
        );
    };
};
