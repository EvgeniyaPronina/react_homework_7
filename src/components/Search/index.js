import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import './Search.css';

import { connect } from 'react-redux';
import { searchRequest } from '../../actions';

class Search extends Component {
  state = {
    showName: ''
  };

  handleChange = e => {
    this.setState({ showName: e.target.value });
  };

  handleClick = () => {
    const { searchRequest } = this.props;
    const { showName } = this.state;
    searchRequest(showName);
  };

  render() {
    const { isFetching, error, shows } = this.props;

    if (isFetching) return <p>Загружаем данные...</p>;
    if (error != null)
      return (
        <div>
          <p>Ошибка при загрузке данных:</p>
          <p>{error}</p>
        </div>
      );
    return (
      <div className="Search">
        <form action="#">
          <input
            type="text"
            placeholder="Название сериала"
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Найти</button>
        </form>
        {shows.length > 0 && (
          <div className="show-cont">
            {shows.map((show, i) => (
              <div className="show" key={show.id}>
                <Link to={`/shows/${show.id}`}>{show.name}</Link>
                <img src={show.image.medium} alt={show.name} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

Search.propTypes = {
  isFetching: PropTypes.boolean,
  error: PropTypes.string,
  shows: PropTypes.array,
  searchRequest: PropTypes.func
};

const mapStateToProps = state => ({
  isFetching: state.search.isFetching,
  error: state.search.error,
  shows: state.search.shows
});

const mapDispatchToProps = dispatch => {
  return {
    searchRequest: name => {
      dispatch(searchRequest(name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
