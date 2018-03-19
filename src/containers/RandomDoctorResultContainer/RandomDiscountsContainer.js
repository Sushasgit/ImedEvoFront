import React, { Component, Fragment } from 'react';
import * as actions from '../../actions/discountsActions';
import { connect } from 'react-redux';
import RandomDiscounts from '../../components/RandomResults/RandomDiscounts';

class RandomDiscountsContainer extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isLoading:true,
      discounts:[]
    }
  }

  componentDidMount (){
    this.props.getAllDiscounts()
  }

  render () {
    return (
      <Fragment>
        <RandomDiscounts {...this.props.allResults} />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  allResults: state.allResults
});

function mapDispatchToProps(dispatch) {
  return {
    getAllDiscounts: () => dispatch(actions.getAllDiscounts()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomDiscountsContainer)

