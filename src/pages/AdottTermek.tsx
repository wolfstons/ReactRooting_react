import { Link, useParams } from 'react-router';

function AdottTermek() {
    const {id} = useParams();
  return (
    <section>
      <h1>AdottTermek oldal</h1>
      <h2>Ez az adott termék oldala</h2>
        <p>Az adott termék id-je: {id}</p>
        <Link to ="/">Vissza a termékekhez</Link>

    </section>
  )
}

export default AdottTermek