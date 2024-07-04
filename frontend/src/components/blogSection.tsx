import { Link } from 'react-router-dom';

interface BlogProps {
  image: string;
  title: string;
  description: string;
}

const blogs: BlogProps[] = [
  {
    image: 'blog.png',
    title: 'Easy-to-Use Interface',
    description: 'Top Social Media Trends to Watch in 2024',
  },
  {
    image: 'blog.png',
    title: 'Customizable Templates',
    description: 'Client Story: Unshelf Design',
  },
  {
    image: 'blog.png',
    title: 'Financial Analysis',
    description: 'Logos and Beyond – Personifying Your Brand',
  },
];

const BlogSection = () => {
  return (
    <div className="container mx-auto">
      <div>
        <h2 className="font-bold text-center mt-12 text-xl">
          Small Business Blogs and Client Stories
        </h2>
      </div>
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
      <div className="text-center my-8">
        <Link to="/blog">
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-black">
            View all blogs
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogSection;
