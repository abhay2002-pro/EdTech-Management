import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from "graphql";
import { createRoleController, getsingleRoleController } from "@controllers/v1/graphql/role";


const RoleType = new GraphQLObjectType({
  name: "Role",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    scopes: { type: new GraphQLList(GraphQLString) },
  },
});

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: {
      singleRole: {
        type: RoleType,
        args: {
          id: { type: GraphQLID },
        },
        resolve: getsingleRoleController,
      },
    },
  }),
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: {
      createRole: {
        type: RoleType,
        args: {
          name: { type: GraphQLString },
          scopes: { type: new GraphQLList(GraphQLString) },
        },
        resolve: createRoleController,
      },
    },
  }),
});
