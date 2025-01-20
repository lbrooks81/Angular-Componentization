import { Component } from '@angular/core';
import {BannerComponent} from '../banner/banner.component';
import {StudentComponent} from '../students/student.component';
import {ClassesComponent} from '../classes/classes.component';
import {DancingComponent} from '../dancing/dancing.component';
import {HoursComponent} from '../hours/hours.component';
import {AboutComponent} from '../about/about.component';
import {TestimonialComponent} from '../testimonial/testimonial.component';
import {ContactComponent} from '../contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [
    BannerComponent,
    StudentComponent,
    ClassesComponent,
    DancingComponent,
    HoursComponent,
    AboutComponent,
    TestimonialComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
