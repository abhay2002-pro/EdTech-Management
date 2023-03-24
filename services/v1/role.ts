import Role from "@models/v1/Role";
import ErrorHandler from "@utils/errorHandler";
import { NextFunction, Request, Response } from "express";
import { GraphQLError } from "graphql";
import { UUID } from "crypto";
class RoleService {
  static async createRole(name: string) {
    const id = "0f4b95e1-eb5e-4d52-9dbb-0cfeb158ab5b";
    const scopes = ["hsh-get", "shshs"]
    const role = await Role.create({ id, name, scopes });
    return role;
  }

  static async getRoles() {
    const roles = await Role.findAll({});
    console.log(roles);
    return roles;
  }

  static async getSingleRole(id: UUID) {
    try {
      const role = await Role.findOne({ where: { id: id } });
      if (!role) { 
        throw new Error("Role not found"); 
      }
      console.log(role);
      return role;
    } catch (error: any) {
      throw new GraphQLError(error.message, undefined, undefined, undefined, undefined, undefined, {
        statusCode: (error as any).statusCode || 500,
      });
    }
  }
}

export default RoleService;
