// import all component 
// import bullets from "./component/bullet/bullets";
// import image from "./component/image/image";
// import link from "./component/link/link";
// import paragraph from "./component/paragraph/paragraph";
// import table from "./component/table/table";
// import text from "./component/text/text";

// import controllers
// import imageController from "./controller/imageController";
// import tableController from "./controller/tableController";
// import textController from "./controller/textController";


const configuration = (data)=>{
    // set all data in an object
    let dt = Object.keys(data.config);
    if(dt[0]==='styles')
    {
        let val = Object.keys(data.config.styles);
        let editor = val.includes('editor');
        let toolbar = val.includes('toolbar');
        let textarea = val.includes('textarea');
        if(editor)
        {
            let div = data.create.editorID;
            let obj = data.config.styles.editor;
            setStyle(div,obj);
        }
        if(toolbar)
        {
            let div = data.create.toolbar;
            let obj = data.config.styles.toolbar;
            setStyle(div,obj);
        }
        if(textarea)
        {
            let div = data.create.editAreaID;
            let obj = data.config.styles.textarea;
            setStyle(div,obj);
        }
        
    }

    if(dt[0]==='tools')
    {

    }

}
// set tools in Editor
function setTool(data)
{

}

// setstyle to Editor

function setStyle(id,styles)
{
    var cssStyle ='';
    Object.keys(styles).forEach(key => {
        cssStyle += `${key}:${styles[key]};`;
    });
    console.log(cssStyle);
    id.style.cssText = cssStyle;
}


export default configuration;