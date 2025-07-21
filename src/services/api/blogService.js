import { toast } from 'react-toastify';

export const blogService = {
  getAll: async () => {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "Tags" } },
          { field: { Name: "Owner" } },
          { field: { Name: "title" } },
          { field: { Name: "content" } },
          { field: { Name: "excerpt" } },
          { field: { Name: "author" } },
          { field: { Name: "category" } },
          { field: { Name: "publish_date" } },
          { field: { Name: "image_url" } },
          { field: { Name: "slug" } }
        ],
        orderBy: [
          { fieldName: "publish_date", sorttype: "DESC" }
        ]
      };

      const response = await apperClient.fetchRecords("blog", params);
      
      if (!response.success) {
        console.error(response.message);
        toast.error(response.message);
        return [];
      }

      // Map database fields to component expectations
      return (response.data || []).map(post => ({
        ...post,
        publishDate: post.publish_date,
        imageUrl: post.image_url
      }));
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error fetching blog posts:", error?.response?.data?.message);
      } else {
        console.error(error.message);
      }
      return [];
    }
  },

  getById: async (id) => {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "Tags" } },
          { field: { Name: "Owner" } },
          { field: { Name: "title" } },
          { field: { Name: "content" } },
          { field: { Name: "excerpt" } },
          { field: { Name: "author" } },
          { field: { Name: "category" } },
          { field: { Name: "publish_date" } },
          { field: { Name: "image_url" } },
          { field: { Name: "slug" } }
        ]
      };

      const response = await apperClient.getRecordById("blog", parseInt(id), params);
      
      if (!response || !response.data) {
        return null;
      }

      // Map database fields to component expectations
      const post = response.data;
      return {
        ...post,
        publishDate: post.publish_date,
        imageUrl: post.image_url
      };
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error(`Error fetching blog post with ID ${id}:`, error?.response?.data?.message);
      } else {
        console.error(error.message);
      }
      return null;
    }
  },

  getBySlug: async (slug) => {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "Tags" } },
          { field: { Name: "Owner" } },
          { field: { Name: "title" } },
          { field: { Name: "content" } },
          { field: { Name: "excerpt" } },
          { field: { Name: "author" } },
          { field: { Name: "category" } },
          { field: { Name: "publish_date" } },
          { field: { Name: "image_url" } },
          { field: { Name: "slug" } }
        ],
        where: [
          {
            FieldName: "slug",
            Operator: "EqualTo",
            Values: [slug]
          }
        ]
      };

      const response = await apperClient.fetchRecords("blog", params);
      
      if (!response.success || !response.data || response.data.length === 0) {
        return null;
      }

      // Map database fields to component expectations
      const post = response.data[0];
      return {
        ...post,
        publishDate: post.publish_date,
        imageUrl: post.image_url
      };
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error(`Error fetching blog post with slug ${slug}:`, error?.response?.data?.message);
      } else {
        console.error(error.message);
      }
      return null;
    }
  },

  getByCategory: async (category) => {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "Tags" } },
          { field: { Name: "Owner" } },
          { field: { Name: "title" } },
          { field: { Name: "content" } },
          { field: { Name: "excerpt" } },
          { field: { Name: "author" } },
          { field: { Name: "category" } },
          { field: { Name: "publish_date" } },
          { field: { Name: "image_url" } },
          { field: { Name: "slug" } }
        ],
        where: [
          {
            FieldName: "category",
            Operator: "EqualTo",
            Values: [category]
          }
        ],
        orderBy: [
          { fieldName: "publish_date", sorttype: "DESC" }
        ]
      };

      const response = await apperClient.fetchRecords("blog", params);
      
      if (!response.success) {
        console.error(response.message);
        toast.error(response.message);
        return [];
      }

      // Map database fields to component expectations
      return (response.data || []).map(post => ({
        ...post,
        publishDate: post.publish_date,
        imageUrl: post.image_url
      }));
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error(`Error fetching blog posts by category ${category}:`, error?.response?.data?.message);
      } else {
        console.error(error.message);
      }
      return [];
    }
  },

  create: async (postData) => {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      // Only include Updateable fields, map to database field names
      const updateableData = {
        Name: postData.Name,
        Tags: postData.Tags,
        Owner: parseInt(postData.Owner),
        title: postData.title,
        content: postData.content,
        excerpt: postData.excerpt,
        author: postData.author,
        category: postData.category,
        publish_date: postData.publish_date || new Date().toISOString(),
        image_url: postData.image_url,
        slug: postData.slug
      };

      const params = {
        records: [updateableData]
      };

      const response = await apperClient.createRecord("blog", params);
      
      if (!response.success) {
        console.error(response.message);
        toast.error(response.message);
        return null;
      }

      if (response.results) {
        const successfulRecords = response.results.filter(result => result.success);
        const failedRecords = response.results.filter(result => !result.success);
        
        if (failedRecords.length > 0) {
          console.error(`Failed to create blog posts ${failedRecords.length} records:${JSON.stringify(failedRecords)}`);
          
          failedRecords.forEach(record => {
            record.errors?.forEach(error => {
              toast.error(`${error.fieldLabel}: ${error.message}`);
            });
            if (record.message) toast.error(record.message);
          });
        }
        
        if (successfulRecords.length > 0) {
          const post = successfulRecords[0].data;
          return {
            ...post,
            publishDate: post.publish_date,
            imageUrl: post.image_url
          };
        }
      }
      return null;
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error creating blog post:", error?.response?.data?.message);
      } else {
        console.error(error.message);
      }
      return null;
    }
  },

  update: async (id, updateData) => {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      // Only include Updateable fields plus Id, map to database field names
      const updateableData = {
        Id: parseInt(id),
        ...(updateData.Name && { Name: updateData.Name }),
        ...(updateData.Tags && { Tags: updateData.Tags }),
        ...(updateData.Owner && { Owner: parseInt(updateData.Owner) }),
        ...(updateData.title && { title: updateData.title }),
        ...(updateData.content && { content: updateData.content }),
        ...(updateData.excerpt && { excerpt: updateData.excerpt }),
        ...(updateData.author && { author: updateData.author }),
        ...(updateData.category && { category: updateData.category }),
        ...(updateData.publish_date && { publish_date: updateData.publish_date }),
        ...(updateData.image_url && { image_url: updateData.image_url }),
        ...(updateData.slug && { slug: updateData.slug })
      };

      const params = {
        records: [updateableData]
      };

      const response = await apperClient.updateRecord("blog", params);
      
      if (!response.success) {
        console.error(response.message);
        toast.error(response.message);
        return null;
      }

      if (response.results) {
        const successfulUpdates = response.results.filter(result => result.success);
        const failedUpdates = response.results.filter(result => !result.success);
        
        if (failedUpdates.length > 0) {
          console.error(`Failed to update blog posts ${failedUpdates.length} records:${JSON.stringify(failedUpdates)}`);
          
          failedUpdates.forEach(record => {
            record.errors?.forEach(error => {
              toast.error(`${error.fieldLabel}: ${error.message}`);
            });
            if (record.message) toast.error(record.message);
          });
        }
        
        if (successfulUpdates.length > 0) {
          const post = successfulUpdates[0].data;
          return {
            ...post,
            publishDate: post.publish_date,
            imageUrl: post.image_url
          };
        }
      }
      return null;
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error updating blog post:", error?.response?.data?.message);
      } else {
        console.error(error.message);
      }
      return null;
    }
  },

  delete: async (id) => {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const params = {
        RecordIds: [parseInt(id)]
      };

      const response = await apperClient.deleteRecord("blog", params);
      
      if (!response.success) {
        console.error(response.message);
        toast.error(response.message);
        return false;
      }

      if (response.results) {
        const successfulDeletions = response.results.filter(result => result.success);
        const failedDeletions = response.results.filter(result => !result.success);
        
        if (failedDeletions.length > 0) {
          console.error(`Failed to delete blog posts ${failedDeletions.length} records:${JSON.stringify(failedDeletions)}`);
          
          failedDeletions.forEach(record => {
            if (record.message) toast.error(record.message);
          });
        }
        
        return successfulDeletions.length > 0;
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error deleting blog post:", error?.response?.data?.message);
      } else {
        console.error(error.message);
      }
      return false;
    }
  }
};