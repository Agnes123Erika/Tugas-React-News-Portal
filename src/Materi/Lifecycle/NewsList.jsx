import React, { Component } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';
import SearchBar from './SearchBar';
import LoadingBar from './LoadingBar';
import 'bootstrap/dist/css/bootstrap.min.css';

class NewsList extends Component {
    state = {
        articles: [],
        searchTerm: '',
        isLoading: false,
    };

    componentDidMount() {
        this.fetchNews('latest');
    }

    fetchNews = (searchTerm) => {
        this.setState({ isLoading: true });
        const apiKey = "b9f2db9b3f2f4578b91bae609e09d7ca";
        const url = `https://newsapi.org/v2/top-headlines?q=${searchTerm}&country=us&apiKey=${apiKey}`;

        axios.get(url)
        .then(response => {
            this.setState({ articles: response.data.articles, isLoading: false });
        })

        .catch(error => {
            console.error("Error fetching news:", error);
            this.setState({ isLoading: false });
        });
    };

    handleSearchChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    };

    handleSearch = () => {
        this.fetchNews(this.state.searchTerm);
    };

    render() {
        const { articles, isLoading } = this.state;
    
        return (
            <div className="container mt-3">
                <SearchBar onChange={this.handleSearchChange} onSearch={this.handleSearch} />
                {isLoading ? (
                    <LoadingBar />
                ) : (
                    <div className="row">
                        {articles.map((article, index) => (
                            <div key={index} className="col-sm-12 col-md-4 mb-4">
                                <NewsCard article={article} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

export default NewsList;
