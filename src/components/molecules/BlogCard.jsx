import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import Card from "@/components/atoms/Card";
import { cn } from "@/utils/cn";

const BlogCard = ({ post, className }) => {
  return (
    <Card hover className={cn("overflow-hidden group", className)}>
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-gray-100 to-gray-200">
          {post.imageUrl ? (
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
              <span className="text-primary-600 text-lg font-medium">IGD</span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-center space-x-4 mb-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700">
              {post.category}
            </span>
            <time className="text-sm text-gray-500">
              {format(new Date(post.publishDate), "MMM dd, yyyy")}
            </time>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">By {post.author}</span>
            <span className="text-primary-600 font-medium text-sm group-hover:text-primary-700 transition-colors duration-200">
              Read more →
            </span>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default BlogCard;