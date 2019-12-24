import React, { Component } from 'react';
import axios from 'axios';
import {
    Form,
    Group,
    Control,
    Label,
    Button
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { setRecipes } from '../actions';

class SearchRecipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: '',
            dish: ''
        }
    }

    search() {
        let { ingredients, dish } = this.state;
        const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
        console.log('state', this.state, 'url', url);

        fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            this.props.setRecipes(data.results)
        })
        .catch((e) => {
            console.log(e);
        })
    }

    render() {
        return (
            <Form inline>
                <Form.Group>
                    <Form.Label>Ingredients</Form.Label>
                    {' '}
                    <Form.Control
                        type="text"
                        placeholder="garlic,chiken"
                        onChange={event => this.setState({ 
                            ingredients: event.target.value
                        })}
                    />
                </Form.Group>
                {' '}
                <Form.Group>
                    <Form.Label>Dish</Form.Label>
                    {' '}
                    <Form.Control
                        type="text"
                        placeholder="adobo"
                        onChange={event => this.setState({
                            dish: event.target.value
                        })}
                    />
                </Form.Group>
                {' '}
                <Button
                    onClick={() => this.search()}
                >Submit</Button>
            </Form>
        );
    };
};

export default connect(null,{ setRecipes })(SearchRecipes);
