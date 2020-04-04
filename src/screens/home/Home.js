import React, {Component} from "react";
import MoviesList from '../../components/moviesList/MoviesList';
import * as moviesRequest from "../../services/moviesAPI";


export default class Home extends Component {
    state = { 
        moviesArr: []
     }

     componentDidMount() {
        moviesRequest.getMovies().then((answerApi) => {
            this.setState({
                moviesArr: [...answerApi.data.results]
            })
        })

}


    render() {
        console.log('this.state', this.state)
        return (
            <>
                <h1>Tranding today</h1>
                <MoviesList movies={this.state.moviesArr} />
            </>
        );
    }
}
