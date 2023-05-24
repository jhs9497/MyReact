import './App.css';

function Header(props) {
  return (
    <header>
      <h1>제목 : {props.title}</h1>
      <h1><a href="/">Computer Programming</a></h1>
    </header>
  )
}

function Nav(props) {

  const programList = []
  for (let i = 0; i<props.data.length; i++) {
    let tmp = props.data[i];
    programList.push(<li key={i}><a href={'/program/'+ tmp.num}>{tmp.subject}</a></li>)
  }

  return (
    <nav>
      {programList}
    </nav>
  )
}

function Article(props) {
  return (
    <article>
      <h2>{props.question}</h2>
      your choice?
    </article>
  )
}

function App1() {

  const data = [
      {num:1, subject : 'react.js'},
      {num:2, subject : 'vue.js'},
      {num:3, subject : 'python'},
      {num:4, subject : 'java'}
  ]

  return (
    <div className="App">
      <Header title="Programming"></Header>
      <Nav data={data}></Nav>
      <Article question="List of the Computer Programming"></Article>
    </div>
  );
}

export default App1;