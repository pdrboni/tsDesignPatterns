import { ImageEditor } from './image-editor';
import { ImageEditorBackupManager } from './image-editor-backup-manager';

const imageEditor = new ImageEditor('/media/image.png', 'png');
const backupManager = new ImageEditorBackupManager(imageEditor);
console.log(imageEditor);
backupManager.backup();
imageEditor.convertFormat('gif');
backupManager.backup();
imageEditor.convertFormat('jpg');
console.log(imageEditor);
