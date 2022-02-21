import './Card.css'

const Card = (props) => {
    const {user} = props;
    const {id,name,email} = props.user;
    const mail = `mailto:${email}`


    return(
        <>

    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'  id={id}>
        <img src={`https://robohash.org/${id}`}></img>
        <h2 id={id}>{name}</h2>
        <h4 id={id}>{email}</h4>
    </div>
        </>
    )
}


export default Card