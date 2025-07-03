import './index.css'
function Sidebar({tasks,name})
{

    return (
        <>
        <div className="sidebar"> 
            <h1>Remndr</h1><hr />
            <ul className='Task-list'>
                <li className='My-Tasks'>My Tasks</li>
                <div className="task-columns">
                    <ul className='To-do-items'>
                    {tasks.map((t,i)=>(
                        <li key={i} className='Sidebar-list'>
                            {t.text}
                        </li>
                    ))}
                </ul>
                </div>
            </ul>  
        </div>
        </>
    )
}
export default Sidebar