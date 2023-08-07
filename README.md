# *DECBASE*
  \- _a landing page for the company that creates magnificent interior designs. With 20 years of experience and over 3000 successful projects,  they transform spaces into unique works of art._

## Technologies
<div align="center">
<img alt="Badge" src="https://img.shields.io/badge/HTML-e96228"> 
<img alt="Badge" src="https://img.shields.io/badge/SCSS-bf4080">
<img alt="Badge" src="https://img.shields.io/badge/JavaScript-yellow">
<img alt="Badge" src="https://img.shields.io/badge/BEM methodology-blue"><br>
<img alt="Badge" src="https://img.shields.io/badge/Slick CSS-052636">
<img alt="Badge" src="https://img.shields.io/badge/jQuery-052636">
<img alt="Badge" src="https://img.shields.io/badge/Slick JavaScript-052636">
</div>

## Project installation
Clone the repository, start the server, and open the project in a browser.<br>
For the correct display, open the folder HW_4 in your code editor, not nested within any other folders.

## Section details
#### "Header"
- The header is sticky to the top edge. Below the header, there is a progress bar that shows the current viewing progress of the page.
#### "What We Do"
- JSON+JS filtering of projects is implemented.
- Each filter contains five corresponding projects. Upon re-clicking the filter, it stops triggering.
- Clicking on "all" displays the three latest projects, one from each filter.
- Information for the blocks is fetched from https://jsonplaceholder.typicode.com
#### "Weather"
-  The interaction with the API is added to access current weather data for any location, including over 200,000 cities: https://openweathermap.org/api.
#### "Testimonials"
- The switching of 6 different testimonials, 2 per page, is implemented.
- For this block, Slick CSS, Slick JavaScript, and jQuery are used.
#### "Latest news"
- The smooth appearance of items in the Latest News section is implemented. The animation triggers every time the user navigates to this section, both when scrolling and transitioning through the header.
- Additionally, when the user hovers over an item, the image enlarges for a better user experience.
#### "Sign-up"
- Data validation is implemented. If the form is filled out incorrectly, the user is provided with information about where they made a mistake.
- After successful form submission, the data is stored in the local storage.
- After saving the data, if the name field contains "Sigma", a greeting message is displayed for 5 seconds, stating that today (system date is displayed) users with this name can receive a 120% discount when placing an order.
#### "Footer"
- The year next to the copyright is automatically updated from the system date.
## Some more details
- Before the page loads, a loading animation is displayed. The animation lasts for 5 seconds, after which the main page is loaded.
- If a user remains inactive on the website for 1 minute, a window appears, asking if they are still there. If no response is received, the page closes.
   <br> *Instead of closing, an alert about the closure appears, and the page reloads.
