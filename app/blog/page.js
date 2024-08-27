import Link from 'next/link';
import React from 'react';

function About() {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: "Blog 1 Description"
    },
    {
      id: 2,
      title: "Blog 2",
      description: "Blog 2 Description"
    }
  ];

  return (
    <main className='mt-10'>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id} className='mb-5'>
           <Link href={`/blog/${blog.id}`}> {blog.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default About;
