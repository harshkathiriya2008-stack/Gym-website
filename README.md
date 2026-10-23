# Ironworks Gym Website

A responsive gym website built with HTML, CSS, and JavaScript. The
design uses a dark charcoal background, warm off-white text, and an
ember-orange accent color.

## Project Files

Keep these files together in the same project folder:

-   `index.html` --- Main gym landing page.
-   `register.html` --- Membership registration form.
-   `style.css` --- Shared styles, layout, colors, and responsive
    design.
-   `script.js` --- Navigation interactions and registration form
    validation.

> If your HTML file uses a different filename, update the links between
> pages to match it.

## Features

-   Responsive layout for desktop and mobile screens.
-   Gym landing page with navigation, hero section, class schedule,
    trainer cards, and call-to-action sections.
-   Membership registration form with:
    -   First and last name fields
    -   Email and phone validation
    -   Membership plan selection
    -   Password validation (minimum 8 characters)
    -   Required terms checkbox
-   Registration confirmation panel after valid form submission.
-   Mobile navigation toggle and scroll-based navigation styling.
-   Google Fonts: Anton and Inter.
-   Bootstrap 4.6.2 grid stylesheet for the registration name fields.

## How to Run

This is a static front-end website. Node.js and a `server.js` file are
not required.

1.  Download or copy all project files into one folder.
2.  Make sure `index.html`, `register.html`, `style.css`, and
    `script.js` are in the expected locations.
3.  Double-click `index.html` to open the site in a browser.
4.  Use the navigation links to move between the home page and
    registration page.

### Run with Visual Studio Code

1.  Open the project folder in Visual Studio Code.
2.  Install the **Live Server** extension if it is not already
    installed.
3.  Right-click `index.html`.
4.  Select **Open with Live Server**.

An internet connection is needed for Google Fonts and the Bootstrap CDN
stylesheet.

## Registration Form Behavior

The registration page validates the fields in the browser. When all
fields are valid and the terms checkbox is selected, it hides the form
and displays a confirmation message.

**Important:** Registration is currently a front-end demonstration. The
JavaScript does not send membership details to a server, save accounts
in a database, or contact a coach. Connect a backend or trusted form
service to enable real registration.

## Customization

-   **Colors and typography:** Edit the CSS variables at the top of
    `style.css`.
-   **Membership plans and prices:** Update the options and displayed
    prices in `register.html`.
-   **Form validation:** Edit the registration validators in
    `script.js`.
-   **Page content:** Update the headings, class schedule, trainer
    details, and calls to action in the HTML files.

## Technologies Used

-   HTML5
-   CSS3
-   JavaScript
-   Bootstrap 4.6.2 grid stylesheet
-   Google Fonts (Anton and Inter)

## Before Publishing

-   Test all navigation links and the registration form on desktop and
    mobile.
-   Confirm that the displayed membership prices and terms are accurate.
-   Add a backend or form service if real membership submissions are
    required.
-   Add appropriate privacy and security measures before collecting
    personal information.
