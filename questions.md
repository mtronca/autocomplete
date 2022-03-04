1. What is the difference between Component and PureComponent? give an example where it might break my app.
Answer: React PureComponents implement shouldComponentUpdate by default. It does a shallow comparison of the props. State should be immutable.

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
Answer: Because it can force the component to re-render if the the context being used inside the component updates. So it may cause unwanted re-renders.

3. Describe 3 ways to pass information from a component to its PARENT
Answer: 1) Callback function. 2) Context. 3) ?

4. Give 2 ways to prevent components from re-rendering.
Answer: 1) Using React.memo and PureComponent. 2) Use keys correctly. 3) Props as objects.

5. What is a fragment and why do we need it? Give an example where it might break my app.
Answer: Fragment is a thing that is used to wrap elements, since React components can't return more than one element, if you try to return something like: <div></div><div></div> without a <React.Fragment></React.Fragment> (or <></>) around it will break.

6. Give 3 examples of the HOC pattern.
Answer: 1) Loaders. 2) Styling. 3) When you need to toggle states.

7. What's the difference in handling exceptions in promises, callbacks and async...await.
Answer: You can handle it either with promise.catch or with try/catch if the function is called with await/async.

8. How many arguments does setState take and why is it async.
Answer: one argument with the state. It is async for performance reasons. React waits for all components setState calls to avoid multiple re-renders.

9. List the steps needed to migrate a Class to Function Component.
Answer: 1) Change the class to a function. 2) Replace the render function to a simple return. 3) Remove the constructor. 4) Remove the usage of this, since it is not a class anymore. 5) Change the methods to functions. 6) Change the usage of state to useState hook. 7) Use useEffect to control the state updates instead of componentDidUpdate, componentWillUnmount, etc.

10. List a few ways styles can be used with components.
Answer: CSS in JS, Regular CSS, Inline, Sass

11. How to render an HTML string coming from the server.
Answer: you can use a specific tag to allow a string to be rendered as html: dangerouslySetInnerHTML. You can also use a third party library to do that.