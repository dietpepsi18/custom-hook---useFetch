import useFetch from "../hooks/useFetch";
const URL = "https://jsonplaceholder.typicode.com/posts";

export default function Posts() {
  const { data, error, isLoading } = useFetch(URL);
  if (error) return <h1>Error</h1>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div>
      {data.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })}
    </div>
  );
}
