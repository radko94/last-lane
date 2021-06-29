import { Component, OnInit } from '@angular/core';
import { INavigation, INodesCategory } from './interfaces';

@Component({
  selector: 'app-community-home',
  templateUrl: './community-home.component.html',
  styleUrls: ['./community-home.component.scss'],
})
export class CommunityHomeComponent implements OnInit {
  public nodesCategories: INodesCategory[];
  public ongoingConversationsHeader: string;
  public ongoingConversationsNavigations: INavigation[];

  public insidersConversationsHeader: string;
  public insidersConversationsNavigations: INavigation[];

  constructor() {}

  ngOnInit(): void {
    this.ongoingConversationsHeader = 'Ongoing conversations';
    this.insidersConversationsHeader = 'Insiders Forums';

    this.nodesCategories = [
      {
        title: 'Getting started with Unscripted',
        iconName: 'account_circle',
        nodes: [
          {
            title: 'Introduction',
            subtitle: 'New entrepreneurs to the discussion forum',
            iconName: 'forum',
            threadCount: 1562,
            messageCount: 4235,
          },
          {
            title: 'Introduction',
            subtitle: 'New entrepreneurs to the discussion forum',
            iconName: 'forum',
            threadCount: 1562,
            messageCount: 4235,
          },
          {
            title: 'Introduction',
            subtitle: 'New entrepreneurs to the discussion forum',
            iconName: 'forum',
            threadCount: 1562,
            messageCount: 4235,
          },
          {
            title: 'Introduction',
            subtitle: 'New entrepreneurs to the discussion forum',
            iconName: 'forum',
            threadCount: 1562,
            messageCount: 4235,
          },
          {
            title: 'Introduction',
            subtitle: 'New entrepreneurs to the discussion forum',
            iconName: 'forum',
            threadCount: 1562,
            messageCount: 4235,
          },
          {
            title: 'Introduction',
            subtitle: 'New entrepreneurs to the discussion forum',
            iconName: 'forum',
            threadCount: 1562,
            messageCount: 4235,
          },
        ],
      },
      {
        title: 'Growing and scaling',
        iconName: 'account_circle',
        nodes: [
          {
            title: 'Legal, tax, regulation',
            subtitle: 'New entrepreneurs to the discussion forum',
            iconName: 'forum',
            threadCount: 1562,
            messageCount: 4235,
          },
          {
            title: 'Legal, tax, regulation',
            subtitle: 'New entrepreneurs to the discussion forum',
            iconName: 'forum',
            threadCount: 1562,
            messageCount: 4235,
          },
          {
            title: 'Legal, tax, regulation',
            subtitle: 'New entrepreneurs to the discussion forum',
            iconName: 'forum',
            threadCount: 1562,
            messageCount: 4235,
          },
          {
            title: 'Legal, tax, regulation',
            subtitle: 'New entrepreneurs to the discussion forum',
            iconName: 'forum',
            threadCount: 1562,
            messageCount: 4235,
          },
          {
            title: 'Legal, tax, regulation',
            subtitle: 'New entrepreneurs to the discussion forum',
            iconName: 'forum',
            threadCount: 1562,
            messageCount: 4235,
          },
        ],
      },
      {
        title: 'Self development / improvement',
        iconName: 'account_circle',
        nodes: [
          {
            title: 'Education / books',
            subtitle: 'New entrepreneurs to the discussion forum',
            iconName: 'forum',
            threadCount: 1562,
            messageCount: 4235,
          },
          {
            title: 'Education / books',
            subtitle: 'New entrepreneurs to the discussion forum',
            iconName: 'forum',
            threadCount: 1562,
            messageCount: 4235,
          },
          {
            title: 'Education / books',
            subtitle: 'New entrepreneurs to the discussion forum',
            iconName: 'forum',
            threadCount: 1562,
            messageCount: 4235,
          },
          {
            title: 'Education / books',
            subtitle: 'New entrepreneurs to the discussion forum',
            iconName: 'forum',
            threadCount: 1562,
            messageCount: 4235,
          },
          {
            title: 'Education / books',
            subtitle: 'New entrepreneurs to the discussion forum',
            iconName: 'forum',
            threadCount: 1562,
            messageCount: 4235,
          },
          {
            title: 'Education / books',
            subtitle: 'New entrepreneurs to the discussion forum',
            iconName: 'forum',
            threadCount: 1562,
            messageCount: 4235,
          },
        ],
      },
      {
        title: 'Money systems, investing, crypto',
        iconName: 'account_circle',
        nodes: [
          {
            title: 'Real estate investing',
            subtitle: 'New entrepreneurs to the discussion forum',
            iconName: 'forum',
            threadCount: 1562,
            messageCount: 4235,
          },
          {
            title: 'Real estate investing',
            subtitle: 'New entrepreneurs to the discussion forum',
            iconName: 'forum',
            threadCount: 1562,
            messageCount: 4235,
          },
        ],
      },
      {
        title: 'Forum outreach and commerce',
        iconName: 'account_circle',
        nodes: [
          {
            title: 'Networking, meet-ups',
            subtitle: 'New entrepreneurs to the discussion forum',
            iconName: 'forum',
            threadCount: 1562,
            messageCount: 4235,
          },
          {
            title: 'Networking, meet-ups',
            subtitle: 'New entrepreneurs to the discussion forum',
            iconName: 'forum',
            threadCount: 1562,
            messageCount: 4235,
          },
        ],
      },
    ];

    this.ongoingConversationsNavigations = [
      { name: 'Random chat and discussion', route: '' },
      { name: 'What`s the best value you paid for', route: '' },
      { name: 'Random chat and discussion', route: '' },
      { name: 'What`s the best value you paid for', route: '' },
      { name: 'Random chat and discussion', route: '' },
      { name: 'What`s the best value you paid for', route: '' },
      { name: 'Random chat and discussion', route: '' },
      { name: 'What`s the best value you paid for', route: '' },
    ];

    this.insidersConversationsNavigations = [
      { name: 'General discussions', route: '' },
      { name: 'Gold threads', route: '' },
      { name: 'Insider conference calls', route: '' },
    ];
  }
}
