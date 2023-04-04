import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss']
})
export class TransfersComponent implements OnInit {

  questions = [
    {
      title: 'What time should I book my transfer in order to be at the airport or port on time?',
      content: 'For transfers to Sarajevo airport, you are advised to book your transfer 1 hour before the arrival time that your airline has announced to you. For transfers with direction to Tuzla airport, please book your transfer 2 hours before your departure time, in order to avoid any delays due to traffic.',
      isExpanded: false,
      isContentVisible: false
     
    },
    {
      title: 'Where will I get picked up If my hotel is not accessible by car?',
      content: 'Your driver will be waiting for you at a specific prearranged meeting point at a reachable location near your hotel.',
      isExpanded: false,
      isContentVisible: false
      
    },
    {
      title: 'What about TAXI in Sarajevo ?',
      content: 'To ensure a safe and reliable ride, it is recommended to use well-known taxi companies in Sarajevo such as Sarajevo Taxi (+387 33 660 666), Crveni Taxi (+387 33 660 666), or Samir & Emir Taxi (+387 33 660 750).',
      isExpanded: false,
      isContentVisible: false
      
    },
    {
      title: 'What is the cancelation policy on Transfer reservations?',
      content: 'If you cancel your reservation up to 24 hours before the prearranged pick up time, no charges will be applied.',
      isExpanded: false,
      isContentVisible: false
      
    },
    {
      title: 'What If I can’t find the exact location I want to book for?',
      content: 'Choose the area that you wish to book a transfer to or contact us to help you find the specific location that you are looking for.',
      isExpanded: false,
      isContentVisible: false
      
    },
    {
      title: 'My flight has been delayed, what should I do?',
      content: 'In case of a delay in your scheduled flight, the transfer time will change with no extra charge and your driver will meet you at the new arranged time.',
      isExpanded: false,
      isContentVisible: false
      
    },
    {
      title: 'What is the “Meet & Greet” service?',
      content: 'It is the most convenient and stress-free way to locate your driver. The driver is waiting for you at the predefined meeting location, holding a signboard with your name, which guarantees that you will find him quickly and with ease.',
      isExpanded: false,
      isContentVisible: false
      
    }
  ];


 

  constructor() { }

  ngOnInit(): void {
  }

  toggleArrow (index: number) {
    this.questions[index].isExpanded = !this.questions[index].isExpanded;
    this.questions[index].isContentVisible = !this.questions[index].isContentVisible;
  }
 

}
