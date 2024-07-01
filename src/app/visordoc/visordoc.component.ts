import { Component, ViewChild } from '@angular/core';
import { DocumentEditorContainer, DocumentEditorContainerComponent } from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-visordoc',
  templateUrl: './visordoc.component.html',
  styleUrls: ['./visordoc.component.css']
})
export class VisordocComponent {
  @ViewChild('documentEditor') editorObj !: DocumentEditorContainerComponent;
 public onSave(){
  this.editorObj.documentEditor.save('Documento', 'Docx');
 }
}
