import UserModel from '@/resources/models/user.model'
import User from '@/resources/interfaces/user.interface'

class UserService {
    private user = UserModel;

    public async createUser ( userData : User): Promise<User> {
        try {
            const user = this.user.create({ userData });
            return user
        } catch (error) {
            throw new Error('Unable to create user')
        }
    };

    public async getUserByEmail ( email : string): Promise<void> {
        try {
            const user = this.user.findOne({ email: email });
            //return user
        } catch (error) {
            throw new Error('Unable to create user')
        }
    }
}

export default UserService