/**
 * Evalute an html temlpate and insert it to another html file
 * @param {string} filename 
 */
function include(filename){
    return HtmlService.createHtmlTemplateFromFile(filename).evalute().getContent()
}