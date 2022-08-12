# Today-s-To-Do-List

A single-workday planner that saves text inputs and also color codes by the hour sepending on if the planner event iws in the past, present or future as indicated by the colors: grey, red, and green.
This app will run in the browser and feature dynamically updated HTML and CSS powered by JQuery.

##Build
* In HTML semantic tags have been used to aid with accessibility.
* The site is built using Bootstrap as a CSS framework.
* Jquery powers the dynamic rendering of the html content based on user input.
* moment.js is used to manipulate date values for historic data extraction from APIs.
* Google Fonts allwos for the usage of custom fonts that do not have to be installed on the user's machine.
* Font Awesome allows for the usage of custom icons

##User Story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

##Acceptance Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

Deployed URL
https://jmullz-z.github.io/Work-Day-TO-DO/