import initiativeData from "@/services/mockData/initiatives.json";

export const initiativeService = {
  getAll: async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [...initiativeData];
  },

  getById: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return initiativeData.find(initiative => initiative.Id === parseInt(id));
  },

  create: async (initiativeData) => {
    await new Promise(resolve => setTimeout(resolve, 400));
    const newInitiative = {
      ...initiativeData,
      Id: Math.max(...initiativeData.map(i => i.Id)) + 1
    };
    initiativeData.push(newInitiative);
    return newInitiative;
  },

  update: async (id, updateData) => {
    await new Promise(resolve => setTimeout(resolve, 400));
    const index = initiativeData.findIndex(initiative => initiative.Id === parseInt(id));
    if (index !== -1) {
      initiativeData[index] = { ...initiativeData[index], ...updateData };
      return initiativeData[index];
    }
    throw new Error("Initiative not found");
  },

  delete: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const index = initiativeData.findIndex(initiative => initiative.Id === parseInt(id));
    if (index !== -1) {
      const deletedInitiative = initiativeData.splice(index, 1)[0];
      return deletedInitiative;
    }
    throw new Error("Initiative not found");
  }
};