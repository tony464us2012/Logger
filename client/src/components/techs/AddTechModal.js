import React, { useState } from 'react';
import {connect} from 'react-redux';
import { addTech } from '../../actions/techActions';
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = ( {addTech}) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = () => {
        if(firstName === '' || lastName === '' ){
            M.toast({ html: 'Please enter a first and last name'})
        } else { 
            const newTech = {
                firstName, 
                lastName
            }; 
            addTech(newTech);
            M.toast({ html: 'Tech added'})
            //Clear Fields
            setFirstName('');
            setLastName('');
        }
    }

    return (
        <div id='add-tech-modal' className='modal' style={modalStyle}>
            <div className="modal-content">
                <h4>Enter Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='firstName' value={firstName} onChange={e => setFirstName(e.target.value)}/>
                        <label htmlFor='firstName' className='active'>Enter First Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='lastName' value={lastName} onChange={e => setLastName(e.target.value)}/>
                        <label htmlFor='lastName' className='active'>Enter Last Name</label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className='modal-close waves-effect blue waves-light btn'>Enter</a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

AddTechModal.propTypes = {
    addTech: PropTypes.func.isRequired
}

export default connect(null, { addTech })(AddTechModal)