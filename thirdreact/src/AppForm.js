import './App.css';
import {useState} from 'react';

function Article(props){
return( 
    <article>
        <h2>{props.title}</h2>
        {props.body}
    </article>
)
}
function Header(props){
return (
    <header>
        <h1>
            <a href="/" onClick={(event)=>{
                    event.preventDefault();
                    props.onChangeMode();
                }}>{props.title}
            </a>
        </h1>
    </header>
    )
}
function Nav(props){
    const lis = []
    for(let i=0; i<props.topics.length; i++){
        let t = props.topics[i];
        lis.push(
        <li key={t.id}>
            <a id={t.id} href={'/read/'+t.id} 
                onClick={event=>{
                    event.preventDefault();
                    props.onChangeMode(Number(event.target.id));
                }}>{t.title}
            </a>
        </li>)
    }
    return (
        <nav>
            <ol>
                {lis}
            </ol>
        </nav>
    );
}

function Create(props) {

    const onInsert = (event) => {
        event.preventDefault();
        const title = event.target.title
        const body = event.target.body.value

        props.onCreate(title, body)
    }

    return(
        <form onSubmit={onInsert}>
            <input type='text' name='title' placeholder='언어 제목'></input>
            <textarea name='body'></textarea>
            <input type='submit' value='Create'></input>
        </form>
    )
}

function Update(props) {

    const [title, setTitle] = useState(props.title)
    const [body, setBody] = useState(props.body)

    const onUpdate = (event) => {
        event.preventDefault();
        const title = event.target.title
        const body = event.target.body.value

        props.onUpdate(title, body)
    }

    return(
        <form onSubmit={onUpdate}>
            <input type='text' name='title' placeholder='언어 제목'></input>
            <textarea name='body'></textarea>
            <input type='submit' value='Create'></input>
        </form>
    )
}

function App1() {
    const [mode, setMode] = useState('WELCOME');
    const [id, setId] = useState(null);
    const [nextId, setNextId] = useState(4);
    const [topics, setTopics] = useState([
        {id:1, title:'html', body:'html is ...'},
        {id:2, title:'css', body:'css is ...'},
        {id:3, title:'javascript', body:'javascript is ...'}
    ]);

    let content = null;
    let contextControl = null;
    if(mode === 'WELCOME'){
        content = <Article title="Welcome" body="Language"></Article>
    } 
    else if(mode === 'READ'){
        let title, body = null;
        for(let i=0; i<topics.length; i++){
            if(topics[i].id === id){
                title = topics[i].title;
                body = topics[i].body;
            }
        }
    content = <Article title={title} body={body}></Article>
    contextControl = 
        <>
            <li>
                <a href={'/update/'+id} onClick={event=>{
                    event.preventDefault();
                    setMode('UPDATE');
                }}>Update</a>
            </li>
            <li>
                <input type="button" value="Delete" onClick={()=>{
                    const newTopics = []
                    for(let i=0; i<topics.length; i++){
                        if(topics[i].id !== id){
                            newTopics.push(topics[i]);
                        }}
                    setTopics(newTopics);
                    setMode('WELCOME');
                }} />
            </li>
        </>
    } 
    else if (mode === 'CREATE') {
        content = <Create onCreate = {
            (_t, _b) => {
                const tmp = {id:4, title:_t, body:_b}
                const tmpTopics = [...topics]
                tmpTopics.push(tmp)
                setTopics(tmpTopics);

                setNextId(nextId + 1)
            }
        }></Create>
    }
    else if (mode === 'UPDATE') {
        let title, body = null;
        for(let i=0; i<topics.length; i++){
            if(topics[i].id === id){
                title = topics[i].title;
                body = topics[i].body;
            }
        }
        content = <Update title={title} body={body} onUpdate={(title, body)=> {

        }}></Update>
    }

    return (
        <div>
            <Header title="Computer Programming" onChangeMode={()=>{
                    setMode('WELCOME');
                }}>
            </Header>
            <Nav topics={topics} onChangeMode={(_id)=>{
                    setMode('READ');
                    setId(_id);
                }}>
            </Nav>
            {content}
            <ul>
            <li>
                <a href="/create" onClick={event=>{
                    event.preventDefault();
                    setMode('CREATE');
                }}>Create
                </a>
            </li>
            {contextControl}
            </ul>
        </div>
    );
}
export default App1