import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Input } from '@angular/core'

@Component({
// 1. selector — 组件的选择器（CSS 元素选择器）
// 2. templateUrl — 组件模板文件的位置。
// 3. styleUrls — 组件私有 CSS 样式表文件的位置。
    selector: 'app-product-alerts',
    templateUrl: './product-alerts.component.html',
    styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
    //@Input() 装饰器指出其属性值是从该组件的父组件商品列表组件中传入的(productalerts.component.ts)
    @Input() product;
    @Output() notify = new EventEmitter();

    constructor() {
    }

    //ngOnInit() 是一个生命周期钩子，Angular在创建完组件后很快就会调用ngOnInit()
    //这里是放置初始化逻辑的好地方
    ngOnInit() {
    }

}
