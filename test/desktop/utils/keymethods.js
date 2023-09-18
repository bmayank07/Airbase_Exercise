import fs from 'fs'

class keymethods {

    async getPageTitle() {
        return await b.getTitle()
    }

    async testDataReader(filename, key) {
        const constants = fs.readFileSync('./test/desktop/testData/' + filename + '.json', 'utf8');
        const testData = JSON.parse(constants)
        return testData[key]
    }

}
export default new keymethods()