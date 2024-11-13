import Letter from './letter';
import classes from './postgrid.module.css';

export default function PostGrid({posts}){
    return <>
        <div className = {classes.container}>
        {posts.map(post => (<Letter key = {post._id} slug = {post._id} date = {post.date}/>))}
        </div>
    </>
}