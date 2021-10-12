import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  notices: any[] = [
    {
      "title": "Douglas  Pace",
      "source": "source 1",
      "content": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "date": "09/01/2021",
      "link": "#",
    },
    {
      "title": "Mcleod  Mueller",
      "source": "source 2",
      "content": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "date": "09/02/2021",
      "link": "#",
    },
    {
      "title": "Day  Meyers",
      "source": "source 3",
      "content": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "date": "09/03/2021",
      "link": "#",
    },
    {
      "title": "Aguirre  Ellis",
      "source": "source 4",
      "content": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "date": "09/04/2021",
      "link": "#",
    },
    {
      "title": "Cook  Tyson",
      "source": "source 5",
      "content": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "date": "09/05/2021",
      "link": "#",
    },
    {
      "title": "SomeOne",
      "source": "source 6",
      "content": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "date": "09/06/2021",
      "link": "#",
    }
  ];

  constructor() {}

  ngOnInit(): void {
  }

}
