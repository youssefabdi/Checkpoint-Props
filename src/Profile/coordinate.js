function Coordinate(props){
    return(
        <div>
            <img src={props.img} alt='img' width={200} className="img"/>
            <h3>Contact {props.Contact}</h3>
            <h4>Last Name : {props.LastName}</h4>
            <h4>Name : {props.Name}</h4>
            <h4>Birth Date : {props.BirthDate}</h4>
            <h4>Mobile Number : {props.MobileNumber}</h4>
            <h4>E-mail : {props.Email}</h4>
            <h4>Address : {props.Address}</h4>        
        </div>
    );
}
export default Coordinate;





