import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class TestService {
    configUrl = 'http://localhost:4200/test'

    constructor(private http: HttpClient) { }

    getTestData() {
        return this.http.get(this.configUrl);
    }
}