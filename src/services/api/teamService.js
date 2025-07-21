import teamData from "@/services/mockData/team.json";

export const teamService = {
  getAll: async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [...teamData].sort((a, b) => a.order - b.order);
  },

  getById: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return teamData.find(member => member.Id === parseInt(id));
  },

  create: async (memberData) => {
    await new Promise(resolve => setTimeout(resolve, 400));
    const newMember = {
      ...memberData,
      Id: Math.max(...teamData.map(m => m.Id)) + 1,
      order: teamData.length + 1
    };
    teamData.push(newMember);
    return newMember;
  },

  update: async (id, memberData) => {
    await new Promise(resolve => setTimeout(resolve, 400));
    const index = teamData.findIndex(member => member.Id === parseInt(id));
    if (index !== -1) {
      teamData[index] = { ...teamData[index], ...memberData };
      return teamData[index];
    }
    throw new Error("Team member not found");
  },

  delete: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const index = teamData.findIndex(member => member.Id === parseInt(id));
    if (index !== -1) {
      const deletedMember = teamData.splice(index, 1)[0];
      return deletedMember;
    }
    throw new Error("Team member not found");
  }
};