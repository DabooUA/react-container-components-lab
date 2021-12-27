import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'KKqzzmQ0MqIGQGr3eKchYGTHXRsrSytR';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: '',
    reviews: []
  }
  handleSearchInputChange = (event) =>
  this.setState({ searchTerm: event.target.value })

  handleSubmit = (event) => {
    event.preventDefault()

    fetch(URL.concat(this.state.searchTerm))
    .then(res => res.json())
    .then(response => this.setState({ reviews: response.results}))
  }

  render() {
    return (
      <div className='search-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='search-input'>Search Moveiw Reviews</label>
          <input id='search-input' type="text" style={{width:300}} onChange={this/this.handleSearchInputChange} />
          <button type='submit'>Submit</button>
        </form>
        {typeof this.state.reviews === 'object' && this.state.reviews.length > 0 && <h2> Movie Revie By Search: </h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }


}

export default SearchableMovieReviewsContainer
