import {request} from '../HttpRequest'
import {AxiosResponse} from "axios";
import {Thread} from "../../domain/thread/Thread";

type ThreadResponseContent = {
    id: string,
    title: string,
}

type ThreadResponse = {
    data: {
        threads: ThreadResponseContent
    }
}

type ThreadsResponse = {
    data: {
        threads: ThreadResponseContent[]
    }
}

export class ThreadRepository {

    getThreads(): Promise<Thread[]> {
        return new Promise((resolve, reject) => {
            request.get('threads', {})
                .then((r: AxiosResponse<ThreadsResponse>) => {
                    const response = r.data.data
                    console.log(response)
                    const threads = response.threads.map(thread => new Thread(thread.id, thread.title))
                    resolve(threads)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}