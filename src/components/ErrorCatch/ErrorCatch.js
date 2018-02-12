import React, { Component, Fragment } from 'react';


class ErrorCatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
  }
  render() {
    if(this.state.hasError) {
      return (
        <Fragment>
          <div>что то пошло не так</div>
        </Fragment>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;