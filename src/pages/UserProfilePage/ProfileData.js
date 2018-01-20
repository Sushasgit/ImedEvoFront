import React, { Component } from 'react';
import styles from './profile-data.scss'

class ProfileData extends Component {
  render() {
    return (
      <div className={styles.profile}>
        <h3 className={styles.profile__user_name}>Иван Федорович Крузенштерн</h3>
        <h3>30.09.1972</h3>
        <h3>user@gmail.com  +380(XX) XXX XXX XXX</h3>
      </div>

    );
  }
}

export default ProfileData;

