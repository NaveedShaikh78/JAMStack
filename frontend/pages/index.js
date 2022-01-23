import Layout from '../components/layout/layout'
import Sidebar from '../components/sidebar/sidebar'
import Hero from '../components/hero/hero';
import { getHeroes, getServerURL } from '../lib/api';

export async function getStaticProps() {
  const heroes = await getHeroes();
  return { props: { heroes } };
}

export default function Index({ heroes }) {
  return (
    <section >
      <h2>Home</h2>
      <div className='container'>
        {
          heroes.map(hero => (
            <div key={hero.id} className='hero-container'>
              <Hero hero={hero}></Hero>
            </div>
          ))}
      </div>
    </section>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}
