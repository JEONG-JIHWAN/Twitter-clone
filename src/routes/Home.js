import React, {useState} from "react";

const Home = () => {
    const [jweet, setJweet] = useState("")
    const onSubmit = (event) => {
        event.preventDefault();
    };
    const onChange = (event) => {
        const {target:{value}} = event;
        setJweet(value);
    }
    return (
        <form>
            <input value={jweet} onChange={onChange} type="text" placeholer="What's on your mind?" maxLength={120}/>
            <input type="submit" value="Jweet"/>
        </form>
    )

}
    
export default Home;