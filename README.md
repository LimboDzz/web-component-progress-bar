# Things I learnt

- [!TODOS](#todos)
- [New a local git repo and push to remote](#new-a-local-git-repo-and-push-to-remote)
- [Create internal anchors in markdown](#create-internal-anchors-in-markdown)

## New a local git repo and push to remote

### Normal procedure

- in github guide

```sh
echo "# web-component-progress-bar" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/LimboDzz/web-component-progress-bar.git
git push -u origin main
```

- other refs

```sh
git init
git add -A
git commit -m 'Added my project'
git remote add origin git@github.com:sammy/my-new-project.git
git push -u -f origin master
```

#### Comparison

git default branch to master

github default branch to main

pushing a local to github remote needs to fix naming
inconsistency

using

`git branch -M main`

- -M for move/rename a branch, _even if target exists_
- -m for move/rename a branch _and its reflog_

### Errors found

```sh
git push -u origin main
error: src refspec main
error: failed to push some refs to 'https://github.com/LimboDzz/web-component-progress-bar.git'
```

It happens because there no branch created in local repo.

```sh
git branch list
fatal: not a valid object name: 'master'
```

Git will not create a master branch until you commit something.

After init, I `git add .` with nothing created in repo. The sequential commit implicitly(?) failed with nothing able to be commit.

It fixed after I created a few new files to add and commit.

## Create internal anchors in markdown

### Notes:

- just one # for all heading sizes
- no space between # and anchor name
- anchor tag names must be lowercase, and delimited by dashes if multi-word.

### Example:

```md
[click on this link](#my-multi-word-header)

### My Multi Word Header
```

## Web Components

## TODOS
