import React, {  useEffect } from 'react';
import {connect} from 'react-redux';
import LogItem from './LogItem';
import PreLoader from '../layout/PreLoader';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions'

const Logs = ({ log: { logs, loading }, filtered, getLogs }) => {

    useEffect(() => {
        getLogs()
       //eslint-disable-next-line
    }, []);

    if(!loading && logs === null ) {
        return <PreLoader />
    }

    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">Logs</h4>
            </li>
            {!loading && logs.length === 0 ? (<p className="center">No logs to show</p>) : 
            filtered !== null ? (filtered.map(log => <LogItem log={log} key={log._id} />)) : 
            ( logs.map(log => <LogItem log={log} key={log._id} />))}
        </ul>
    )
}

Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired,
    filtered: PropTypes.object
}

const mapStateToProps = state => ({
    log: state.log,
    filtered: state.log.filtered
})

export default connect(mapStateToProps, {getLogs})(Logs)
