# MERN Stack Task Manager

[Live Site](https://mern-stack-task-manager.herokuapp.com/)


Project geared towards practicing my knowledge in Redux and building a REST API using Node.js/Express with MongoDB. Was deployed on Heroku.

The scale of this project did not require the use of a state management library, but I heard some great things about Redux Toolkit. I wanted to practice implementing Redux, but also learn something new at the same time. 

I also just recently completed a back-end course for Node.js, Express and MongoDB. This would be my first time building out a full stack application from beginning to end.

## Issues & Reflection
I did run into issues where I had my array of tasks rerendering anytime I was updating a single task. (This is due to the fact that the array was changing and my tasks having to remap.) I decided to keep it this way as I didn't see a performance issue given that this is a small scale project.

Possible solutions that I have thought about was managing the tasks inputs/data state locally per each task component and doing a single API call on unmount to update the database and redux state if user navigates away from the dashboard page.(Overall reduce the amount of API calls made when updating and/or adding new tasks)

Current implementation does an API call to update within my Redux actions. (THUNK API). Then the response I receive from the API call I would use to update Redux state array.

Other minor issues/problems was handling dates and converting date values to display properly in <input type='date'/>. Prior to this project, I did not really work with manipulating and converting dates so this was a good opportunity.

Overall a good experience working on both front-end and back-end.