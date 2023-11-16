//import 'bootstrap/dist/css/bootstrap.min.css';
//import Card from "react-bootstrap/Card";
import todos from "../todos.json"

const NoticeList = () => {
    return (
        <main className='font-rajdhani'>
            <div className="flex flex-wrap gap-10 items-center p-5 lg:p-20">
                {todos && todos.map((todo, index) => (
                    <div className="p-10 border border-purple-300 rounded-lg shadow-md" key={index}>
                        <div>
                            <div><strong>Todo: </strong><span>{todo.todo}</span></div>
                        </div>
                    </div> 
                ))}
            </div>
        </main>
    )
}

export default NoticeList