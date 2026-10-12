---
name: commit-msg
description: Write a commit message for the staged changes and commit them. Use when the user says "write a commit message", runs /commit-msg, or asks for anything to do with committing changes with a message.
---

# Commit message

Follow these steps in order.

1. Run `git diff --staged` to check for staged changes. If nothing is staged, stop and ask the user to confirm staging all unstaged changes. Only run `git add -A` after they confirm, then continue.
2. Read the staged diff. Base the message only on what is staged.
3. Write the commit message:
   - Subject: one sentence giving a general overview of what changed, under 60 characters.
   - A blank line.
   - Bullet points explaining the specific changes in this commit, clear and concise.
4. Run `git commit` with that message.

## Format

```
<one-sentence overview, under 60 characters>

- <specific change>
- <specific change>
```
