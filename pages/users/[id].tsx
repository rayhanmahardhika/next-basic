import Layout from '../../components/Layout';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}
interface UserDetailProps {
  user: User;
}

export default function UserDetail(props: UserDetailProps) {
  const { user } = props;
  return (
    <Layout pageTitle="Detail">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </Layout>
  );
}

// namun static paths ini tidak cocok untuk data dinamis
// ini akan mengenerate halaman sejumlah user yang ada, ini otomatis untuk SSG
export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users'); // ini asyncronous sehingga harus dikasi await
  const dataUsers = await res.json(); // asyncronous sehingga harus await
  const paths = dataUsers.map((user: User) => ({
    params: {
      id: `${user.id}`,
    },
  }));

  return {
    paths,
    fallback: false, // fallback false akan melarikan path (URL) kosong ke 404 not found
  };
}

interface GetStaticProps {
  params: {
    id: string;
  }
}
// namun static props ini tidak cocok untuk data dinamis
// untuk memberikan data pada setiap ID user
export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params; // ini gausah get ID karena usah di Desctructure "{id}"
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`); // ini asyncronous sehingga harus dikasi await
  const user = await res.json(); // asyncronous sehingga harus await

  return {
    props: {
      user,
    },
  };
}
