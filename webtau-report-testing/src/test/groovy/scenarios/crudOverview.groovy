package scenarios

import static com.twosigma.webtau.WebTauGroovyDsl.*
import static pages.Pages.*

scenario('http calls') {
    report.open('rest/springboot/customerCrud-webtau-report.html')
    report.selectTest('CRUD operations for customer')

    report.selectHttpCalls()
    report.expandHttpCall(2)

    browser.doc.capture('report-crud-http-calls')
}