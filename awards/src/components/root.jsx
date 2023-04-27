import '../index.css';
import Nav from './nav';
import Cards from './cards';
import CardList from './cardlist';

const Root = () => {
    return ( <>
    <h1> And the award goes to...</h1>
    <form type='submit'>
        <input type="text" name="" id="" placeholder='enter Email' /> <button>submit</button></form>
     <Nav/>
     <CardList/>
    </> );
}
 
export default Root;