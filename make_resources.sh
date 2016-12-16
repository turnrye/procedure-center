rm -rf platforms/android/res/*/*.png
rm -rf resources/android/*
ionic resources --icon
ionic resources --splash
cp resources/android/icon/drawable-hdpi-icon.png platforms/android/res/mipmap-hdpi/icon.png
cp resources/android/splash/drawable-land-hdpi-screen.png platforms/android/res/drawable-land-hdpi/screen.png

