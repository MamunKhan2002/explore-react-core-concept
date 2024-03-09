export default function Post({ post }) {
    const { username, email } = post;
    console.log(post);
    return (
        <div className="box">
            <h3>Name: {username}</h3>
            <p>Email: {email}</p>
        </div>
    )
}