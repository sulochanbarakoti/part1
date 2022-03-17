const Total = (props) => {
    // console.log(props)
    var total = []
    total = props.part.map(item => item.exercises)
    const sum = total.reduce((a,b) => a+b,0)

    return ( 
        <div>
            <p>
                Number of exercises {sum}
            </p>
        </div>
     );
}

export default Total;