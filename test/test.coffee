assert = require 'assert'

Behance = require '../lib/main'
keys =
  'client_id': '9q8RIfKZf1zxVw1LlEqRi6xUyF87jkay',
  'client_secret': ''

behance = new Behance(keys)

describe 'get methods', ->

  it 'simple query' , (done) ->
    behance.get 'projects' , (result) ->
      assert.equal(result.projects.length, 12, 'should be 12')
      do done

  it 'simple query with filters', (done) ->
    behance.get 'projects', {'color_hex':'#000000'}, (result) ->
      assert.equal(result.projects.length, 12, 'should be 12')
      do done

  it 'simple query for get users', (done) ->
    behance.get 'users', {'country':'spain', 'sort':'followed'}, (result) ->
      assert.equal( result.users.length , 12 , 'should be 12')
      do done

  it 'simple query for get data with pagination' , (done) ->
    behance.get 'users', {'page':'2'}, (result) ->
      assert.equal(result.users.length, 12, 'should be 12')
      do done
