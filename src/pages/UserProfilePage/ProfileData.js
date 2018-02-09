import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import * as Icons from '../../components/SvgIcons/SvgIcons.js'
import styles from './profile-data.scss'

class ProfileData extends Component {
  render() {
    return (
      <Fragment>
        <img style={{width:'21%'}} src={require('../../images/avatar-profile.png')} />

        <div className={styles.profile}>
          <Link className={styles.settings} to="/">
            <Icons.IconEdit/>
          </Link>
          <h3 className={styles.profile__user_name}>Иван Федорович Крузенштерн</h3>
          <h3>
            <span className={styles.icons_h}>
              <Icons.IconCalendar/>
            </span>
            30.09.1972
          </h3>

          <h3>
            <span className={styles.icons_h}>
              <Icons.IconMail/>
            </span>
            user@gmail.com  </h3>
          <h3>
             <span className={styles.icons_h}>
              <Icons.IconPhone/>
            </span>
            +380(XX) XXX XXX XXX
          </h3>
        </div>
      </Fragment>
    );
  }
}

export default ProfileData;

