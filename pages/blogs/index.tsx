import Layout from '../../components/Layout';
import styles from './Blogs.module.css';

interface BlogArr{
    id: number;
    userId: number;
    title: string;
    body: string;
}
interface BlogProps {
    dataBlogs: BlogArr[];
}
export default function Blog(props: BlogProps) {
  const { dataBlogs } = props;
  return (
    <Layout pageTitle="Blog Page">
      {dataBlogs.map((blog) => (
        <div key={blog.id} className={styles.card}>
          <h3>{blog.title}</h3>
          <p>{blog.body}</p>
        </div>
      ))}
    </Layout>
  );
}
// get server side props ini sangat cocok untuk data yang dinamis
export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts'); // ini asyncronous sehingga harus dikasi await
  const dataBlogs = await res.json(); // asyncronous sehingga harus await
  return {
    props: {
      dataBlogs,
    },
  };
}
