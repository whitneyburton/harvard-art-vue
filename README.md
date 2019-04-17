# Art Culture Tour
This single-page web application allows users to browse a variety of art forms from a variety of cultures from around the world. The cultures include Uruguayan, Turkmen, Swedish, Bulgarian, and Bohemian. As users select the culture of their choice, they can see samples of art from Harvard Art Museums (data pulled from their API, [found here](https://www.harvardartmuseums.org/collections/api)).

### Project setup
1. Retrieve an API key from the Harvard Art Museums API [here](https://www.harvardartmuseums.org/collections/api)  
2. Clone this repo: `git clone https://github.com/whitneyburton/harvard-art-vue.git`
3. Run `cd harvard-art-vue`
4. Run `npm i` from the root directory for dependencies
5. Run `touch api_key.js` from the root directory
6. Open your code editor and then open the api_key.js file
7. Add this variable with your personal API key:
`export const apiKey = 'YOUR API KEY HERE';` 
8. Run `npm run server` 
9. Visit `localhost:8080` in your browser of choice.

### Tech Stack
Vue.js, CSS

### Preview
![2019-04-17 11 24 53](https://user-images.githubusercontent.com/33883645/56308048-912dba00-6103-11e9-98a6-cd5338b7afa5.gif)

This project, The Final Countdown, was an assignment by Turing School of Software and Design. The spec can be found [HERE](http://frontend.turing.io/projects/final-countdown.html), and the specific prompt for the Harvard Art Museums challenge can be found [HERE](https://gist.github.com/letakeane/16882c0604830c5482b25431a6a6cb19).

The Final Countdown was given to me as a 2 day project for which I had to learn Vue from scratch, and was intended to mock a take-home code challenge for the interview process. 
