import React from 'react';

import './BadgePreview.scss';

const BadgePreview = ({ codeSnippet }) => {
  return (
    <div
      className='box badge-preview'
      dangerouslySetInnerHTML={{ __html: codeSnippet }}
    />
  );
};

export default BadgePreview;
