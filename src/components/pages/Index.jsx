import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Item from '../commons/ListItem';

class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showType: 'list'
    };
  }
  onCickShowType = event => {
    this.setState({
      showType: event.currentTarget.dataset.type
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className='header-pages'>
          <h2 className='title-pages'>All Notes</h2>
          <ul className='show-type'>
            <li>
              <button data-type='grid' onClick={this.onCickShowType}>Grid</button>
            </li>
            <li>
              <button data-type='list' onClick={this.onCickShowType}>List</button>
            </li>
          </ul>
        </div>
        <ul className={`note-list ${this.state.showType === 'grid' ? 'grid' : ''}`}>
          {
            this.props.list.map((item, i) => {
              return (<Item key={i} {...item} />)
            })
          }
        </ul>
      </React.Fragment>
    )
  }
}

NoteList.propTypes = {
  list: PropTypes.array
}

const mapStateToProps = state => ({
  list: state.list
})

export default connect(mapStateToProps)(NoteList);