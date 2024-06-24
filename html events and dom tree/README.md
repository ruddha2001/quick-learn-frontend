## Theory Objectives

### DOM Tree

#### Read the following resources and answer the questions that follow:

- [https://javascript.info/dom-nodes](https://javascript.info/dom-nodes)

1. What is the root node of the DOM tree?
2. What are the elements of a DOM tree?
3. How many children nodes can an element have?

### HTML Events

#### Read the following resources and answer the questions that follow:

- [https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

1. Explain HTML Events in your own words.
2. Write a code snippet to add an onLoad event on the document which prints your name in the console. Use `addEventListener()`.
3. What does `event.preventDefault()` do?
4. Explain event bubbling in your own words.

## Practical Objectives

### Problem 1

Solve all of the following:

1. [https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events1-download.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events1-download.html)
2. [https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events2-download.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events2-download.html)
3. [https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events3-download.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events3-download.html)

### Problem 2

A sample code has been given that will help you get accquainted better with the DOM tree. There exists a default paragraph component with id `default` that has a default counter state of 10. You can use the first form to test it out, enter the component name as `default`, enter any number of your choice and the counter state of the `default` component will change to 20. This is, at least partially how states and components works. We can control the behaviour of a component in the DOM tree using concepts such as state, which we will explore in some later weeks.

For this week, our focus is on the second form. It allows you to add a new component (element) to the DOM tree. This is not yet functional as of now, and you will be responsible to write code to be:

- Able to add a new component to the DOM tree inside the <div> element with id `injection`
- Able to integrate it as such every new component added has a default counter state of 0 (read and interpret the code to understand how it works)
- Able to use the existing state change function (as we saw with the `default` component) so that we can update the state of the newly added components.

In `index.js`, finish the function `createNewNode()`. Required descriptions are given as function comments.
Comment each line of newly added code, explaining what that line is doing. For variable assignments, explain why you need it and how you want to use it in the code.

In the browser console, run `runTest()`. The output should be `ALL TEST CASES PASSED` for successful implementation.

Note: Try not to change or at least minimally change the exisitng implementation code. Of course it is a ery crude code, but that is how we learn. And feel free to use any resource you want to complete the exercises, that is how real life developers work.
