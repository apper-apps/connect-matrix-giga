import blogData from "@/services/mockData/blogs.json";

export const blogService = {
  getAll: async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [...blogData].sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
  },

  getById: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return blogData.find(post => post.Id === parseInt(id));
  },

  getBySlug: async (slug) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return blogData.find(post => post.slug === slug);
  },

  getByCategory: async (category) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return blogData.filter(post => post.category === category);
  },

  create: async (postData) => {
    await new Promise(resolve => setTimeout(resolve, 400));
    const newPost = {
      ...postData,
      Id: Math.max(...blogData.map(p => p.Id)) + 1,
      publishDate: new Date().toISOString()
    };
    blogData.push(newPost);
    return newPost;
  },

  update: async (id, postData) => {
    await new Promise(resolve => setTimeout(resolve, 400));
    const index = blogData.findIndex(post => post.Id === parseInt(id));
    if (index !== -1) {
      blogData[index] = { ...blogData[index], ...postData };
      return blogData[index];
    }
    throw new Error("Post not found");
  },

  delete: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const index = blogData.findIndex(post => post.Id === parseInt(id));
    if (index !== -1) {
      const deletedPost = blogData.splice(index, 1)[0];
      return deletedPost;
    }
    throw new Error("Post not found");
  }
};