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
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <main>
      <Header course={course.name} />

      <Content part1={course.parts[0].name} exercises1={course.parts[0].exercises} />
      <Content part2={course.parts[1].name} exercises2={course.parts[1].exercises} />
      <Content part3={course.parts[2].name} exercises3={course.parts[2].exercises} />
      <Total
        exercises1={course.parts[0].exercises}
        exercises2={course.parts[1].exercises}
        exercises3={course.parts[2].exercises}
      />
    </main>
  );
};

export default App;