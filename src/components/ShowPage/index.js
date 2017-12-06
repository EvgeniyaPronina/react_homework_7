import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { showRequest } from '../../actions';

class Show extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    const { showRequest, show } = this.props;

    console.log(show.id);
    if (id !== show.id) showRequest(id);
  }

  // componentWillReceiveProps(newProps) {
  //     console.log(newProps)
  //     const { id } = newProps.match.params;
  //     this.setState( {showId: id})
  // }

  render() {
    const { isFetching, error, show } = this.props;

    if (isFetching) return <p>Загружаем данные...</p>;
    if (error != null)
      return (
        <div>
          <p>Ошибка при загрузке данных:</p>
          <p>{error}</p>
        </div>
      );
    console.log(show.image);
    if (show !== undefined)
      return (
        <div className="Show">
          <h3>{show.name}</h3>
          <img src="" alt={show.name} />

          <div dangerouslySetInnerHTML={{ __html: show.summary }} />
        </div>
      );
    return null;
  }
}

Show.propTypes = {
  isFetching: PropTypes.boolean,
  error: PropTypes.string,
  show: PropTypes.object,
  showRequest: PropTypes.func
};

const mapStateToProps = state => ({
  isFetching: state.shows.isFetching,
  error: state.shows.error,
  show: state.shows.show
});

const mapDispatchToProps = dispatch => {
  return {
    showRequest: id => {
      dispatch(showRequest(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Show);

{
  /*<p>{dangerouslySetInnerHTML={show.summary}}</p>*/
}
