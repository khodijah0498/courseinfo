const Header = ({course}) => {
  
  return (
    <div>
      <h1>{course}</h1>
     
    </div>
  );

}
const Content = ({part1,exercises1,part2,exercises2,part3,exercises3}) => {
return (
  <div>
    <Part part1={part1} exercises1={exercises1} />
    <Part part2={part2} exercises2={exercises2} />
    <Part part3={part3} exercises3={exercises3} />
  </div>
);
} 
const Part =(props) => {
  
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  );
}
const Total = ({exercises1,exercises2,exercises3}) => {
return(
  <div><p>{exercises1 + exercises2 + exercises3} </p></div>
)
}  



const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };
  return (
    <main>
      <Header course={course} />
      
      <Content part1={part1.name} exercises1={part1.exercises} />
      <Content part2={part2.name} exercises2={part2.exercises} />
      <Content part3={part3.name} exercises3={part3.exercises} />
      <Total
        exercises1={part1.exercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises}
      />
    </main>
  );
  
  
};

export default App;