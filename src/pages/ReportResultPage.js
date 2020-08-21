import React, { useContext } from 'react';

import LargeHeading from '../components/LargeHeading/LargeHeading';
import BadgeCodeSnippet from '../components/BadgeCodeSnippet/BadgeCodeSnippet';
import BadgePreview from '../components/BadgePreview/BadgePreview';
import AuthContext from '../context/AuthContext';

const ReportResultPage = () => {
  const auth = useContext(AuthContext);
  const userId = auth.userId;

  const src = `/${userId}/report/view`;
  const codeSnippet = `<iframe src='${src}' height='200' width='300' title='Restaurant Report'></iframe>`;

  return (
    <>
      <LargeHeading title='Your Result' subtitle='Subtitle' />
      <div className='container'>
        <section className='section'>
          <h2 className='title is-3'>1. See Your Results</h2>
          <p>blah blah blah</p>
        </section>
        <section className='section'>
          <h2 className='title is-3'>2. Share Your Results</h2>
          <h3 className='title is-4'>Share Direct Link</h3>
          <button className='button is-link is-light'>Copy Link</button>
          <h3 className='title is-4'>Embed in Website</h3>
          <p>
            Add this code snippet to your website's code, between the{' '}
            {'<body></body>'} tags.
          </p>
          <BadgeCodeSnippet codeSnippet={codeSnippet} />
          <h4 className='title is-5'>Badge Preview</h4>
          <BadgePreview codeSnippet={codeSnippet} />
        </section>
      </div>
    </>
  );
};

export default ReportResultPage;
