import React from 'react'
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '096b30a5741b43b68687f2802ad55e2f';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='

export default class SearchableMovieReviewsContainer extends React.Component {
  state = {
    reviews:[],
    searchTerm: ''
  }

  searchMovies = (event) => {
    event.preventDefault()
    fetch(URL + this.state.searchTerm + `&api-key=${NYT_API_KEY}`).then(res => res.json()).then(json => this.setState({
      reviews: json.results,
      searchTerm: ''
    }) )
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.searchMovies}>
          <input type="text"  onChange={this.handleChange} value={this.state.searchTerm}/>
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
