import styles from '../../styles/People.module.css';
import Link from 'next/link';
//to fetch data 
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {people: data}
    }
}

const People = ({ people }) => {
    return ( 
        <div>
            <h1>All people</h1>
            {people.map(human => (
                <Link href={'/people/' + human.id} key={human.id}>
                    <a className={styles.single}>
                        <h3>{human.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
     );
}
 
export default People;