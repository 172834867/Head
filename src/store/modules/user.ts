import {action} from 'mobx'
import {login} from '../../service/index'
import {LoginForm} from '../../types/index'
class User{
    // @observable isLogin: boolean = false;
    @action async login(params:LoginForm){
        const result:any = await login(params)
        console.log('....result',result)
        return result.code;
    }
}
export default User;