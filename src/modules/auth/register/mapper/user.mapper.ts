import { generateMD5Hash } from 'src/utils/password.helper';
import * as uuid from 'uuid';
import { RegisterRequestDto } from '../dto/register.request.dto';

export class UserMapper {
  /**
   * map register user info
   * @param user
   * @returns
   */
  buildUser = async (user: RegisterRequestDto, isAdmin: boolean) => {
    return {
      id: uuid.v4(),
      username: user.userName,
      email: user.email,
      password: await generateMD5Hash(user.password),
      isadmin: isAdmin,
    };
  };
}
