# 💰 VueJs Currency Convertor 💰
## _Vite, Vuex, Tailwind.CSS, FloatRates API_

A VueJs Currency convertor built to demonstrate technical knowledge of Vue.Js

- Vuex State management
- Routing
- TailwindCSS Styling
- API Calls

## Installation

The currency convertor may be access via the below link:

```sh
https://comfy-syrniki-b96067.netlify.app/
```

If you would like to view the application in production mode, pull the git repo and run the following:

```sh
npm install
npm run dev
```

## Tech Used

| Tech | Link|
| ------ | ------ |
| TailwindCSS | https://tailwindcss.com/ |
| Vite | https://vitejs.dev/ |
| Float Rates API | http://www.floatrates.com/ |
| Node.Js| https://nodejs.org/en/ |
| Vuex| https://vuex.vuejs.org/ |

## Development
The application was built using Vue 3, Vite, Tailwind, vuex and the float rates API.
In terms of development - My current stack is usually VILT, and therefore I had to do some research in order to jog my memory on using Vuex stores and routing.

For referance, VILT stands for
- Vue
- Intertia Js
- Laravel
- Tailwind

The routing used within inertia.js is ever so slightly different to vuejs, so i required some time to jump between the syntaxes.

## Notes

### Unit Testing
In terms of unit testing this application, Mocha or Jest could be used - as of currently, I have little to no experience using these unit tests, but understand the concepts and how they are used - generally a blackbox test would be performed before creating the application in order to ensure the application performs its set goals.

### Why I used what I used
- TailwindCSS is an industry standard a utility-first CSS framework, I have used tailwindcss to build previous Vue/Vite applications and find it speeds up the process of developing responsive and cohesive UIs with a consistent and smooth UX - It allows for the code to easily be understood by any others that use Tailwind as it doesn't rely on custom CSS.
- Vite is much faster than the standard vue CLI, and is better in production from my experience
- I used VUEX as its the state management controller I have the most experience with for standalone Vue - I have also looked into Pinia but am yet to use it.
-   I seperated the dropdown into a reusable component to demonstrate knowledge of emitting and controlling props within vuejs, it would also of been a good idea to seperate the input fields into a seperate component in order to keep the app "clean", but due to the size of this applicaiton, it is not required.

### Known Issues
- A nulled array is saved upon load, this is because "fetch Data" is handling the store, it would be a good idea to have the function for this seperated from the "Fetch Data" method - This would stop the issue and would handle the conversions more accurately (I could not work out how to do this, but I know its simple.)
- sorting would not be viable in this case due to the null array being pushed to the table - Vanilla Js or LoDash could be used in order to sort based on requirements.



