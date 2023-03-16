# github-action-set-pull-request-title
github action to automatically set the title of pull requests
[GitHub Action](https://github.com/features/actions)

## Usage

1. Create a `.github/workflows/main.yml` file in your GitHub repo.
2. Add the following code to the `main.yml` file.

```yml
on:
  pull_request:
    types:
      - opened
      - synchronize
      - reopened
      - ready_for_review
    branches:
      - master

jobs:
  attach:
    runs-on: ubuntu-latest

    steps:
      - name: change pr title
        uses: joostpitcrew/github-action-set-pull-request-title@v1.1
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
          pr-title: new_title
```

## Inputs

Input             | Purpose
------------------|---------------------------------------------------------------------------------------------------------------------------------------
github-token      | authorize the access to the pull request
pr-title          | change pull request title
