import React from 'react';
import ApplicationLayoutView from './ApplicationLayoutView.jsx';


export default function (state) {
  React.render(
    <ApplicationLayoutView>
    </ApplicationLayoutView>,
    document.querySelector('.content-wrapper')
  );
};
