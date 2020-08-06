import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { actions } from '../domains';
import { selectedIssueSelector } from '../selectors';


export const IssueDetailPage = () => {
  const dispatch = useDispatch();
  const { issueId } = useParams();
  const selectedIssue = useSelector(selectedIssueSelector(issueId));

  useEffect(() => {
    if(!selectedIssue) {
      dispatch(actions.fetchIssueRequest({ issueId }));

    }
  }, [dispatch, issueId, selectedIssue]);

  return (
    <div>
      <h1>Issue #{issueId}</h1>
      {selectedIssue && (
        <h2>{selectedIssue.title}</h2>
      )}
    </div>
  );
};
