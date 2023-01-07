# Final Project

## Table of Contents
* Table of Contents
* User stories
* MVP

* Links
* Pre-scrum
* Notes

## User Stories
_1. User: A user will be able to ..._
  * **Register and login**
    * _**Reference: [Native Base Login Form Recipe](https://docs.nativebase.io/next/login-signup-forms#page-title)**_
    * Be greeted with a login/registration page
    * Registration:
      * Enter email and password + confirm form (confirmation email?)
    * Login:
      * Sign in with email and password
  * **Make a report**
    * _**Reference: [React Native Maps](https://github.com/react-native-maps/react-native-maps)**_
    * _**Reference: [React Native Maps Blog](https://blog.logrocket.com/react-native-maps-introduction/)**_
    * See a map with their current location
    * Interact with the map
      * Zoom, pan (genral gesture support)
    * Place a pin on the map
    * Interact with their pin to configure their report
      * _**Reference: [React Native Maps Custom Callout](https://github.com/react-native-maps/react-native-maps#rendering-a-custom-marker-with-a-custom-callout)**_
    * Select an item(s) from a list of icons/images representing different report types/items
    * Select a radius (5, 10, 15, 20m, etc.)
    * (stretch): markout an area on the map to report
      * _**Reference: [React Native Maps Polygon Creator](https://github.com/react-native-maps/react-native-maps#polygon-creator)**_
    * (stretch): put in text as part of their report
    * (stretch): add photos as part of their report
  * **See reports**
    * See a map with pins(?) representing reports made by other users
      * _**Reference: [React Native Maps Markers](https://github.com/react-native-maps/react-native-maps#rendering-a-list-of-markers-on-a-map)**_
    * Interact with the map
      * Zoom, pan (genral gesture support)
    * (stretch): See a map with regions marked by shades of red to indicate report densities
    * (stretch): Be able to toggle overlays
  * (stretch) Websocket chat
    * _**Reference: [React Native Gifted Chat](https://github.com/FaridSafi/react-native-gifted-chat)**_
  * (stretch) Route planning
    * _**Reference: [React Native Maps Directions](https://github.com/bramus/react-native-maps-directions)**_
    * _**Reference: [React Native Maps Directions Blog](https://instamobile.io/react-native-tutorials/react-native-draw-directions-map/)**_


_2. Admin: An admin will be able to ..._
  * **See reports**
    * Click on reports and see the description
    * For professional reporters, sending feed back to specific reports
	    * Respond to reports as an admin
  
  * (stretch): See analytics/visualisations of data
    * _**Reference: [React Native Chart Kit](https://github.com/indiespirit/react-native-chart-kit)**_
    * _**Reference: [React Native Chart Kit Blog](https://blog.logrocket.com/the-top-8-react-native-chart-libraries-for-2021/)**_
    * _**Reference: [React Native SVG Charts](https://github.com/JesperLekland/react-native-svg-charts)**_
    * _**Reference: [Recharts](https://recharts.org/en-US)**_
    * _**Reference: [Victory](https://formidable.com/open-source/victory/about/)**_

_3. Additional ..._
* App view based on time: day and night 
	* (light or dark theme)

* Make a report : use camera and save photo to the report
* offline marker save location, when online send data
* As a user: 
	Be provided with instructions on how to use the app, that can be minimized or highlighted. Default highlighted

	Use the app to at least see active reports while not logged in

	Be able to download static maps with reports (stretch)

As an admin:

* Be able to qualify users
	* Different classifications of users	
	* reports, and state change of reports (active, resolved)

## App Walk Through
1. Download App
2. See app on homescreen
3. Click on app
4. App opens to logo/loading screen
5. See a map screen: 
	* Zoomed in to current location
	* Heat maps/flags of reports
	* Buttons for: tutorial/instructions/faq/info/external-resources
	* Button for: login/register
	* Button for: make a report => (login) ? report : login ? register
	* (stretch): Google maps style search field for navigation
	* Click on Marker
		*  Modal/Card
			* User  
				* The time of the report
				* Badge to indicate status
					* Reported
					* Reviewed
					* Neutralized
					* Dismissed
					* Verified
					* Uncertain
					* Photos, text
			* Admin
				* A form for editing or adding based on qualification
				* Adding or editing status of report
				* Delete report?
				* Edit report
			* A form for review - if it's accurate or not 5 stars
6. Login/Registration page
	* Login
		* email, password, button for login => redirect to main page
	* Registration
		* email, password, password confirmation, name, DOB
		* Field for qualifiers: government, military, professionals, regular
		* Button for register => auto login + redirect to main page
7. Main page w/ map as logged in user
	* Badge for you (login badge: initials, avatar, something)
		* Button for: going to your page
		* (stretch) Profile page: 
			* See all reports that you made
				* Read, update, delete
			* Update info
			* History, update settings, etc.
				* Settings 
	* Default settings are automatically implemented
	* Big button near bottom near thumb for a report
8. Report map page
	* User reports
		* Big button near bottom near thumb for a report
			* Takes you to a map
			* Other map pins are visible
			* Press on map (long press) and drop a pin which opens ...
			* Modal with report options
				* (MVP) See an x on their modal to close that pin w/o saving 
				* => replace a pin more accurately, etc.
				* (MVP) Save button
				* (Stretch) Menu with options (icons) of different kinds of mines/categories/explosives
				* (Stretch) Text field to put a description
				* (MVP) Distance radius range slider
				* (Stretch) Add pictures => to open camera or access photos
			* After press save => redirect back to home page
	* (Stretch?) Admin Reports
		* Pin is a different colour/badge that is added to indicate admin report
		* Have a form to change status of a report
	* I want to see the pin that I just placed amongst all the other pins in view of my map
9. Hamburger Menu
	* (Stretch) Offline mode option: Map downloading
	* Light mode, dark mode
	* Tutorial version mode toggle
	* Edit user profile
	* Logout button

## MVP Features
* Offline storage and uploading
* Making reports
* Seeing reports
* Login/register
* See the info/faq/how-to
	* Dictionary: Visuals, descriptions, warnings, info on landmines and explosives
	* Resources: Protocols for reporting, numbers to call, agencies to know

## Links
* Key Libraries:
  * [React-Native-Maps](https://github.com/react-native-maps/react-native-maps)
  * [React Native Navigation](https://github.com/wix/react-native-navigation)
  * [React Navigation](https://github.com/react-navigation/react-navigation)
  * [React Native Screens](https://github.com/software-mansion/react-native-screens)
  * [Native Base](https://docs.nativebase.io/)
  * [React Native UI Library](https://github.com/wix/react-native-ui-lib)
  * [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
* Blogs:
  * [React Native Component Libraries](https://blog.logrocket.com/react-native-component-libraries/)




## Presentation
* Making sure we can demonstrate on actual device

## First Scrum 
* Ideas:
  * A function for notifications if you're within a certain distance of a LM report
    * Potential for Twilio/Push notifications
    * [Push Notifications](https://docs.expo.dev/push-notifications/overview/)

## Scrum Methodology
* The Agile methodology
  * [Agile](https://www.atlassian.com/agile)

## To Do
* User Stories Ideas
* React Native Tutorial
* Read up on Agile methodology
* Look for app design stuff you like online for tomorrow
