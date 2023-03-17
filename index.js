const core = require('@actions/core');
const github = require('@actions/github');

async function updatePr(token, title, pull_number, owner, repo) {
  const octokit = github.getOctokit(token);

  const req = {
    owner: owner,
    repo: repo,
    pull_number: pull_number,
    title: title
  };

  await octokit.rest.pulls.update(req);
}

async function run() {
  try {
    const token = core.getInput('token', {required: true});
    const title = core.getInput('title', {required: true});
    const pull_number = github.context.payload.pull_request.number;
    const owner = github.context.repo.owner;
    const repo = github.context.repo.repo;

    await updatePr(token, title, pull_number, owner, repo);
  } catch (error) {
    core.error(error);
    core.setFailed(error.message);
  }
}

run();
