import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateNote } from '../../actions';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            title: '',
            description: '',
            error:false
        };
    }
    componentWillMount() {
        if(this.props.noteItem === undefined || this.props.noteItem === null) {
            this.props.history.push('/');
        } else {
            const { id, title, description } = this.props.noteItem;
            this.setState({
                id,
                title,
                description
            })
        }  
    }
    onChangeInputs = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    onClickSubmit = () => {
        const { id, title, description } = this.state;
        if(title !== '') {
            console.log(this.props.updateNote(id,title,description));
            this.props.history.push('/');
        } else {
            this.setState({
                error:true
            })
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className='header-pages'>
                    <h2 className='title-pages'>{`Update Note`}</h2>
                </div>
                {this.state.error && (<div className='alert-red'>Title is required</div>)}
                <div className='form-container'>
                    <div className="row">
                        <label htmlFor='title'>Title:</label>
                        <input onChange={this.onChangeInputs} id='title' type="text" name='title' value={this.state.title} />
                    </div>
                    <div className="row">
                        <label htmlFor='description'>Description:</label>
                        <textarea rows='6' onChange={this.onChangeInputs} id='description' type="text" name='description' value={this.state.description} />
                    </div>
                    <div className="row">
                        <button onClick={this.onClickSubmit} className='button green'>Change</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

Edit.propTypes = {
    updateNote: PropTypes.object,
    history: PropTypes.object,
    noteItem: PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
    const { list = [] } = state;
    return {
        noteItem: list.filter(note => note.id === parseFloat(ownProps.match.params.id))[0]
    }
} 

const mapDispatchToProps = dispatch => ({
    updateNote: (id, title, description) => dispatch(updateNote(id, title, description))
})

export default connect(mapStateToProps, mapDispatchToProps)(Edit);