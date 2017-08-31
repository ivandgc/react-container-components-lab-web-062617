import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '096b30a5741b43b68687f2802ad55e2f';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


export default class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  }

  componentWillMount(){
    fetch(URL).then(res => res.json()).then(json => this.setState({ reviews: json.results }) )
  }

  render(){
    return(
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
