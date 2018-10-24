import { Component }  from "@angular/core";

import { HttpClient } from '@angular/common/http';

@Component({
    selector    : "app-root",
    templateUrl : "./app.component.html",
    styleUrls   : ["./app.component.css"]
})

export class AppComponent {
    feed = {};
    link = "";

    constructor(private http: HttpClient) {
    }

    onSubmit() {
        this.link = this.link.trim();

        if (this.link.indexOf("http") === 0) {
            this.http.get("https://api.rss2json.com/v1/api.json?rss_url=" + this.link).subscribe((data: any) => {
                if (data.status !== "ok")
                    throw new Error("Error");

                this.feed = data;

                console.log(this.feed);
            });
        }
    }

    open(link) {
        window.open(link, "_blank");
    }
}
