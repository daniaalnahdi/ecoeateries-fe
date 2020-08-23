import { useState } from 'react';

const useReportTimestamp = () => {
  const [reportTimestamp, setReportTimestamp] = useState('');
  const [isReportTimestampLoading, setIsReportTimestampLoading] = useState(
    false
  );

  const updateReportTimestamp = async (userId) => {
    const date = new Date();
    const dateDay = date.getDate();
    const dateMonth = date.getMonth();
    const dateYear = date.getFullYear();
    const newTimestamp = `${dateMonth}/${dateDay}/${dateYear}`;

    const timestampRequest = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: userId,
        timeStamp: newTimestamp,
      }),
    };

    try {
      await fetch('http://127.0.0.1:5000/user/timestamp', timestampRequest);
      setReportTimestamp(newTimestamp);
    } catch (err) {
      //TODO handle errors
      console.log(err);
    }
  };

  const getReportTimestamp = async (userId) => {
    const url = new URL('http://127.0.0.1:5000/user/timestamp');
    const params = { userId: userId };

    url.search = new URLSearchParams(params).toString();

    try {
      setIsReportTimestampLoading(true);
      const timestampResponseData = await fetch(url);
      const timestampResponseJson = await timestampResponseData.json();
      setIsReportTimestampLoading(false);

      setReportTimestamp(timestampResponseJson.timeStamp);
    } catch (err) {
      //TODO handle errors
      console.log(err);
    }
  };

  return {
    getReportTimestamp,
    updateReportTimestamp,
    reportTimestamp,
    isReportTimestampLoading,
  };
};

export default useReportTimestamp;
