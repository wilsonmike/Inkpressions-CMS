import { Component, OnInit } from '@angular/core';
import { Inkpressions } from '../inkpressions.service';
import { ActivatedRoute } from '@angular/router';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-the-dirt-label',
  templateUrl: './the-dirt-label.component.html',
  styleUrls: ['./the-dirt-label.component.css']
})
export class TheDirtLabelComponent implements OnInit {
  ink: any = [];
  dataNli: any = [];
  shippingTotal: any = '';
  headElements = ['Order Number', 'Order ID', 'Order Item ID', 'Line Item Quantity', 'SKU', 'Description', 'Ship Date', 'ID', 'Store' , 'Variant SKU', 'ShipStation Item Title', 'Len', 'Type', 'Design File Name', 'Brand', 'Style', 'Description Item', 'Weight Oz', 'Color', 'Size', 'Vinylcolor1', 'Vinylcolor2', 'Price', 'Sewn Tag', 'Old Size Tag', 'Total Decoration Price', 'Bag', 'Total Price', 'Ship Domestic', 'Additional Items Domestic', 'Expedited Domestic', 'Additional Items Expedited', 'Ship International', 'Additional Items International'];

  constructor(private service: Inkpressions, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const getDirtLabel = () => {
      this.service.getDirtLabel().subscribe((response: any) => {
        this.ink = response;
        console.log(this.ink);
      });
    };
    const getDirtLabelNoLineItems = () => {
      this.service.getDirtLabelNoLineItems().subscribe((response: any) => {
        this.dataNli = response;
        console.log(this.dataNli);
        let sum = 0;
        // tslint:disable-next-line:radix
        this.dataNli.forEach((a: { amountshippingcost: any; }) => sum += parseFloat(a.amountshippingcost));
        console.log(sum.toFixed(2));
        this.shippingTotal = sum.toFixed(2);
      });
    };
    getDirtLabel();
    getDirtLabelNoLineItems();
  }
}
