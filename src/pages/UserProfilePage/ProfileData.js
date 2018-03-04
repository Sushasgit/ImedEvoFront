import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as Icons from '../../components/SvgIcons/SvgIcons.js'
import styles from './profile-data.scss'


class ProfileData extends Component {
    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
  render() {
    const user = this.props.user
    return (
      <Fragment>

        <img style={{width:'21%'}} src={require('../../images/avatar-profile.png')} />
        <div className={styles.profile}>

          <h3 className={styles.profile__user_name}>{`${user.firstName} ${user.lastName}`}</h3>
          <h3>
            <span className={styles.icons_h}>
              <Icons.IconCalendar/>
            </span>
            {user.birthDate}
          </h3>
          <h3>
            <span className={styles.icons_h}>
              <Icons.IconMail/>
            </span>
            {user.username || user.email}
          </h3>
          <h3>
             <span className={styles.icons_h}>
              <Icons.IconPhone/>
            </span>
            {user.phone}
          </h3>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    user:state.auth.user
  };
}
export default connect(mapStateToProps)(ProfileData);

