import Cards from "./cards";

function CardList() {

    const amount =  4 
    
    return ( <>
    <ul style={{
        display:'flex',
        flexWrap:'wrap',
        height:'100px',
        justifyContent:'center'
    }}>

        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
    </ul>
    </> );
}

export default CardList;