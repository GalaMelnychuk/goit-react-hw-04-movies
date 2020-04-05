import React, {Component} from "react";
import MoviesList from '../../components/moviesList/MoviesList';
import * as moviesApiRequest from "../../services/moviesAPI";


export default class Home extends Component {
    state = { 
        moviesArr: []
     }

     componentDidMount() {
        moviesApiRequest.getMovies().then((answerApi) => {
            this.setState({
                moviesArr: [...answerApi.data.results]
            })
        })
}

    render() {
        return (
            <>
                <h1>Tranding today</h1>
                <MoviesList movies={this.state.moviesArr} />
            </>
        );
    }
}
