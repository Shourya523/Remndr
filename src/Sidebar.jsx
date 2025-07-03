import './index.css'
function Sidebar(props)
{

    return (
        <>
        <div className="sidebar"> 
            <h1>Hi {props.name}</h1>
            <ul>
                <li>To-do</li>
                <ul className='To-do-items'></ul>
            </ul>  
        </div>
        </>
    )
}
export default Sidebar