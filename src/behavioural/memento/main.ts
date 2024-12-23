import { ImageEditor } from './image-editor';
import { ImageEditorBackupManager } from './image-editor-backup-manager';

const imageEditor = new ImageEditor('/media/image.png', 'png');
const backupManager = new ImageEditorBackupManager(imageEditor);
console.log(imageEditor);
backupManager.backup();
imageEditor.converFormat('gif');
backupManager.backup();
imageEditor.converFormat('jpg');
console.log(imageEditor);
