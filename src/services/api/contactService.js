let contactSubmissions = [];

export const contactService = {
  getAll: async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [...contactSubmissions].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  },

  getById: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return contactSubmissions.find(submission => submission.Id === parseInt(id));
  },

  create: async (submissionData) => {
    await new Promise(resolve => setTimeout(resolve, 400));
    const newSubmission = {
      ...submissionData,
      Id: contactSubmissions.length > 0 ? Math.max(...contactSubmissions.map(s => s.Id)) + 1 : 1,
      timestamp: new Date().toISOString()
    };
    contactSubmissions.push(newSubmission);
    return newSubmission;
  },

  update: async (id, updateData) => {
    await new Promise(resolve => setTimeout(resolve, 400));
    const index = contactSubmissions.findIndex(submission => submission.Id === parseInt(id));
    if (index !== -1) {
      contactSubmissions[index] = { ...contactSubmissions[index], ...updateData };
      return contactSubmissions[index];
    }
    throw new Error("Contact submission not found");
  },

  delete: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const index = contactSubmissions.findIndex(submission => submission.Id === parseInt(id));
    if (index !== -1) {
      const deletedSubmission = contactSubmissions.splice(index, 1)[0];
      return deletedSubmission;
    }
    throw new Error("Contact submission not found");
  }
};