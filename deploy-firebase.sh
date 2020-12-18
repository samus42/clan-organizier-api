npm ci --production
rm -rf ../firebase/functions/*
cp -R ./* ../firebase/functions
cp .env ../firebase/functions
echo "Ready to deploy"