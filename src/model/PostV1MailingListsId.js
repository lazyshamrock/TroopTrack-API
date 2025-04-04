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

import ApiClient from '../ApiClient';
import PostV1MailingListsIdMessage from './PostV1MailingListsIdMessage';

/**
 * The PostV1MailingListsId model module.
 * @module model/PostV1MailingListsId
 * @version 0.0.1
 */
class PostV1MailingListsId {
    /**
     * Constructs a new <code>PostV1MailingListsId</code>.
     * Post a message to a mailing list
     * @alias module:model/PostV1MailingListsId
     */
    constructor() { 
        
        PostV1MailingListsId.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostV1MailingListsId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostV1MailingListsId} obj Optional instance to populate.
     * @return {module:model/PostV1MailingListsId} The populated <code>PostV1MailingListsId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostV1MailingListsId();

            if (data.hasOwnProperty('message')) {
                obj['message'] = PostV1MailingListsIdMessage.constructFromObject(data['message']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PostV1MailingListsId</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PostV1MailingListsId</code>.
     */
    static validateJSON(data) {
        // validate the optional field `message`
        if (data['message']) { // data not null
          PostV1MailingListsIdMessage.validateJSON(data['message']);
        }

        return true;
    }


}



/**
 * @member {module:model/PostV1MailingListsIdMessage} message
 */
PostV1MailingListsId.prototype['message'] = undefined;






export default PostV1MailingListsId;

