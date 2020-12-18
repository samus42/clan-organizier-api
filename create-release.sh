npm version $1 || exit 1
git push --follow-tags || exit 1
./deploy-firebase.sh
npm version patch --no-git-tag-version
git add .
git commit -m "next development version"