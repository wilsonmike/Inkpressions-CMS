import { Component, OnInit } from '@angular/core';
import { Inkpressions } from '../inkpressions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-the-dirt-label',
  templateUrl: './the-dirt-label.component.html',
  styleUrls: ['./the-dirt-label.component.css']
})
export class TheDirtLabelComponent implements OnInit {
  ink: any = [];

  constructor(private service: Inkpressions, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const getDirtLabel = () => {
      this.service.getDirtLabel().subscribe((response: any) => {
        this.ink = response;
        console.log(this.ink);
      });
    };
    getDirtLabel();
  }
}
