import { Component, Input, OnInit } from '@angular/core';
import { INodesCategory } from '@community/community-home/interfaces';

@Component({
  selector: 'app-nodes-category-picker',
  templateUrl: './nodes-category-picker.component.html',
  styleUrls: ['./nodes-category-picker.component.scss'],
})
export class NodesCategoryPickerComponent implements OnInit {
  @Input()
  public nodesCategory: INodesCategory;

  constructor() {}

  ngOnInit(): void {}
}
