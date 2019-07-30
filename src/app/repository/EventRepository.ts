import {request} from "../HttpRequest";
import {AxiosResponse} from "axios";
import {EventModel} from "../domain/model/EventModel";

export interface EventResponse {
    id: string,
    title: string,
    title_kana: string,
    start_at: string,
    end_at: string,
    image_url: string,
    category: string,
    place: string,
    address: string,
    entry_limit: number,
    male_entry_limit: number,
    female_entry_limit: number,
    entry_requirement: string,
    rule: string,
    award: string,
    description: string,
    notice: string,
    organizer: string,
    participate: string,
    patron: string,
    cooperation: string,
}

export interface EventStoreRequest {
    title: string,
    title_kana: string,
    summary: string,
    description?: string,
    image_path?: string,
}

export class EventRepository {
    private token: string

    constructor(token: string) {
        this.token = token
    }

    store(params: EventStoreRequest): Promise<EventResponse> {
        return new Promise((resolve, reject) => {
            request.post('events', params, {
                headers: {
                    token: this.token,
                },
            }).then((r: AxiosResponse<EventResponse>) => {
                const response = r.data
                console.log(response)
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    }

    fetch(eventId: string): Promise<EventModel> {
        return new Promise((resolve, reject) => {
            request.get(`events/${eventId}`, {}, this.token)
                .then((r: AxiosResponse<EventResponse>) => {
                    const response = r.data
                    console.log(response)
                    resolve(new EventModel(response))
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
}