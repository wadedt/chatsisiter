import {apidomain} from '@/base/config'
import axios from 'axios'

export function register(mobile,pwd,vcode){
    const url = apidomain + '/Home/index/register'
    return axios.post(url, {'mobile':mobile,'pwd':pwd,'vcode':vcode}).then((res) => {
            return Promise.resolve(res.data)
        })
} 

export function loginAction(mobile,pwd){
    const url = apidomain + '/Home/index/login'
    return axios.post(url, {'mobile':mobile,'pwd':pwd}).then((res) => {
        return Promise.resolve(res.data)
    })
}