/**
 * API title
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import PhotoAlbumEntity from '../model/PhotoAlbumEntity';
import PostV1PhotoAlbumsId from '../model/PostV1PhotoAlbumsId';

/**
* PhotoAlbums service.
* @module api/PhotoAlbumsApi
* @version 0.0.1
*/
export default class PhotoAlbumsApi {

    /**
    * Constructs a new PhotoAlbumsApi. 
    * @alias module:api/PhotoAlbumsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getV1PhotoAlbums operation.
     * @callback module:api/PhotoAlbumsApi~getV1PhotoAlbumsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PhotoAlbumEntity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of photo albums relevant to the user. Photos are not returned on this endpoint.
     * @param {String} xPartnerToken Your secret partner token
     * @param {String} xUserToken The token you received when you authenticated the user
     * @param {module:api/PhotoAlbumsApi~getV1PhotoAlbumsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PhotoAlbumEntity}
     */
    getV1PhotoAlbums(xPartnerToken, xUserToken, callback) {
      let postBody = null;
      // verify the required parameter 'xPartnerToken' is set
      if (xPartnerToken === undefined || xPartnerToken === null) {
        throw new Error("Missing the required parameter 'xPartnerToken' when calling getV1PhotoAlbums");
      }
      // verify the required parameter 'xUserToken' is set
      if (xUserToken === undefined || xUserToken === null) {
        throw new Error("Missing the required parameter 'xUserToken' when calling getV1PhotoAlbums");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Partner-Token': xPartnerToken,
        'X-User-Token': xUserToken
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PhotoAlbumEntity;
      return this.apiClient.callApi(
        '/v1/photo_albums', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getV1PhotoAlbumsId operation.
     * @callback module:api/PhotoAlbumsApi~getV1PhotoAlbumsIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PhotoAlbumEntity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns detailed information about a photo album, including photos
     * @param {String} xPartnerToken Your secret partner token
     * @param {String} xUserToken The token you received when you authenticated the user
     * @param {String} id 
     * @param {module:api/PhotoAlbumsApi~getV1PhotoAlbumsIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PhotoAlbumEntity}
     */
    getV1PhotoAlbumsId(xPartnerToken, xUserToken, id, callback) {
      let postBody = null;
      // verify the required parameter 'xPartnerToken' is set
      if (xPartnerToken === undefined || xPartnerToken === null) {
        throw new Error("Missing the required parameter 'xPartnerToken' when calling getV1PhotoAlbumsId");
      }
      // verify the required parameter 'xUserToken' is set
      if (xUserToken === undefined || xUserToken === null) {
        throw new Error("Missing the required parameter 'xUserToken' when calling getV1PhotoAlbumsId");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getV1PhotoAlbumsId");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Partner-Token': xPartnerToken,
        'X-User-Token': xUserToken
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PhotoAlbumEntity;
      return this.apiClient.callApi(
        '/v1/photo_albums/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postV1PhotoAlbumsId operation.
     * @callback module:api/PhotoAlbumsApi~postV1PhotoAlbumsIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PhotoAlbumEntity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload a new photo to a photo album
     * @param {String} xPartnerToken Your secret partner token
     * @param {String} xUserToken The token you received when you authenticated the user
     * @param {String} id 
     * @param {module:model/PostV1PhotoAlbumsId} postV1PhotoAlbumsId 
     * @param {module:api/PhotoAlbumsApi~postV1PhotoAlbumsIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PhotoAlbumEntity}
     */
    postV1PhotoAlbumsId(xPartnerToken, xUserToken, id, postV1PhotoAlbumsId, callback) {
      let postBody = postV1PhotoAlbumsId;
      // verify the required parameter 'xPartnerToken' is set
      if (xPartnerToken === undefined || xPartnerToken === null) {
        throw new Error("Missing the required parameter 'xPartnerToken' when calling postV1PhotoAlbumsId");
      }
      // verify the required parameter 'xUserToken' is set
      if (xUserToken === undefined || xUserToken === null) {
        throw new Error("Missing the required parameter 'xUserToken' when calling postV1PhotoAlbumsId");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling postV1PhotoAlbumsId");
      }
      // verify the required parameter 'postV1PhotoAlbumsId' is set
      if (postV1PhotoAlbumsId === undefined || postV1PhotoAlbumsId === null) {
        throw new Error("Missing the required parameter 'postV1PhotoAlbumsId' when calling postV1PhotoAlbumsId");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Partner-Token': xPartnerToken,
        'X-User-Token': xUserToken
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PhotoAlbumEntity;
      return this.apiClient.callApi(
        '/v1/photo_albums/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
