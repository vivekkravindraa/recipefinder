import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';

class FavoriteRecipeList extends Component {
    render() {
        return (
            <div>
                <h4>Favorite Recipes</h4>
                {
                    this.props.favoriteRecipes.map((recipe,index) => {
                        return (
                            <RecipeItem
                                key={index}
                                recipe={recipe}
                                favoriteButton={true}
                            />
                        )
                    })
                }
            </div>
        );
    };
};

function mapStateToProps(state) {
    return {
        favoriteRecipes: state.favoriteRecipes
    };
};

export default connect(mapStateToProps, null)(FavoriteRecipeList);
