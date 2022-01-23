import Layout from '../components/layout/layout'
import Sidebar from '../components/sidebar/sidebar'
import RichText from '../components/rich-text/rich-text'
import { getPolicies } from '../lib/api'

export async function getStaticProps() {
  const policies = await getPolicies();
  return { props: { policies } };
}

export default function PrivacyPolicy({ policies }) {
  return (
    <section>
      <h2>Privacy Policy</h2>
      {policies.map(policy => (
        <div key={policy.id} className='hero-container'>

          <RichText heading={policy.attributes.Heading} paragraph={policy.attributes.paragraph} />
        </div>
      ))
      }
    </section>
  )
}

PrivacyPolicy.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}
