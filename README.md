# Angular Change Detection

This repo is used to show the differences in how the Default and OnPush change detection strategies work in Angular

## How to run

- `npm install`

- `npm start`

- Browse to http://localhost:4200 to view the app with Default change detection

- Browse to http://localhost:4200/onpush to view the app with OnPush change detection

- Browse to http://localhost:4200/observable to view the app with OnPush change detection, but now based on Observables. This also includes some code that will update state in the observable that is unrelated to the view every two seconds to show how this affects the rendering

- Browse to http://localhost:4200/distinct to view the Observable/OnPush approach, but this time distincting the Observable.

Each component will log to the console each time that it rerenders

## Slides

This was done as a demo for the following [slides](https://docs.google.com/presentation/d/1hYEvENmPihetNvFWb4HlxXWYeEAR08L9dImtJkPdpWw/edit?usp=sharing)
