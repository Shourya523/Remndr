function MainBody(props) {
    return(
        <>
        <div className="main-body">
            <h2>Good Morning {props.name} </h2>
            <div className="main-body-input">
            <textarea type="text" placeholder="Enter your Task"/>
        </div>
        </div>
        </>
    )
}
export default MainBody