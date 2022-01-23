const Fav = (props) => {
    console.log(props.animals);
    
  return(
    <div>
    {props.animals.map((item,i) => {
            return <li> {item}</li>
          })}
    </div>

  )
};
export default Fav;