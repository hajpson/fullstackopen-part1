const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </>
  )
}

export default App

const Header = (params) => {
  return (
    <h1>{params.course}</h1>
  )
}

const Content = (params) => {
  return (
    <>
      <Part part={params.part1} exercise={params.exercises1}/>
      <Part part={params.part2} exercise={params.exercises2}/>
      <Part part={params.part3} exercise={params.exercises3}/>
    </>
  )
}

const Total = (params) => {
  return (
    <p>Number of exercises {params.exercises1 + params.exercises2 + params.exercises3}</p>
  )
}

const Part = (params) => {
  return (
    <p>{params.part} {params.exercise}</p>
  )
}