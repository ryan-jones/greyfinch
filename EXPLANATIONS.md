# Giraphy App

This is a test project aiming to do two things: First, to display randomly generated gifs consumed from Giphy's public api. Second, is to build the project utilizing the View Tools package.

## Feedback

I was impressed with the View Tools package. I can definitely see its advantages, especially amongst highly integrated UX/Developer teams. I liked the project too, as it was succint and to the point. Many code test require an extensively built app that includes a whole series of features and requirements. This was not the case, and all additional features were of my own choice.

## Challenges

The biggest challenge was utilizing View Tools. As this was the first time I've used the platform, I wasn't fully familiar with how to fully embrace it t the fullest extent of its capabilities. Additionally, there were multiple instances where I encountered bugs that impeded development (which I've included as feedback in /bugs. The end result is that the project is not as clean or as organized as I would normally like, but I imagine a big part of this exercise was seeing how we as candidates can navigate through View Tools.

Some questions I am left with after doing the project.

- Is View Tools suitable for styling and generating nested components, i.e. a navbar or a footer menu, or is it more suitable for creating entire pages/views?

- As the view.js file is dynamically generated, how can one create modifications to the file that will persist, even when updating the view in View Tools (e.g., what if I want to wrap an element with a link or some other feature?)

- Was I expected to use View Tools to create all of the components in my project, or are most projects built using View Tools as a supplementary feature rather than depending on it being the primary driver of the project architecture?

## Development decisions

Because of the aforementioned, I had to make some decisions that I otherwise many not have made.

- Where possible, I used View Tools to build components; however, I may have used it inappropriately to create subcomponents, which led to messy and unmaintainable stylings.

- I grappled with how much styling I should and should not put. I put basic styling on components built with View Tools. Components that I built with custom jsx have their own respective scss files that handle their stylings.

- When I encountered a bug that prevented me from using View Tools, or if I encountered a user case where I didn't know how to best utilize View Tools, I created a custom component.

- I created a single Cypress test file just to demonstrate its usefulness; however, I encountered issues with running the tests that I had not experienced before in projects using similar logic. I could try to debug the issue, but I had to balance the decision to spend more time on the project with previously arranged plans for the weekend.

- When useful, I used the .ts and .tsx typescript file format. However, because of the **.view, .view.js** file structure, dealing with the proper syntax for importing files meant that converting every .js into .ts would involve a lot of time correcting every import file path and creating a custom tsconfig to handle the file extensions. Therefore, the app does not use a uniform file format, something I would ensure normally, and which can be viewed in other projects of mine on Github. : \

* I didn't realize that you could change the media queries in View Tools, by first changing the screen size view to the screen size you wanted, until near the very end of my project. I didn't retroactively go about correcting the responsiveness because it was mentioned that I may be working with a designer as part of the review.

### So how come you used ...

**Redux:** Admittedly, using redux is excessive and unnecessary for completing the minimum requirements of the project. The majority of stateful logic is contained within a single component, and none of the components share logic between themselves. Therefore, the primary motivating factor for using redux was _scalability_. Assuming that a code review would also entail adding or modifying features, such as moving or adding a component, relying on an alternative method of sharing logic, such as contexts or custom hooks may result in unintended consequences as the component tree is modified. Using redux, we can rearrange the entire structure of the app without worrying about how we share state.

**Typescript:** While Typescript at times can create greater problems than the ones it intends to solve, I find it very helpful for readability for 3rd party programmers viewing code for the first time, and for avoiding common errors that derive from Javascript's dynamic typing.

**Cypress:** Cypress is a great tool for e2e testing, and because I heard the dev team really likes incorporating new technologies

### So why did you ...

**Create a language selector:** This was a UX choice. 20% of all American households speak a language other than English. Giving children the option to search for gifs in their own language enriches their experience while they are waiting in the doctor's office!

**Add a searchable input field:** "You can have any color you want, as long as it's black" may have worked for the era of Henry Ford, but it' not going to cut it in the 21st century. Giving the children more options means keeping them entertained longer during waits.

**Create a bug page:** Obviously, a lot of effort has been put into the View Tools package. The motivation for highlighting bugs that I came across while using the platform was two-fold: First, to provide feedback to the developers who built the platform. Second, to point out instances where View Tools may have impacted normal development strategies.

### How you guys like it. If you have any further questions, please don't hesitate to ask.
