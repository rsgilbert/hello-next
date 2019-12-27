import Link from 'next/link';
import Layout from '../components/MyLayout';

const PostLink = props => (
  <li>
    <Link href={`/p/[id]`} as={`/p/${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);
export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js" id="0" />
        <PostLink title="Learn Next.js is awesome" id="1" />
        <PostLink title="Deploy apps with Zeit" id="9" />
      </ul>
    </Layout>
  );
}
