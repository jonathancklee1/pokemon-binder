---
name: create-pr
description: Write a description for the changes on the current branch and open a pull request into master. Use when the user says "create a PR", "open a pull request", runs /create-pr, or asks for anything to do with raising a PR for the current branch.
---

# Create PR

Follow these steps in order.

1. Run `git status --short` and `git branch --show-current`. If the branch is `master`, stop and tell the user to switch to a feature branch. If there are uncommitted changes, stop and ask the user whether to continue without them.
2. Run `git fetch origin master`, then `git log origin/master..HEAD --oneline` and `git diff origin/master...HEAD`. If there are no commits, stop and tell the user there is nothing to open a PR for.
3. Read the full diff. Base the description on what the branch changes as a whole, not on individual commit messages.
4. Write the PR:
   - Title: one sentence giving a general overview of the branch, under 60 characters.
   - Description: bullet points describing the main features of the changes, clear and concise.
   - One bullet per big change only. Aim for 3 to 6 bullets.
   - Leave out small changes such as removed console.logs, formatting, renames, minor style tweaks and import tidying.
5. Run `git push -u origin HEAD`.
6. Run `gh pr create --base master --title "<title>" --body "<description>"`.
7. Reply with the PR URL. Do not merge it; the user merges.

## Format

```
<one-sentence overview, under 60 characters>

- <main feature>
- <main feature>
```
