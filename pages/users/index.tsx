import Layout from '../../components/Layout';
import {useRouter} from 'next/router';
import styles from './Users.module.css';

interface UsersProps {
    dataUsers: Array<any>
}
export default function User(props: UsersProps) {
  const { dataUsers } = props;
  const router = useRouter();
  console.log(dataUsers);
  return (
    <Layout pageTitle='Users Page'>
      {/* this form automaticly returns value */}
      {dataUsers.map((user) => (
        <div className={styles.card} key={user.id} onClick={() => {
          router.push(`/users/${user.id}`)
        }}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </Layout>
  );
}

// namun static props ini tidak cocok untuk data dinamis
// data fetching menggunakan get static props
// di sini akan memanggil API
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users'); // ini asyncronous sehingga harus dikasi await
  const dataUsers = await res.json(); // asyncronous sehingga harus await
  return {
    props: {
      dataUsers,
    },
  };
}
