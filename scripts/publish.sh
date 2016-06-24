# Grab the gh-pages branch
git fetch origin gh-pages:refs/remotes/origin/gh-pages
git branch gh-pages origin/gh-pages

# Check out the gh-pages branch as a sibling directory of the repo
git worktree add ../website gh-pages

# Replace current website content with newly built website content
cp -r dist/* ../website
cd ../website
git rm -r --cached .
git add -A

# Are there any changes?  If so, commit and push the website
git diff --cached --exit-code
if [ $? -eq 0 ]
then
    echo "Website is already up to date..."
else
    echo "Committing changes..."
    git config --global user.name "Travis CI"
    git config --global user.email "bspoon+travis@duo.com"
    git commit -m "Rebuilt website from ${TRAVIS_COMMIT}"
    git push origin gh-pages
fi
