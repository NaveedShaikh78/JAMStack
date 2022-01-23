import Layout from '../components/layout/layout'
import Sidebar from '../components/sidebar/sidebar'
import ContactUs from '../components/contact/contact'

export default function Contact() {
  return (
    <section>
      <h2>Contact us</h2>
      <ContactUs />
    </section>
  )
}

Contact.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}
