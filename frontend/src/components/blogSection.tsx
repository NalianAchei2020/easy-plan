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
    <div>
      <div>
        <h2 className="font-bold text-center mt-12 text-xl">
          Small Business Blogs and Client Stories
        </h2>
      </div>
      <Link to="/blog">
        <div className="flex flex-row space-y-4 md:space-y-0 md:space-x-4 md:flex-row px-16 py-4">
          {blogs.map((blog, index) => (
            <>
              <div
                className="flex flex-col md:flex-col bg-white shadow-lg rounded-lg p-4 mb-4 w-1/3"
                key={index}
              >
                <img src={blog.image} alt={blog.title} className="w-full " />
                <div className="p-4">
                  <h3 className="text-l font-medium mb-2 text-center">
                    {blog.title}
                  </h3>
                </div>
              </div>

              <br />
            </>
          ))}
        </div>
      </Link>
      <div className="text-center my-8 ">
        <button className="bg-blue-500 text-white px-6 py-2 rounded">
          View all blog
        </button>
      </div>
    </div>
  );
};

export default BlogSection;
