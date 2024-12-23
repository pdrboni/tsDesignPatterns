import { ImageEditor } from './image-editor';
import { Memento } from './memento-protocol';

// Caretaker
export class ImageEditorBackupManager {
  private mementos: Memento[] = [];

  constructor(private readonly originatorImageEditor: ImageEditor) {}

  backup(): void {
    console.log('Backup: Saving ImageEditor state');
    this.mementos.push(this.originatorImageEditor.save());
  }

  undo(): void {
    const memento = this.mementos.pop();

    if (!memento) {
      console.log('Backup: no mementos');
      return;
    }

    this.originatorImageEditor.restore(memento);
    console.log(`Backup: ${memento.getName()} was sucesfuly restored`);
  }

  showMemento(): void {
    for (const memento of this.mementos) {
      console.log(memento);
    }
  }
}
