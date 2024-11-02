import vscode from "vscode";
class EditDecorationManager {
  private _lastEditor: vscode.TextEditor | undefined;
  private decorationType: vscode.TextEditorDecorationType;
  constructor(context: vscode.ExtensionContext) {
    this.decorationType = vscode.window.createTextEditorDecorationType({
      backgroundColor: "rgba(255, 255, 0, 0.1)",
      borderWidth: "0 0 0 1px",
      borderColor: "rgba(255, 255, 0)",
      borderStyle: "solid",
      isWholeLine: true,
      cursor: "pointer",
      //   gutterIconPath: context.asAbsolutePath("media/gutterIcon.png"),
      gutterIconSize: "contain",
    });
  }
  setDecoration(editor: vscode.TextEditor, range: vscode.Range) {
    if (this._lastEditor) {
      this._lastEditor.setDecorations(this.decorationType, []);
    }
    editor.setDecorations(this.decorationType, [range]);
    this._lastEditor = editor;
  }
  clear() {
    if (this._lastEditor) {
      this._lastEditor.setDecorations(this.decorationType, []);
      this._lastEditor = undefined;
    }
  }
}
export default EditDecorationManager;
