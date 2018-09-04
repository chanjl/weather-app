import { NgModule } from "@angular/core";

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

const MODULES = [MatToolbarModule,
    MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatSliderModule, MatIconModule, MatListModule];

@NgModule({
    imports: MODULES,
    exports: MODULES
}) 
export class MaterialModule {}