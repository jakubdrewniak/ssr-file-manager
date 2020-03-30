import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable'

interface FilesList {
    files: string[]
}

@Injectable()
export class TestService {
    configUrl = 'http://localhost:4200/test'

    constructor(private http: HttpClient) { }

    getTestData(): Observable<FilesList> {
        return this.http.get(this.configUrl) as Observable<FilesList>
    }
}