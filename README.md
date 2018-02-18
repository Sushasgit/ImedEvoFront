![Logo](src/images/logo.png "Description goes here") 
# ImedEvoFront 

## For production build:
`npm run-script build`

## For develop version (with webpack-dev-server):
`npm start`

#### Key changes in this version:

Changes      | Description
------------ | -------------
Webpack config | Added webpack config for production version and development version
CSS modules React| Added new structure of styles. All components have their own independent scss files. https://github.com/css-modules/css-modules, https://www.youtube.com/watch?v=FUHuBpzVHrg&t=2102s
Stylelint | Added stylelint config 
ServiceWorker | Added 
ReactGoogleMaps | Use npm module react-google-maps (added custom styles and custom markers)
Geolocation | The HTML Geolocation API is used to get the geographical position of a user.


