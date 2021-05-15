import Head from 'next/head';

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const paths = data.map(human => {
        return {
            params:  {id: human.id.toString()}
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async context => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: {human:data}
    }
}

const Details = ({human}) => {
    return ( 
        <>
        <Head>
            <title>People List | {human.name}</title>
            <meta name="keywords" content="people" />
        </Head>
        <div>
            <h1>{human.name}</h1>
            <p>{human.email}</p>
            <p>{human.website}</p>
            <p>{human.address.city}</p>
        </div>
        </>
     );
}
 
export default Details;