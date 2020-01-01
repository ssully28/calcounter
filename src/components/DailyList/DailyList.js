import React from 'react';
import uuid from 'uuid';

import Entry from './Entry/Entry';

import classes from './DailyList.module.css';

const DailyList = (props) => {
  const { entries, total } = props;

  let entryList = [];

  if (entries.length > 0) {
    entryList = entries.map(value => {
      return (
        <Entry key={uuid()}>{value}</Entry>
      );
    });
  }

  return (
    <div className={classes['DailyList']}>
      <div className={classes['Entries']}>
        {entryList}
      </div>
      <div className={classes['Total']}>
        Total so far : {total}
      </div>
    </div>
  );
};

export default DailyList;
