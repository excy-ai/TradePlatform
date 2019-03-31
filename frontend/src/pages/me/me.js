import React from 'react';

import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Me extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: null,
            user: null,
            inventoryId: null,
            inventory: null,
            items: []
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
                    <NavLink to={'/me'}>
                        <input className="btn btn-primary mb-2" type="submit" value="Me"/>
                    </NavLink>
                    <NavLink exact to={'/additem'}>
                        <input className="btn btn-primary mb-2" type="submit" value="Add Item"/>
                    </NavLink>
                </div>
                <span>
                    <h3>Your inventory ID:</h3>
                    <h2>{this.state.inventoryId}</h2>
                    <h3>Your items:</h3>
                    <ul> {
                        this.state.items.length === 0 ? "" :
                            this.state.items.map(el => (
                                <li className='list-group-item' key={el.id}>
                                    {el.sign}: {el.category}
                                </li>
                            ))}
                    </ul>
                </span>
            </React.Fragment>
        );
    };
}

const mapStateToProps = (state) => ({
    // propName: state.reducerName.propName
});

const mapDispatchToProps = (dispatch) => ({
    // actionName: bindActionCreators(actionName, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Me);
