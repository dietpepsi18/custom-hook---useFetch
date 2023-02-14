import useFetch from "../hooks/useFetch";
const URL = "https://jsonplaceholder.typicode.com/posts/1";

export default function Post() {
  const { data, error, isLoading } = useFetch(URL);
  if (error) return <h1>Error</h1>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div>
      <div>Title: {data.title}</div>
      <div>Posts {data.body}</div>
    </div>
  );
}
