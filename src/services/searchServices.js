import { Octokit } from '@octokit/rest';

export const fetchSearchWithSearchTerm = async (searchTerm) => {
  // TODO: add capability to set auth token
  const octokit = new Octokit({});
  // check for open issues at react repo
  const result = await octokit.search.issuesAndPullRequests({
    q: `repo:facebook/react+is:issue+is:open+${searchTerm}`,
    per_page: 10
  });

  return result.data.items;
};

export const fetchIssue = async (issueId) => {
  const octokit = new Octokit({});
  const result = await octokit.issues.get({
    owner: 'facebook',
    repo: 'react',
    issue_number: issueId
  });

  return result.data;
};
