import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Header } from './component/header/header';
import { Contact } from './component/contact/contact';
import { About } from './component/about/about';
import { VisionMission } from './component/vision-mission/vision-mission';
import { ChairmanMessage } from './component/chairman-message/chairman-message';
import { AdmissionProcess } from './component/admission-process/admission-process';
import { FeesStructure } from './component/fees-structure/fees-structure';
import { Kindergarten } from './component/kindergarten/kindergarten';
import { PrimarySchool } from './component/primary-school/primary-school';
import { MiddleSchool } from './component/middle-school/middle-school';
import { HigherSecondarySchool } from './component/higher-secondary-school/higher-secondary-school';
import { SmartClassroom } from './component/smart-classroom/smart-classroom';
import { ScienceLab } from './component/science-lab/science-lab';
import { ComputerLab } from './component/computer-lab/computer-lab';
import { Transport } from './component/transport/transport';
import { Gallery } from './component/gallery/gallery';
import { Admission } from './component/admission/admission';
import { OurJourney } from './component/our-journey/our-journey';

export const routes: Routes = [
  { path: '', component: Home },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'header', component: Header },
  { path: 'contact-us', component: Contact },
  { path: 'about-us', component: About },
  { path: 'vision-and-mission', component: VisionMission },
  { path: 'chairman-message', component: ChairmanMessage },
  { path: 'admission-process', component: AdmissionProcess },
  { path: 'fee-structure', component: FeesStructure },
  { path: 'kindergarten', component: Kindergarten},
  { path: 'primary', component: PrimarySchool},
  { path: 'middle-school', component: MiddleSchool},
  { path: 'higher-secondary-school', component: HigherSecondarySchool},
  { path: 'smart-classrooms', component: SmartClassroom },
  { path: 'science-lab', component: ScienceLab },
  { path: 'computer-lab', component: ComputerLab },
  { path: 'transport', component: Transport },
  { path: 'gallery', component: Gallery },
  { path: 'admission', component: Admission},
  { path: 'our-journey', component: OurJourney}
];
