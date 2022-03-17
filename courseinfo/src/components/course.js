import Content from "./content";
import Header from "./header";
import Total from "./total";


const Course = (props) => {
    console.log(props)
    return ( 
        <div>
            <Header course={props.course[0].name}/>
            <Content part={props.course[0].parts}/>
            <Total part={props.course[0].parts}/>
            <Header course={props.course[1].name}/>
            <Content part={props.course[1].parts}/>
            <Total part={props.course[1].parts}/>
        </div>
     );
}

export default Course;