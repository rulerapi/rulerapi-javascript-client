/**
 * Ruler API
 * Ruler API is a flexible API for rules. Originally designed for FIRST Robotics Competition, it is flexible in nature to allow for any program to use it.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";

/**
* GetRule service.
* @module api/GetRuleApi
* @version 1.0.0
*/
export default class GetRuleApi {

    /**
    * Constructs a new GetRuleApi. 
    * @alias module:api/GetRuleApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getRule operation.
     * @callback module:api/GetRuleApi~getRuleCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the content of a rule.
     * @param {String} ruleId Rule ID to get
     * @param {String} ruleset The ruleset to look up the rule from.
     * @param {module:api/GetRuleApi~getRuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getRule(ruleId, ruleset, callback) {
      let postBody = null;
      // verify the required parameter 'ruleId' is set
      if (ruleId === undefined || ruleId === null) {
        throw new Error("Missing the required parameter 'ruleId' when calling getRule");
      }
      // verify the required parameter 'ruleset' is set
      if (ruleset === undefined || ruleset === null) {
        throw new Error("Missing the required parameter 'ruleset' when calling getRule");
      }

      let pathParams = {
        'rule_id': ruleId,
        'ruleset': ruleset
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/rule/{ruleset}/{rule_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
