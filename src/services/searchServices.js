import { Octokit } from '@octokit/rest';

export const fetchSearchWithSearchTerm = async (searchTerm) => {
  // TODO: add capability to set auth token
  const octokit = new Octokit({});

  // check for open issues at react repo
  const result = await octokit.search.issuesAndPullRequests({
    q: `repo:facebook/react+is:issue+is:open+${searchTerm}`
  })
  console.log(result, 'in service');

  return result.data.items;
};
