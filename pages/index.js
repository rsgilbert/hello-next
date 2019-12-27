import Link from 'next/link'
import Layout from '../components/MyLayout'

const Index = () => (
    <Layout>
        <p>Hello Next.js</p>
        <Link href="/about">
            <a  title="About the Greate Gilbert">About the Great Gilbert</a>
        </Link>
    </Layout>
)
export default Index