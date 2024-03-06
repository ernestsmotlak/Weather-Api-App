# Weather App using React

The app is available here: https://weather-api-app-orpin.vercel.app/

## How to run
- Inside '/src' run ```npm run start```

## Current Task
- Change the button so that the margin top and bottom are 0, also add styles and align it with the text input field.

## Current error
- Display minutes in Main.js does not display the 0 if the current minute value is less than 10.

## Random need to know
    - Common breakpoints are 320px — 480px for mobile devices, 481px — 768px for iPads & tablets, 769px — 1024px for small screens like laptop, 1025px — 1200px for large screens like Desktops, and 1201px and above for extra large screens like TV.

## Current
- In Main.js:
    - Horizontal grid ("Datum in dan v tednu", "Temp, veter, feelsLike, min/max, slika!", "Lokacija in location icon")
    - Column 2:
        - Is a vertical grid 
- On mobile the view goes from first to last columns, as they currently are.

## Next
- Change css for mobile, tablet and web.
    - Display the data from Fetch2.js
- Turn the cards into buttons
- On click the button card changes colour and the div under the textfield changes and displays the data of the clicked card.
- Make another component: 
    - List some Slovenian towns. On click it makes a fetch with the location being the clicked town.
- Create a footer and include the weatherapi's link and image.

## After the end
- Make a video showing the css.

## Info
- Branch FiveCardsScroll:
    - Instead of the current 3 cards, it has 5 cards.
    - The first 3 are shown, the other two can be seen if the user scrolls. 
    - Was worked on only in mobile view.