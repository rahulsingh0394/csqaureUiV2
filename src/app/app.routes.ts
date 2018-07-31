import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { QuestionPaperComponent } from './question-paper/question-paper.component';
// import { AdminComponent } from './admin/admin.component';
// import { StudentComponent } from './student/student.component';
// import { AppComponent } from '../app/app.component';

export const Router: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {path: 'about', component: AboutComponent},
    {path: 'contact-us', component: ContactUsComponent},
    {path: 'question-paper', component: QuestionPaperComponent},
    //   { path: 'about', loadChildren: './about/about.module#AboutModule' },
    //   { path: 'bangalore', component: BangaloreComponent },
    //   { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
    //   { path: 'careers', loadChildren: './careers/careers.module#CareersModule' },
    //   { path: 'media', loadChildren: './media/media.module#MediaModule' },
    //   { path: 'parents-review', loadChildren: './parents/parents.module#ParentsModule' },
    //   { path: 'privacy', loadChildren: './privacy/privacy.module#PrivacyModule' },
    //   { path: 'question', loadChildren: './question/ques.module#QuesModule' },
    //   { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    //   { path: 'studentForm', component: StudentComponent },
    //   { path: 'tutorForm', component: TutorComponent },
    //   { path: 'terms', loadChildren: './terms/terms.module#TermsModule'},
    //   { path: 'tutors-review', loadChildren: './tutors/tutors.module#TutorsModule' },
    //   { path: 'admin-app',      loadChildren: './admin-app/admin-app.module#AdminAppModule' },
    //   { path: 'home-tutors-private-tutors', component: HomeTutorComponent },
    //   { path: '', loadChildren: './Class-wise-best-private-home-tutor/Class-wise-best-private-home-tutor.module#ClassWiseModule' },
    //   { path: '', loadChildren: './Syllabus-wise-best-private-home-tutor/Syllabus-wise-best-private-home-tutor.module#SyllabusWiseModule' } ,
    //   { path: '', loadChildren: './Subjects-wise-best-private-home-tutor/Subjects-wise-best-private-home-tutor.module#SubjectsWiseModule' }    
];


