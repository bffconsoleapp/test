import { gql } from 'apollo-server';

const typeDefs = `
  type Query {
    getPremiumAdjustment(id: ID!): PremiumAdjustment
  }

  type Mutation {
    editPremiumAdjustment(input: EditPremiumAdjustmentInput!): PremiumAdjustment
  }

  type PremiumAdjustment {
    id: ID!
    amount: Float
    reason: String
  }

  input EditPremiumAdjustmentInput {
    id: ID!
    amount: Float
    reason: String
  }
`;

export default typeDefs;