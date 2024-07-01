import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisorpdfComponent } from './visorpdf/visorpdf.component';
import { VisordocComponent } from './visordoc/visordoc.component';
import { VisorxlsxComponent } from './visorxlsx/visorxlsx.component';
import { PrincipalComponent } from './principal/principal.component';
import { DocumentEditorModule, DocumentEditorContainerModule, ToolbarService } from '@syncfusion/ej2-angular-documenteditor';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { PdfViewerModule } from '@syncfusion/ej2-angular-pdfviewer';
import { ToolbarService as ToolbarServicePDf } from '@syncfusion/ej2-angular-pdfviewer';

@NgModule({
  declarations: [
    AppComponent,
    VisorpdfComponent,
    VisordocComponent,
    VisorxlsxComponent,
    PrincipalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DocumentEditorModule,
    DocumentEditorContainerModule,
    ButtonModule,
    PdfViewerModule
  ],
  providers: [ToolbarService,ToolbarServicePDf],
  bootstrap: [AppComponent]
})
export class AppModule { }
