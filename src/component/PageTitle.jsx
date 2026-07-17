import {useState , useEffect} from 'react'
const PageTitle = () => {
    const [title, setTitle] = useState(0);
    useEffect(() => {
        document.title = `Counter: ${title}`;
    }, [title]);

    return (
        <button onClick={()=>setTitle(title+1)} >+</button>
    )
}
export default PageTitle;