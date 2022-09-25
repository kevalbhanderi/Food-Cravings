import { Users } from "src/entities/user.entity";

/**
 * Users provider
 */
export const usersProviders = [
  {
    provide: 'USER_REPOSITORY',
    useValue: Users,
  },
];
