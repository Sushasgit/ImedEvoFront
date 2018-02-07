import React from 'react';
import DayPicker from 'react-day-picker';
import styles from '../styles/cssmodules.css';

export default function CSSModules() {
  return (
    <DayPicker
      classNames={ styles }
      modifiers={{
        [styles.birthday]: new Date(2018, 8, 19)
      }}
    />
  );
}