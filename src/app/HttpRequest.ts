import axios, {AxiosPromise, AxiosRequestConfig} from 'axios'

// const apiHost = '127.0.0.1:80'
const apiHost = 'https://b66fc602-1a8e-49da-89ae-5f1f38ac2bf7.mock.pstmn.io'

class HttpRequest {
    constructor() {
    }

    get(path: string, data: {}, token?: string): AxiosPromise {
        let url = this.completeUrl(path)
        let queryString = ''
        if (data) {
            let temp = []
            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    let val = data[key]
                    temp.push(`${key}=${val}`)
                }
            }
            queryString = temp.join('&')
            if (queryString) {
                url = `${url}?${queryString}`
            }
        }

        let config = {}
        if (token) {
            config = this.tokenToConfig(token)
        }
        return axios.get(url, config)
    }

    post(path: string, data: {}, config?: AxiosRequestConfig): AxiosPromise {
        let url = this.completeUrl(path)
        return axios.post(url, data, config)
    }

    put(path: string, data: {}, config: AxiosRequestConfig): AxiosPromise {
        let url = this.completeUrl(path)
        return axios.put(url, data, config)
    }

    delete(path: string, config: AxiosRequestConfig): AxiosPromise {
        let url = this.completeUrl(path)
        return axios.delete(url, config)
    }

    private completeUrl(path: string) {
        // get config to distinguish http or https
        return `${apiHost}/${path}`
    }

    private tokenToConfig(token: string): AxiosRequestConfig {
        return {
            headers: {
                Authorization: `token ${token}`,
            },
        }
    }
}

export const request = new HttpRequest()