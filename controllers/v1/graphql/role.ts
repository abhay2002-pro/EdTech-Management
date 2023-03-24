import RoleService from "@services/v1/role";

export const getsingleRoleController = (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  console.log(context.headers)
  return RoleService.getSingleRole(args.id);
};

export const createRoleController = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  return await RoleService.createRole(args.name)
};
