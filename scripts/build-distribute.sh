#!/bin/sh
set -o verbose
npm run make-resources #make the icons and splash
if [ "$TRAVIS_BRANCH" == "master" ] && [ "$TRAVIS_PULL_REQUEST" == "false" ]; then
  ionic build ios --device --release --prod --codeSignIdentity="iPhone Distribution" --provisioningProfile="a73a9174-4f25-476a-920a-da703cfd6ba4" --developmentTeam="8HR7TM5TD3" --packageType="app-store" #Make the build
  xcrun xcodebuild -exportArchive -archivePath "platforms/ios/Procedure Center.xcarchive" -exportPath "Procedure Center.ipa" -exportProvisioningProfile "iOS Distribution"
  ionic build android --release --prod -- --keystore=scripts/android-release.keystore --storePassword=$store_password --alias=alias_name --password=$alias_password 2>&1 >/dev/null
  fastlane supply --apk platforms/android/build/outputs/apk/android-release.apk --track beta --json_key scripts/google-api-key.json --package_name center.procedure.app
  fastlane pilot upload --skip_submission --changelog "various changes -- check github"
else
  ionic build ios
  ionic build android
fi
