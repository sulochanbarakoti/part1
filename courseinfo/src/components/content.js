const Content = (props) => {
    console.log(props)
    return ( 
        <div>
            <ul>
                {props.part.map(item =>
                    <li key={item.id}> {item.name} {item.exercises} </li>
                )}
            </ul>
        </div>
     );
}

export default Content;