import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedIssueSelector } from '../selectors';

export const IssueDetailPage = () => {
  const dispatch = useDispatch();
  const { issueId } = useParams();
  const selectedIssue = useSelector(selectedIssueSelector);

  console.log(issueId, 'da params');
  console.log(selectedIssue);

  return (
    <div>
      <h1>Issue #{issueId}</h1>
    </div>
  );
};
