//react minimal & open source 
//felexible decision fetigue
//official cli create react app 
//tree of componenets
//hence declerative

function App(){//components in the ui
    const [todos, setTodos] =useState([])
//binding 
const todoText = useRef();

//side Effects / lifeCycle 
useEffect(()=>{
    const existingTodos = localStorage.getItem('todos')
    setTodos(existingTodos ? JSON.parse(existingTodos) : [])
    }, []);

function addTodo(event){
    event.preventDefault();
    const next = [...todos, todoText.current.value];
    setTodos(next);
    localStorage.setItem('todos', JSON.stringify(next));
}

    //sjx
    return(
        <div>
            <ul>
                {todos.map(todo=>(<li key={todo}>{todo}</li>))}
            </ul>
        
            <form onSubmit={addTodo}>
                <input ref={todoText} type="text" name="todo"/>
                <input type="submit" value="Add Todo" />
            </form>
        </div>
    );
}
export default App;