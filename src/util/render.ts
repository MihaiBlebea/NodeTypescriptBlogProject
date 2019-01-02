import Liquid from 'liquidts'
import fs from 'fs'

const engine = Liquid()

export const renderTemplate = async (filePath : string, params : Object)=> {
    const template = fs.readFileSync(filePath)
    const tpl = engine.parse(template.toString())
    return await engine.render(tpl, params).then((output)=> {
        return output.read()
    })
}
