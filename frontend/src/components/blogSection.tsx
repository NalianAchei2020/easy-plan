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
        <h2>Small Business Blogs and Client Stories</h2>
      </div>
      <div className="flex flex-row space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
        {blogs.map((blog, index) => (
          <>
            <div
              className="flex flex-col md:flex-col bg-white shadow-lg rounded-lg p-4 mb-4 "
              key={index}
            >
              <img src={blog.image} alt={blog.title} className="w-full " />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
              </div>
            </div>
            <br />
          </>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
