//Declarative Syntax---> vs. imperative (you tell the computer what to do step by step) & declarative is you telling
//---------------------> the computer what you'd like the end result to be, and it does the step by step.
//---------------------> react is declarative(JSX). vanilla JS w/o this framework is not. JSX will take
//---------------------> your code, then translate it back to JS for the browser to use. JSX is a combo of JS
//---------------------> & HTML.

//Components-----------> the building blocks of react(fx). Takes in raw data (props) then returns the user
//---------------------> interface (JSX). All components begin with a capital letter.
function App(props) {
  ////<--- the App is the component, the props is an argument
  return (
    //<--- react elements in the return
    <div>
      <h3>{props.title}</h3>
      <h4>Subtitle: {props.subtitle}</h4>
    </div>
  );
}
//Mount Components-----> we create the data that is rendered above.
//---------------------> reactDOM is a fxn taking in 2 arguments: a component and where to append html.
ReactDOM.render(
  <App title="Let us Learn React" subtitle="Components" />,

  //tell our app where to append the html ↓
  document.getElementById("root")
);
