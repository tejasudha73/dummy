import React, { Component } from 'react';
import { connect } from 'react-redux';

import TableComponent from './../../components/tableComponent';
import NoDataAvailable from './../../components/noDataAvailable';
import ReactionSummary from './../../components/reactionSummary';
import { NO_DATA_AVAILABLE }  from './../../constants/messages';
import  { getSummary } from './../../actions';

class Summary extends Component {
  componentWillMount(){
    this.getSummary();
  }

  getSummary = () =>{
    this.props.getSummary();
  }
  
  

  render() {
  	const { summary } = this.props.jokesReducer;
    
    return (
        <div>
          {
            summary.length > 0 
              ?
                <div  className="summary-layout">
                  <ReactionSummary summary={summary}/>
                  <TableComponent summary={summary}/>
                </div>
              :
                <NoDataAvailable message={NO_DATA_AVAILABLE}/>
          }
        </div>
    );
  }
}


const mapStateToProps = state => ({
  jokesReducer: state.jokesReducer
});

const mapDispatchToProps = dispatch => ({
    getSummary: () => {
      dispatch(getSummary());
    }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summary);