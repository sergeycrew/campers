# Campers App

An application for a company that provides camper van rental services in Ukraine. The application consists of 3 pages:

- home page with a general description of services provided by the company
- a page with ads that have been added to favorites by the user

## Technical task

According to the layout, implement a card announcing the rental of a camper.

On the first page of the catalog, 4 ads should be rendered, and the rest of them - after clicking on the "Load more" button.

If you click on the "heart" button on the ad card, it should be added to the list of favorites, and the color of the button should change.

When updating the page, the final result of the user's actions should be recorded. That is, if you add an ad to your favorites and refresh the page, the button still remains in the "favorite ad" state with the appropriate color.

If you click the heart button again, the ad should be removed from the list of favorites, and the color of the button should change to its original state.

If you click on the "Show more" button, a modal window should open with detailed information about the camper.

The modal window should be closed by clicking on the button in the form of a "cross", by clicking on the backdrop and pressing the Esc key.

The modal window contains information about the characteristics of the camper and reviews about it. Drawing information should depend on the state of the active tab.

The modal window also contains a form for making a camper reservation, consisting of the fields name, email, booking date and comment. The name, email, and booking date fields are required to be filled in and must be checked for the validity of the entered values.

The rental price must be entered as a single value (for example, 8000). In the UI - displayed with a comma (8000.00).

To work with a list of ads, create your own personal backend for development using the UI service https://mockapi.io/