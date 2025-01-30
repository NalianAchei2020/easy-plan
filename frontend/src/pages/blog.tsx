import BlogSearchSection from '../components/blogSearch';
import BlogSection from '../components/blogSection';

const Blog = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen py-12">
      <div className="flex flex-col justify-center items-center mt-8 lg:px-16 sm:px-8">
        <h1 className="text-[1.5rem] text-[#073DFA]">LEARN FROM OUR BLOG</h1>
        <BlogSearchSection />
      </div>
      <div>
        <BlogSection />
      </div>
    </div>
  );
};

export default Blog;
