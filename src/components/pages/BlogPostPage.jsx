import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { format } from "date-fns";
import Button from "@/components/atoms/Button";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import ApperIcon from "@/components/ApperIcon";
import { blogService } from "@/services/api/blogService";

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadPost = async () => {
    try {
      setError("");
      setLoading(true);
      const allPosts = await blogService.getAll();
      const currentPost = allPosts.find(p => p.slug === slug);
      
      if (!currentPost) {
        setError("Blog post not found.");
        return;
      }
      
      setPost(currentPost);
      
      // Get related posts from same category
      const related = allPosts
        .filter(p => p.category === currentPost.category && p.Id !== currentPost.Id)
        .slice(0, 3);
      setRelatedPosts(related);
    } catch (err) {
      setError("Failed to load blog post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPost();
  }, [slug]);

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadPost} />;
  if (!post) return <Error message="Blog post not found." />;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4"
          >
            <ApperIcon name="ArrowLeft" size={20} className="mr-2" />
            Back to Blog
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Featured Image */}
{post.image_url && (
              <div className="aspect-w-16 aspect-h-9 mb-8">
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
            )}

            {/* Meta */}
            <div className="flex items-center space-x-4 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-700">
                {post.category}
</span>
              <time className="text-gray-500">
                {format(new Date(post.publish_date), "MMMM dd, yyyy")}
              </time>
              <span className="text-gray-500">By {post.author}</span>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="text-xl text-gray-600 mb-8 leading-relaxed">
                {post.excerpt}
              </div>
              
              <div 
                className="text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
              />
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  <ApperIcon name="Facebook" size={16} className="mr-2" />
                  Facebook
                </Button>
                <Button variant="outline" size="sm">
                  <ApperIcon name="Twitter" size={16} className="mr-2" />
                  Twitter
                </Button>
                <Button variant="outline" size="sm">
                  <ApperIcon name="Linkedin" size={16} className="mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.Id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={`/blog/${relatedPost.slug}`} className="block">
                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden group">
<div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-gray-100 to-gray-200">
                        {relatedPost.image_url ? (
                          <img
                            src={relatedPost.image_url}
                            alt={relatedPost.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                            <span className="text-primary-600 text-lg font-medium">IGD</span>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPostPage;