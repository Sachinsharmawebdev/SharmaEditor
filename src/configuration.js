// import all component 
import bullets from "./component/bullets.js";
import image from "./component/image.js";
import link from "./component/link.js";
import paragraph from "./component/paragraph.js";
import table from "./component/table.js";
import text from "./component/text.js";
import page from "./component/page.js";

// import controllers
// import imageController from "./controller/imageController.js";
// import tableController from "./controller/tableController.js";
// import textController from "./controller/textController.js";



const configuration = (data)=>{
    // set all data in an object
    let dt = Object.keys(data.config);
    let pageview = data.create.page; 
    if(dt[0]==='styles')
    {
        let val = Object.keys(data.config.styles);
        let editor = val.includes('editor');
        let toolbar = val.includes('toolbar');
        let textarea = val.includes('textarea');
        if(editor)
        {
            // editor styles
            let div = data.create.maindiv;
            let obj = data.config.styles.editor;
            !obj.display ? obj['display'] = 'block':obj.display;
            !obj.margin ? obj['margin'] = '0 auto' : obj.margin;
            !obj['height'] ? obj['height'] = '85vh' : obj['height'] = '85vh';
            !obj['background-color'] ? obj['background-color'] = '' : obj['background-color'];
            setStyle(div,obj);
        }
        if(toolbar)
        {
            // toolbar styles
            let div = data.create.toolbar;
            let obj = data.config.styles.toolbar;
            !obj.display ? obj['display'] = 'block':obj.display;
            !obj.margin ? obj['margin'] = '0 auto' : obj.margin;
            !obj['background-color'] ? obj['background-color'] = '#00000012' : obj['background-color'];
            !obj['height'] ? obj['height'] = '6vh' : obj['height'] = '6vh';
            !obj['text-align'] ? obj['text-align'] = 'center' : obj['text-align'] = 'center';
            !obj['padding-top'] ? obj['padding-top'] = '8px' : obj['padding-top'] = '8px';
            !obj['border-radius'] ? obj['border-radius'] = '5px' : obj['border-radius'] = '5px';
            setStyle(div,obj);
        }
        if(textarea)
        {
            // textarea style
            let div = data.create.canvas;
            let obj = data.config.styles.textarea;
            !obj.display ? obj['display'] = 'block':obj.display;
            !obj.margin ? obj['margin'] = '0 auto' : obj.margin;
            !obj['background-color'] ? obj['background-color'] = '#00000012' : obj['background-color'];
<<<<<<< Updated upstream
=======
            //!obj['height'] ? obj['height'] = '100%' : obj['height'] = '100%';
>>>>>>> Stashed changes
            !obj['border-radius'] ? obj['border-radius'] = '5px' : obj['border-radius'] = '5px';
            setStyle(div,obj);
        }
        
        
    }
    if(dt[0]==='tools')
    {

    }
    // page format setup
    if(pageview)
    {
        let final = {};
        final = data.create;
        page(final);
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
    id.style.cssText = cssStyle;
}


export default configuration;