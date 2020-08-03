import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedIssueSelector } from '../selectors';

export const IssueDetailPage = () => {
  const dispatch = useDispatch();
  const { issueId } = useParams();
  const selectedIssue = useSelector(selectedIssueSelector(issueId));

  useEffect(() => {
    if(!selectedIssue) {
      console.log('dispatch action to load selected issue');
    }
  }, []);

  return (
    <div>
      <h1>Issue #{issueId}</h1>
      {selectedIssue && (
        <h2>{selectedIssue.title}</h2>
      )}
    </div>
  );
};
