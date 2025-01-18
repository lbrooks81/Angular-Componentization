import { Routes } from '@angular/router';
import {BannerComponent} from './banner/banner.component';
import {StudentComponent} from './students/student.component';
import {ClassesComponent} from './classes/classes.component';
import {DancingComponent} from './dancing/dancing.component';
import {HoursComponent} from './hours/hours.component';
import {AboutComponent} from './about/about.component';
import {TestimonialComponent} from './testimonial/testimonial.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'banner', component: BannerComponent },
  { path: 'students', component: StudentComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'dancing', component: DancingComponent },
  { path: 'hours', component: HoursComponent },
  { path: 'about', component: AboutComponent },
  { path: 'testimonial', component: TestimonialComponent },
  { path: 'contact', component: ContactComponent }
];
