rm -rf platforms/android/res/*/*.png
rm -rf resources/android/*
ionic resources --icon
ionic resources --splash
cp resources/android/icon/drawable-hdpi-icon.png platforms/android/res/mipmap-hdpi/icon.png
cp resources/android/icon/drawable-ldpi-icon.png platforms/android/res/mipmap-ldpi/icon.png
cp resources/android/icon/drawable-mdpi-icon.png platforms/android/res/mipmap-mdpi/icon.png
cp resources/android/icon/drawable-xhdpi-icon.png platforms/android/res/mipmap-xhdpi/icon.png
cp resources/android/icon/drawable-xxhdpi-icon.png platforms/android/res/mipmap-xxhdpi/icon.png
cp resources/android/icon/drawable-xxxhdpi-icon.png platforms/android/res/mipmap-xxxhdpi/icon.png
cp resources/android/splash/drawable-land-hdpi-screen.png platforms/android/res/drawable-land-hdpi/screen.png
cp resources/android/splash/drawable-land-ldpi-screen.png platforms/android/res/drawable-land-ldpi/screen.png
cp resources/android/splash/drawable-land-mdpi-screen.png platforms/android/res/drawable-land-mdpi/screen.png
cp resources/android/splash/drawable-land-xhdpi-screen.png platforms/android/res/drawable-land-xhdpi/screen.png
cp resources/android/splash/drawable-land-xxhdpi-screen.png platforms/android/res/drawable-land-xxhdpi/screen.png
cp resources/android/splash/drawable-land-xxxhdpi-screen.png platforms/android/res/drawable-land-xxxhdpi/screen.png
cp resources/android/splash/drawable-port-hdpi-screen.png platforms/android/res/drawable-port-hdpi/screen.png
cp resources/android/splash/drawable-port-ldpi-screen.png platforms/android/res/drawable-port-ldpi/screen.png
cp resources/android/splash/drawable-port-mdpi-screen.png platforms/android/res/drawable-port-mdpi/screen.png
cp resources/android/splash/drawable-port-xhdpi-screen.png platforms/android/res/drawable-port-xhdpi/screen.png
cp resources/android/splash/drawable-port-xxhdpi-screen.png platforms/android/res/drawable-port-xxhdpi/screen.png
cp resources/android/splash/drawable-port-xxxhdpi-screen.png platforms/android/res/drawable-port-xxxhdpi/screen.png