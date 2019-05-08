import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNote } from '../../actions';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            error:false
        };
    }
    onChangeInputs = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    onClickSubmit = () => {
        const { title, description } = this.state;
        if(title !== '') {
            this.props.addNote(title,description);
            console.log(typeof this.props.history);
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
                    <h2 className='title-pages'>New Note</h2>
                </div>
                {this.state.error && (<div className='alert-red'>Title field is required</div>)}
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
                        <button onClick={this.onClickSubmit} className='button green'>Submit</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

Create.propTypes = {
    addNote: PropTypes.func,
    history: PropTypes.object
}

const mapDispatchToProps = dispatch => ({
    addNote: (title, description) => dispatch(addNote(title, description))
})


export default connect(null, mapDispatchToProps)(Create);