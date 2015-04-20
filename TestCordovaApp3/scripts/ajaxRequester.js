﻿var app = app || {};

app.ajaxRequester = (function () {
    var PARSE_APP_ID = "bwqltJtUCUPEiufF9pgnnFJ93HEWjCnxdDyHf0cC";
    var PARSE_REST_API_KEY = "stK3orLJKY0Vm0CsRWcb3jF0awUFaSFTYkbw4ZUv";

    var makeRequest = function (method, url, data, success, error) {
        $.ajax({
            url: url,
            headers: {
                "X-Parse-Application-Id": PARSE_APP_ID,
                "X-Parse-REST-API-Key": PARSE_REST_API_KEY
            },
            type: method,
            contentType: 'application/json',
            data: JSON.stringify(data) || undefined,
            success: success,
            error: error,
            limit: 100000
        });
    }

    var makeGetRequest = function (url, success, error) {
        return makeRequest('GET', url, null, success, error);
    }

    var makePostRequest = function (url, data, success, error) {
        return makeRequest('POST', url, data, success, error);
    }

    var makePutRequest = function (url, data, success, error) {
        return makeRequest('PUT', url, data, success, error);
    }

    var makeDeleteRequest = function (url, success, error) {
        return makeRequest('DELETE', url, null, success, error);
    }

    return {
        get: makeGetRequest,
        post: makePostRequest,
        put: makePutRequest,
        delete: makeDeleteRequest
    }
}());
