import { Link } from 'react-router-dom';

interface BlogProps {
  image: string;
  title: string;
  description: string;
}

const blogs: BlogProps[] = [
  {
    image: 'blog.png',
    title: 'Top Social Media Trends to Watch in 2024',
    description: 'Top Social Media Trends to Watch in 2024',
  },
  {
    image: 'blog.png',
    title: 'Client Story: Unshelf Design',
    description: 'Client Story: Unshelf Design',
  },
  {
    image: 'blog.png',
    title: 'Logos and Beyond – Personifying Your Brand',
    description: 'Logos and Beyond – Personifying Your Brand',
  },
];

const BlogSection = () => {
  return (
    <div className="container mx-auto">
      <div className="justify-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-8">
          {blogs.map((blog, index) => (
            <div
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              key={index}
            >
              <Link to="/blog">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-l font-medium mb-2 text-center">
                    {blog.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
