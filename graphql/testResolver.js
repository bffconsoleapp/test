const premiumAdjustments = [
  { id: '1', amount: 200.0, reason: 'Promotion' },
  { id: '2', amount: 150.0, reason: 'Loyalty Discount' }
];

const resolvers = {
  Query: {
    getPremiumAdjustment: (_, { id }) => {
      return premiumAdjustments.find(adj => adj.id === id);
    },
  },
  Mutation: {
    editPremiumAdjustment: (_, { input }) => {
      const { id, amount, reason } = input;
      const adjustmentIndex = premiumAdjustments.findIndex(adj => adj.id === id);

      if (adjustmentIndex === -1) {
        throw new Error('Premium adjustment not found');
      }

      premiumAdjustments[adjustmentIndex] = { id, amount, reason };
      return premiumAdjustments[adjustmentIndex];
    },
  },
};

export default resolvers;