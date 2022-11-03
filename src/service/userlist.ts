import axios from "axios";
import { GetUserListRes } from '@/service/userlistts'
// json-server --watch modou.json --port 5000



// 获取用户列表
export async function getUserList() {
    return axios.get('http://localhost:5000/users')
}