import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteNote } from '../../actions';

const Item = (props) => {
    const onClickDeleteItem = event => {
        props.deleteNote(event.currentTarget.dataset.id);
    }
    return (
        <li className='column'>
            <div>
                <h3>
                    <Link to={`/item/${props.id}`}>
                        {props.title}
                    </Link>
                </h3>
                <p>
                    {props.description}
                </p>
                <div className='button-items'>
                    <Link to={`/item/${props.id}`} className='button green'>Edit</Link>
                    <button data-id={props.id} onClick={onClickDeleteItem} className='button red'>Delete</button>
                </div>
            </div>
        </li>
    );
}

const mapDispatchToProps = dispatch => ({
    deleteNote: (id) => dispatch(deleteNote(id))
})


export default connect(null, mapDispatchToProps)(Item);