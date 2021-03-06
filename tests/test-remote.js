'use strict';
require('should');
var assert = require("assert");
var request = require('superagent');
var expect = require('expect.js');

describe('server', function(){
  describe('minimalweb-plain-login', function(){
    it('should return plain text in response, also test of request filter', function(done){
    	request.get('http://54.68.92.16/mwplain').end(function(res){
       		expect(res).to.exist;
		expect(res.status).to.equal(200);
		expect(res.text).to.equal('this process requires login');
		done();
  	});
    })
  });
  describe('minimalweb-plain', function(){
    it('should return plain text in response', function(done){
    	request.get('http://54.68.92.16/mwplain/').end(function(res){
       		expect(res).to.exist;
		expect(res.status).to.equal(200);
		expect(res.text).to.equal('This is controller text');
		done();
  	});
    })
  });
  describe('minimalweb-plain-rest', function(){
    it('should return plain text in response', function(done){
    	request.get('http://54.68.92.16/mwplain/1').end(function(res){
       		expect(res).to.exist;
		expect(res.status).to.equal(200);
		expect(res.text).to.equal('This is controller text with name mwplain and value 1');
		done();
  	});
    })
  });
  describe('minimalweb-json', function(){
    it('should return json in response', function(done){
    	request.get('http://54.68.92.16/mwjson/').end(function(res){
       		expect(res).to.exist;
		expect(res.status).to.equal(200);
		expect(res.text).to.equal('{\"name\":\"Ram\"}');
		done();
  	});
    })
  });
  describe('minimalweb-html', function(){
    it('should return html in response', function(done){
    	request.get('http://54.68.92.16/mwhtml/').end(function(res){
       		expect(res).to.exist;
		expect(res.status).to.equal(200);
		expect(res.text).to.equal('<h2>This is controller text</h2>');
		done();
  	});
    })
  });
  describe('minimalweb-xml', function(){
    it('should return xml in response', function(done){
    	request.get('http://54.68.92.16/mwxml').end(function(res){
       		expect(res).to.exist;
		expect(res.status).to.equal(200);
                //need to understand how to get XML
		done();
  	});
    })
  });
  describe('minimalweb-staticpage', function(){
    it('should return static file in response', function(done){
    	request.get('http://54.68.92.16/mwindexpage').end(function(res){
       		expect(res).to.exist;
		expect(res.status).to.equal(200);
		expect(res.text).to.contain('<h1>This is Index File</h1>');
		done();
  	});
    })
  });
  describe('minimalweb-dynamicpage', function(){
    it('should return dynamic file in response', function(done){
    	request.get('http://54.68.92.16/mwdynamicpage').end(function(res){
       		expect(res).to.exist;
		expect(res.status).to.equal(200);
		expect(res.text).to.contain('Ram');
		done();
  	});
    })
  });
  describe('minimalweb-methodundo', function(){
    it('should return plain text in response', function(done){
    	request.get('http://54.68.92.16/mwmethodundo').end(function(res){
       		expect(res).to.exist;
		expect(res.status).to.equal(200);
		expect(res.text).to.equal('this is a call of method async from Dynamic Class for undo');
		done();
  	});
    })
  });
  describe('minimalweb-methoddo', function(){
    it('should return html in response', function(done){
    	request.get('http://54.68.92.16/mwmethoddo').end(function(res){
       		expect(res).to.exist;
		expect(res.status).to.equal(200);
		expect(res.text).to.equal('<h2>This is controller text from Method </h2>');
		done();
  	});
    })
  }); 		
  
  describe('minimalweb-postForm', function(){
    it('should return json in response', function(done){
	request.post('http://54.68.92.16/mwpostForm')
	.send("{ \"firstname\": \"Mickey\", \"lastname\" : \"Mouse\" }")
	.end(function(res){
       		expect(res).to.exist;
		expect(res.status).to.equal(200);
		expect(res.text).to.contain('{\"person\":{\"name\":\"Ram\"}}');
		done();
  	});
    })
  });
});

