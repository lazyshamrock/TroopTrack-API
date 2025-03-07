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
 * The EventEntity model module.
 * @module model/EventEntity
 * @version 0.0.1
 */
class EventEntity {
    /**
     * Constructs a new <code>EventEntity</code>.
     * EventEntity model
     * @alias module:model/EventEntity
     */
    constructor() { 
        
        EventEntity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventEntity} obj Optional instance to populate.
     * @return {module:model/EventEntity} The populated <code>EventEntity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventEntity();

            if (data.hasOwnProperty('event_id')) {
                obj['event_id'] = ApiClient.convertToType(data['event_id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('event_type')) {
                obj['event_type'] = ApiClient.convertToType(data['event_type'], 'String');
            }
            if (data.hasOwnProperty('activity_at')) {
                obj['activity_at'] = ApiClient.convertToType(data['activity_at'], 'String');
            }
            if (data.hasOwnProperty('end_at')) {
                obj['end_at'] = ApiClient.convertToType(data['end_at'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('text_color')) {
                obj['text_color'] = ApiClient.convertToType(data['text_color'], 'String');
            }
            if (data.hasOwnProperty('is_registration_closed?')) {
                obj['is_registration_closed?'] = ApiClient.convertToType(data['is_registration_closed?'], 'String');
            }
            if (data.hasOwnProperty('payment_required_to_rsvp')) {
                obj['payment_required_to_rsvp'] = ApiClient.convertToType(data['payment_required_to_rsvp'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EventEntity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EventEntity</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['event_id'] && !(typeof data['event_id'] === 'string' || data['event_id'] instanceof String)) {
            throw new Error("Expected the field `event_id` to be a primitive type in the JSON string but got " + data['event_id']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['event_type'] && !(typeof data['event_type'] === 'string' || data['event_type'] instanceof String)) {
            throw new Error("Expected the field `event_type` to be a primitive type in the JSON string but got " + data['event_type']);
        }
        // ensure the json data is a string
        if (data['activity_at'] && !(typeof data['activity_at'] === 'string' || data['activity_at'] instanceof String)) {
            throw new Error("Expected the field `activity_at` to be a primitive type in the JSON string but got " + data['activity_at']);
        }
        // ensure the json data is a string
        if (data['end_at'] && !(typeof data['end_at'] === 'string' || data['end_at'] instanceof String)) {
            throw new Error("Expected the field `end_at` to be a primitive type in the JSON string but got " + data['end_at']);
        }
        // ensure the json data is a string
        if (data['location'] && !(typeof data['location'] === 'string' || data['location'] instanceof String)) {
            throw new Error("Expected the field `location` to be a primitive type in the JSON string but got " + data['location']);
        }
        // ensure the json data is a string
        if (data['color'] && !(typeof data['color'] === 'string' || data['color'] instanceof String)) {
            throw new Error("Expected the field `color` to be a primitive type in the JSON string but got " + data['color']);
        }
        // ensure the json data is a string
        if (data['text_color'] && !(typeof data['text_color'] === 'string' || data['text_color'] instanceof String)) {
            throw new Error("Expected the field `text_color` to be a primitive type in the JSON string but got " + data['text_color']);
        }
        // ensure the json data is a string
        if (data['is_registration_closed?'] && !(typeof data['is_registration_closed?'] === 'string' || data['is_registration_closed?'] instanceof String)) {
            throw new Error("Expected the field `is_registration_closed?` to be a primitive type in the JSON string but got " + data['is_registration_closed?']);
        }
        // ensure the json data is a string
        if (data['payment_required_to_rsvp'] && !(typeof data['payment_required_to_rsvp'] === 'string' || data['payment_required_to_rsvp'] instanceof String)) {
            throw new Error("Expected the field `payment_required_to_rsvp` to be a primitive type in the JSON string but got " + data['payment_required_to_rsvp']);
        }

        return true;
    }


}



/**
 * @member {String} event_id
 */
EventEntity.prototype['event_id'] = undefined;

/**
 * Title of the event
 * @member {String} title
 */
EventEntity.prototype['title'] = undefined;

/**
 * Type of the event (Campout, Hike, Meeting, etc)
 * @member {String} event_type
 */
EventEntity.prototype['event_type'] = undefined;

/**
 * Start time of the event in 2014-11-20T02:00:00.000-06:00 format
 * @member {String} activity_at
 */
EventEntity.prototype['activity_at'] = undefined;

/**
 * End time of the event in 2014-11-20T02:00:00.000-06:00 format
 * @member {String} end_at
 */
EventEntity.prototype['end_at'] = undefined;

/**
 * Location of the event
 * @member {String} location
 */
EventEntity.prototype['location'] = undefined;

/**
 * Color of the event, as specified by the creator
 * @member {String} color
 */
EventEntity.prototype['color'] = undefined;

/**
 * Color for text that is visible on a background of the color of the event
 * @member {String} text_color
 */
EventEntity.prototype['text_color'] = undefined;

/**
 * Indicates if registration for this event is closed.
 * @member {String} is_registration_closed?
 */
EventEntity.prototype['is_registration_closed?'] = undefined;

/**
 * Indicates if payment is required to RSVP for this event. You cannot RSVP through the API if this is true.
 * @member {String} payment_required_to_rsvp
 */
EventEntity.prototype['payment_required_to_rsvp'] = undefined;






export default EventEntity;

