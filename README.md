# calorition - powered by Spoonacular API
![Image of app](https://i.imgur.com/s48EraA.png)

## Overview
A nutrition app created using Create-React-App and Material UI. Uses data fetched from [Spoonacular](https://spoonacular.com/food-api). [Click here for the live version](https://calorition.vercel.app/)

I came up with this project while learning ReactJS, where I found that not many people understood the importance or logic of calorie counting and the role it plays in our daily lives. People were constantly telling me that they could not progress in their body goals, be it losing fat or gaining muscle. 

I thought of creating an app that would be both informative, yet not too dry to the point where people would give up reading mid-way. It is my sincerest hope that this app can achieve its goal of educating users on nutrition in some small way or another.

Thus, calorition was created. Please enjoy.

### Features
- Calculates Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE) based on an individual's height, weight, age and lifestyle as factors
- Generates a meal plan for the individual based on their dietary preferences and restrictions, using prior BMR & TDEE values as data points
- Custom macronutrients are displayed to the user for logging their macros should they choose to do so
- Generated meal cards include images of the meal, preparation time, number of servings and recipe

### Technologies used
- HTML
- CSS
- JS
- ReactJS

### Packages
- [create-react-app](https://github.com/facebook/create-react-app)
- [material-ui](https://material-ui.com/) - Google's Material Design utilized in React components

## Spoonacular API


## Structure

### Components

```
├── App.css
├── App.js
├── App.test.js
├── Components
│   ├── BMR.js
│   ├── Meal.js
│   ├── MealList.js
│   └── Navbar.js
├── Pages
│   ├── About.js
│   ├── BMRcalculator.js
│   ├── Home.js
│   └── MealPlan.js
├── index.css
├── index.js
├── logo.svg
├── reportWebVitals.js
└── setupTests.js

```

## Work In Progress
- Charting using [Apache Echarts](https://echarts.apache.org/en/index.html)
- Food joke generator to lighten the mood
- Food facts generator

## Credits
- Favicon from [Favicon.io](https://favicon.io/)
- [Spoonacular API](https://spoonacular.com/food-api)
- BMR formula and information from [Calculator.net](https://www.calculator.net/bmr-calculator.html)
- Qingyun for project idea


