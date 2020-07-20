/**
 * Standard function fro google apps script web app project
 * @param {event object} e 
 */
function doGet(e){
    let template = HtmlService.createTemplateFromFile("html/index")
    let htmlOuput = template.evaluate()

    // set title
    let title = "GAS Web App Template with Vue Material"
    htmlOuput.setTitle(title)

    // set viewport meta tag
    let name = "viewport"
    let content = "width=device-width,initial-scale=1,minimal-ui"
    htmlOuput.addMetaTag(name, content)
    
    // set x frame option mode
    htmlOuput.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)

    return htmlOuput
}