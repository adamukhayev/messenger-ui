import BaseApi from './BaseApi'

export default class EventTypeApi extends BaseApi {

  static getEvent(pageSize, pageNumber, sort) {
    return this.getEvents('/event-names/available', pageSize, pageNumber,
        sort)
  }

  static searchEventDictionary(
      eventName,
      sourceApp,
      moduleName,
      description,
      pageNumber,
      pageSize) {
    return this.searchEventDictionarys(
        '/event-names/search',
        eventName,
        sourceApp,
        moduleName,
        description,
        pageNumber,
        pageSize
    )
  }

  static addEventTypes(data) {
    return this.post('/event-names', data)
  }

  static removeEventDictionary(data) {
    return this.removeEventTypes('/event-names', data)
  }
}