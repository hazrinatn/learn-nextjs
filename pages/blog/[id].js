export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    const paths = posts.map(post => {
        return {
            params: { id: post.id.toString() }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const posts = await res.json();

    return {
        props: { posts }
    }
}   

const Details = ({ posts }) => {
    return ( 
        <div>
            <h1>{ posts.title }</h1>
            <p>{ posts.body }</p>
        </div>
     );
}
 
export default Details;