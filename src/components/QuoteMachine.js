import React, {Component} from 'react';
import axios from 'axios';
const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const API = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

export class QuoteMachine extends Component {

    constructor(props) {
        super(props);

        this.state = {
            quote: {text: "", author: ""},
            error: null,
        };

        this.getRandomQuote = this.getRandomQuote.bind(this);
    }

    componentDidMount() {
        this.getRandomQuote();
    }


    getRandomQuote() {
        axios.get(PROXY_URL + API,  { headers: {'Cache-Control': 'no-cache' }})
            .then(result => {
                let text = result.data[0].content.replace(/<\/?[^>]+(>|$)/g, "");
                let author = result.data[0].title;

                this.setState({quote: {text, author}})

            })
            .catch(error => this.setState({error}))
    }



    render() {
        return (
            <div id="quote-box">
                <h1>Random quote machine</h1>
                <blockquote id="text">
                     {this.state.quote.text}
                    <span id="author">{this.state.quote.author}</span>
                </blockquote>
                <button id="new-quote" className="btn btn-primary"  type="button" onClick={this.getRandomQuote}>New quote</button>
                <a id="tweet-quote" className="twitter-share-button" href={`https://twitter.com/intent/tweet/?text=${this.state.quote.text} - ${this.state.quote.author}`}>Tweet</a>

            </div>
        )
    }
}
