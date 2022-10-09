
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgxCaptchaModule } from 'ngx-captcha';
import { RecaptchaFormsModule, RecaptchaModule} from 'ng-recaptcha';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { TextFieldModule } from '@angular/cdk/text-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { RuletaWidgetComponent } from '../promos/golden-ticket/ruleta-widget/ruleta-widget.component';
// import { SliderProductosComponent } from '../components/slider-productos/slider-productos.component';
// import { CtaAppComponent } from '../components/cta-app/cta-app.component';

@NgModule({
    declarations: [
        RuletaWidgetComponent,
        // SliderProductosComponent,
        // CtaAppComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgxCaptchaModule,
        RecaptchaFormsModule,
        RecaptchaModule,
        MatInputModule,
        MatButtonModule,
        MatRadioModule,
        MatSelectModule,
        MatFormFieldModule,
        // MatLabel,
        MatStepperModule,
        MatTabsModule,
        MatTooltipModule,
        MatCheckboxModule,
        MatSliderModule,
        TextFieldModule,
        // FormControl,
        FormsModule,
        ReactiveFormsModule, 
    ],
    exports: [
        RuletaWidgetComponent,
        // SliderProductosComponent,
        // CtaAppComponent,
        NgxCaptchaModule,
        RecaptchaFormsModule,
        RecaptchaModule,
        MatInputModule,
        MatButtonModule,
        MatRadioModule,
        MatSelectModule,
        MatFormFieldModule,
        // MatLabel,
        MatStepperModule,
        MatTabsModule,
        MatTooltipModule,
        MatCheckboxModule,
        MatSliderModule,
        TextFieldModule,
        // FormControl,
        FormsModule,
        ReactiveFormsModule, 
    ]
})
export class HeySharedModule { }
