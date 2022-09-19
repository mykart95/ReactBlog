import { Link } from "react-router-dom";
const BlogList = ({blogs, title, handleDelete}) => {
    // const blogs=props.blogs;
    // const title=props.title;
    return ( <div className="bloglist">
        <h2>{title}</h2>
        {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blog/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    </Link>
                </div>
            ))}
    </div> );
}
 
export default BlogList;