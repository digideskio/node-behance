http = require('http')

class Behance

  constructor: (@keys) ->
    @apiUrl = 'http://www.behance.net/v2/'

  get: ( method, opts, result ) ->

    if typeof opts == 'function'
      result = opts
      opts = undefined

    query_url = @apiUrl + method + '?client_id=' + @keys['client_id']

    http.get query_url , (res) ->
      data = ''
      res.on 'data', (chunk) ->
        data += chunk
      res.on 'end', () ->
        result JSON.parse(data)


module.exports = Behance
