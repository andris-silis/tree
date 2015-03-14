import React from 'react';
import ApplicationLayoutView from './ApplicationLayoutView.jsx';


export default function () {
  React.render(
    <ApplicationLayoutView>
    </ApplicationLayoutView>,
    document.querySelector('.content-wrapper')
  );
};
