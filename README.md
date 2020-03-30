# ssr-file-manager
express + angular universal app for managing files on server

This simple Angular Universal app is a POC. 
Bussiness issue: file (for example, .txt file) is stored somwhere on the server. 
User should be able to see the content of the file, but due to security issues, it can't be downloaded.
Angular Universal app consists of express.js and Angular layers. 
Despite the fact that server side rendering is not necessary in this situation, it is a big advantage
that both backend and frontend can be easily initiated.
