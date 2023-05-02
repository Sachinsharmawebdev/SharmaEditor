class SHARMAEDITOR {
    constructor(textarea){
        let textareaID = document.getElementById(textarea);
        let editArea = document.createElement('div')
        editArea.setAttribute('id', 'editfield');
        editArea.setAttribute('contenteditable',true); //TO make edit area
        textareaID.appendChild(editArea);
    }

    // set style on editor by using diffrent params as an object
    style(obj){
       const style = obj;
       if(style.editor)
       {
            let editorobj = style.editor;
            let textfield = document.getElementById('editfield');
            this.setstyle(textfield,editorobj);
            
       }
       else if(style.toolbar)
       {

       }
       else if(style.tool)
       {

       }
       else{
        // set default style for editor
       }
    }
    // set style of any function
    setstyle(id,obj){
        if(typeof obj === 'object')
        {
            Object.keys(obj).forEach((key) => {
                id.style[key] = obj[key];
            });
        } 
    }
}

