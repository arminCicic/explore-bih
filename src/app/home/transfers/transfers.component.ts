import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss']
})
export class TransfersComponent implements OnInit {

  questions = [
    {
      title: 'How to get around Bosnia and Herzegovina?',
      content: 'Bosnia and Herzegovina has a well-connected transportation system that offers various modes of travel for tourists and locals alike. The most popular and affordable way to travel between cities and towns is by bus. You can find bus schedules and purchase tickets at bus stations or online.',
      isExpanded: false,
      isContentVisible: false
     
    },
    {
      title: 'How to get to Bosnia and Herzegovina?',
      content: 'To get to Bosnia, you can fly into Sarajevo International Airport, Mostar International Airport, or Banja Luka International Airport. Alternatively, you can take a train or bus from neighboring countries such as Croatia, Serbia, or Montenegro, or use personal vehicle',
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
      title: 'Where to eat in Bosnia and Herzegovina?',
      content: 'Bosnia and Herzegovina offers a wide range of culinary options, with traditional Bosnian cuisine being a highlight. You can find numerous restaurants and cafes in cities and towns serving cevapi, burek, and other delicious dishes. Street food vendors are also popular and offer a quick and tasty snack on the go.',
      isExpanded: false,
      isContentVisible: false
      
    },
    {
      title: 'What is the best time to visit B&H?',
      content: 'The best time to visit Bosnia and Herzegovina is during the shoulder seasons of spring (April to May) and fall (September to October). During this time, the weather is mild, and there are fewer crowds. Summer (June to August) is the peak tourist season with warmer weather, but it can be crowded and more expensive. Winter (December to February) is ideal for winter sports enthusiasts but can be quite cold and snowy.',
      isExpanded: false,
      isContentVisible: false
      
    },
    {
      title: 'Getting around B&H?',
      content: 'Getting around Bosnia and Herzegovina can be done by various modes of transportation, including buses, trains, taxis, rental cars, and shared taxis known as "kombi." Buses are the most common and affordable way to travel between cities and towns, while renting a car is a good option for more flexibility. Taxis and shared taxis are readily available in most cities, and trains offer a slower but scenic way to travel around the country. Just be aware of narrow roads and challenging terrain in some areas.',
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
