import Link from 'next/link'
import Header from '../components/Header'

const Index = () => (
    <div>
        <Header />
        <p>Hello Next.js</p>
        <Link href="/about">
            <a  title="About the Greate Gilbert">About the Great Gilbert</a>
        </Link>
    </div>
)
export default Index