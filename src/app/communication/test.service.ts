import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable'

export interface FilesList {
    files: string[]
}

export interface TextFile {
    fileName: string,
    content: string
}

@Injectable()
export class TestService {
    configUrl = 'http://localhost:4200/test'

    constructor(private http: HttpClient) { }

    getFilesList(): Observable<FilesList> {
        return this.http.get(this.configUrl) as Observable<FilesList>
    }

    getFileByName(fileName: string): Observable<TextFile> {
        return this.http.get(`${this.configUrl}/${fileName}`) as Observable<TextFile>
    }
}