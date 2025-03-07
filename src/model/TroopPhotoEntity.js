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

/**
 * The TroopPhotoEntity model module.
 * @module model/TroopPhotoEntity
 * @version 0.0.1
 */
class TroopPhotoEntity {
    /**
     * Constructs a new <code>TroopPhotoEntity</code>.
     * @alias module:model/TroopPhotoEntity
     */
    constructor() { 
        
        TroopPhotoEntity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TroopPhotoEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TroopPhotoEntity} obj Optional instance to populate.
     * @return {module:model/TroopPhotoEntity} The populated <code>TroopPhotoEntity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TroopPhotoEntity();

            if (data.hasOwnProperty('troop_photo_id')) {
                obj['troop_photo_id'] = ApiClient.convertToType(data['troop_photo_id'], 'Number');
            }
            if (data.hasOwnProperty('photo')) {
                obj['photo'] = ApiClient.convertToType(data['photo'], 'String');
            }
            if (data.hasOwnProperty('thumb')) {
                obj['thumb'] = ApiClient.convertToType(data['thumb'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TroopPhotoEntity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TroopPhotoEntity</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['photo'] && !(typeof data['photo'] === 'string' || data['photo'] instanceof String)) {
            throw new Error("Expected the field `photo` to be a primitive type in the JSON string but got " + data['photo']);
        }
        // ensure the json data is a string
        if (data['thumb'] && !(typeof data['thumb'] === 'string' || data['thumb'] instanceof String)) {
            throw new Error("Expected the field `thumb` to be a primitive type in the JSON string but got " + data['thumb']);
        }

        return true;
    }


}



/**
 * ID of the Troop Photo record
 * @member {Number} troop_photo_id
 */
TroopPhotoEntity.prototype['troop_photo_id'] = undefined;

/**
 * URL of the photo
 * @member {String} photo
 */
TroopPhotoEntity.prototype['photo'] = undefined;

/**
 * URL of the thumbnail image
 * @member {String} thumb
 */
TroopPhotoEntity.prototype['thumb'] = undefined;






export default TroopPhotoEntity;

