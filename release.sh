#!/usr/bin/env bash
source private/vars.sh
ionic build android --release -- --keystore=private/my-release-key.keystore --storePassword=$store_password --alias=alias_name --password=$alias_password
supply --apk platforms/android/build/outputs/apk/android-release.apk --track rollout --rollout 0.5 --json_key private/google-api-key.json --package_name center.procedure.app
