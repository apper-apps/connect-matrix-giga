import { toast } from 'react-toastify';

export const teamService = {
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
          { field: { Name: "role" } },
          { field: { Name: "bio" } },
          { field: { Name: "image_url" } },
          { field: { Name: "order" } }
        ],
        orderBy: [
          { fieldName: "order", sorttype: "ASC" }
        ]
      };

      const response = await apperClient.fetchRecords("team_member", params);
      
      if (!response.success) {
        console.error(response.message);
        toast.error(response.message);
        return [];
      }

      // Map database fields to component expectations
      return (response.data || []).map(member => ({
        ...member,
        name: member.Name,
        imageUrl: member.image_url
      }));
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error fetching team members:", error?.response?.data?.message);
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
          { field: { Name: "role" } },
          { field: { Name: "bio" } },
          { field: { Name: "image_url" } },
          { field: { Name: "order" } }
        ]
      };

      const response = await apperClient.getRecordById("team_member", parseInt(id), params);
      
      if (!response || !response.data) {
        return null;
      }

      // Map database fields to component expectations
      const member = response.data;
      return {
        ...member,
        name: member.Name,
        imageUrl: member.image_url
      };
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error(`Error fetching team member with ID ${id}:`, error?.response?.data?.message);
      } else {
        console.error(error.message);
      }
      return null;
    }
  },

  create: async (memberData) => {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      // Only include Updateable fields, map to database field names
      const updateableData = {
        Name: memberData.Name || memberData.name,
        Tags: memberData.Tags,
        Owner: parseInt(memberData.Owner),
        role: memberData.role,
        bio: memberData.bio,
        image_url: memberData.image_url || memberData.imageUrl,
        order: memberData.order || 999
      };

      const params = {
        records: [updateableData]
      };

      const response = await apperClient.createRecord("team_member", params);
      
      if (!response.success) {
        console.error(response.message);
        toast.error(response.message);
        return null;
      }

      if (response.results) {
        const successfulRecords = response.results.filter(result => result.success);
        const failedRecords = response.results.filter(result => !result.success);
        
        if (failedRecords.length > 0) {
          console.error(`Failed to create team members ${failedRecords.length} records:${JSON.stringify(failedRecords)}`);
          
          failedRecords.forEach(record => {
            record.errors?.forEach(error => {
              toast.error(`${error.fieldLabel}: ${error.message}`);
            });
            if (record.message) toast.error(record.message);
          });
        }
        
        if (successfulRecords.length > 0) {
          const member = successfulRecords[0].data;
          return {
            ...member,
            name: member.Name,
            imageUrl: member.image_url
          };
        }
      }
      return null;
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error creating team member:", error?.response?.data?.message);
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
        ...(updateData.name && { Name: updateData.name }),
        ...(updateData.Tags && { Tags: updateData.Tags }),
        ...(updateData.Owner && { Owner: parseInt(updateData.Owner) }),
        ...(updateData.role && { role: updateData.role }),
        ...(updateData.bio && { bio: updateData.bio }),
        ...(updateData.image_url && { image_url: updateData.image_url }),
        ...(updateData.imageUrl && { image_url: updateData.imageUrl }),
        ...(updateData.order !== undefined && { order: updateData.order })
      };

      const params = {
        records: [updateableData]
      };

      const response = await apperClient.updateRecord("team_member", params);
      
      if (!response.success) {
        console.error(response.message);
        toast.error(response.message);
        return null;
      }

      if (response.results) {
        const successfulUpdates = response.results.filter(result => result.success);
        const failedUpdates = response.results.filter(result => !result.success);
        
        if (failedUpdates.length > 0) {
          console.error(`Failed to update team members ${failedUpdates.length} records:${JSON.stringify(failedUpdates)}`);
          
          failedUpdates.forEach(record => {
            record.errors?.forEach(error => {
              toast.error(`${error.fieldLabel}: ${error.message}`);
            });
            if (record.message) toast.error(record.message);
          });
        }
        
        if (successfulUpdates.length > 0) {
          const member = successfulUpdates[0].data;
          return {
            ...member,
            name: member.Name,
            imageUrl: member.image_url
          };
        }
      }
      return null;
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error updating team member:", error?.response?.data?.message);
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

      const response = await apperClient.deleteRecord("team_member", params);
      
      if (!response.success) {
        console.error(response.message);
        toast.error(response.message);
        return false;
      }

      if (response.results) {
        const successfulDeletions = response.results.filter(result => result.success);
        const failedDeletions = response.results.filter(result => !result.success);
        
        if (failedDeletions.length > 0) {
          console.error(`Failed to delete team members ${failedDeletions.length} records:${JSON.stringify(failedDeletions)}`);
          
          failedDeletions.forEach(record => {
            if (record.message) toast.error(record.message);
          });
        }
        
        return successfulDeletions.length > 0;
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error deleting team member:", error?.response?.data?.message);
      } else {
        console.error(error.message);
      }
      return false;
    }
  }
};