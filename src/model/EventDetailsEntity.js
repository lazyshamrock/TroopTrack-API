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
 * The EventDetailsEntity model module.
 * @module model/EventDetailsEntity
 * @version 0.0.1
 */
class EventDetailsEntity {
    /**
     * Constructs a new <code>EventDetailsEntity</code>.
     * EventDetailsEntity model
     * @alias module:model/EventDetailsEntity
     */
    constructor() { 
        
        EventDetailsEntity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventDetailsEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventDetailsEntity} obj Optional instance to populate.
     * @return {module:model/EventDetailsEntity} The populated <code>EventDetailsEntity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventDetailsEntity();

            if (data.hasOwnProperty('event_id')) {
                obj['event_id'] = ApiClient.convertToType(data['event_id'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('event_type')) {
                obj['event_type'] = ApiClient.convertToType(data['event_type'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
            if (data.hasOwnProperty('activity_at')) {
                obj['activity_at'] = ApiClient.convertToType(data['activity_at'], 'String');
            }
            if (data.hasOwnProperty('end_at')) {
                obj['end_at'] = ApiClient.convertToType(data['end_at'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('vcal')) {
                obj['vcal'] = ApiClient.convertToType(data['vcal'], 'String');
            }
            if (data.hasOwnProperty('rsvp_deadline')) {
                obj['rsvp_deadline'] = ApiClient.convertToType(data['rsvp_deadline'], 'String');
            }
            if (data.hasOwnProperty('guests_allowed')) {
                obj['guests_allowed'] = ApiClient.convertToType(data['guests_allowed'], 'String');
            }
            if (data.hasOwnProperty('payment_required_to_rsvp')) {
                obj['payment_required_to_rsvp'] = ApiClient.convertToType(data['payment_required_to_rsvp'], 'String');
            }
            if (data.hasOwnProperty('is_registration_closed?')) {
                obj['is_registration_closed?'] = ApiClient.convertToType(data['is_registration_closed?'], 'String');
            }
            if (data.hasOwnProperty('adult_fee')) {
                obj['adult_fee'] = ApiClient.convertToType(data['adult_fee'], 'String');
            }
            if (data.hasOwnProperty('dues')) {
                obj['dues'] = ApiClient.convertToType(data['dues'], 'String');
            }
            if (data.hasOwnProperty('camping_nights')) {
                obj['camping_nights'] = ApiClient.convertToType(data['camping_nights'], 'String');
            }
            if (data.hasOwnProperty('hiking_miles')) {
                obj['hiking_miles'] = ApiClient.convertToType(data['hiking_miles'], 'String');
            }
            if (data.hasOwnProperty('service_hours')) {
                obj['service_hours'] = ApiClient.convertToType(data['service_hours'], 'String');
            }
            if (data.hasOwnProperty('canoeing_miles')) {
                obj['canoeing_miles'] = ApiClient.convertToType(data['canoeing_miles'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EventDetailsEntity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EventDetailsEntity</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['event_type'] && !(typeof data['event_type'] === 'string' || data['event_type'] instanceof String)) {
            throw new Error("Expected the field `event_type` to be a primitive type in the JSON string but got " + data['event_type']);
        }
        // ensure the json data is a string
        if (data['location'] && !(typeof data['location'] === 'string' || data['location'] instanceof String)) {
            throw new Error("Expected the field `location` to be a primitive type in the JSON string but got " + data['location']);
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
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['vcal'] && !(typeof data['vcal'] === 'string' || data['vcal'] instanceof String)) {
            throw new Error("Expected the field `vcal` to be a primitive type in the JSON string but got " + data['vcal']);
        }
        // ensure the json data is a string
        if (data['rsvp_deadline'] && !(typeof data['rsvp_deadline'] === 'string' || data['rsvp_deadline'] instanceof String)) {
            throw new Error("Expected the field `rsvp_deadline` to be a primitive type in the JSON string but got " + data['rsvp_deadline']);
        }
        // ensure the json data is a string
        if (data['guests_allowed'] && !(typeof data['guests_allowed'] === 'string' || data['guests_allowed'] instanceof String)) {
            throw new Error("Expected the field `guests_allowed` to be a primitive type in the JSON string but got " + data['guests_allowed']);
        }
        // ensure the json data is a string
        if (data['payment_required_to_rsvp'] && !(typeof data['payment_required_to_rsvp'] === 'string' || data['payment_required_to_rsvp'] instanceof String)) {
            throw new Error("Expected the field `payment_required_to_rsvp` to be a primitive type in the JSON string but got " + data['payment_required_to_rsvp']);
        }
        // ensure the json data is a string
        if (data['is_registration_closed?'] && !(typeof data['is_registration_closed?'] === 'string' || data['is_registration_closed?'] instanceof String)) {
            throw new Error("Expected the field `is_registration_closed?` to be a primitive type in the JSON string but got " + data['is_registration_closed?']);
        }
        // ensure the json data is a string
        if (data['adult_fee'] && !(typeof data['adult_fee'] === 'string' || data['adult_fee'] instanceof String)) {
            throw new Error("Expected the field `adult_fee` to be a primitive type in the JSON string but got " + data['adult_fee']);
        }
        // ensure the json data is a string
        if (data['dues'] && !(typeof data['dues'] === 'string' || data['dues'] instanceof String)) {
            throw new Error("Expected the field `dues` to be a primitive type in the JSON string but got " + data['dues']);
        }
        // ensure the json data is a string
        if (data['camping_nights'] && !(typeof data['camping_nights'] === 'string' || data['camping_nights'] instanceof String)) {
            throw new Error("Expected the field `camping_nights` to be a primitive type in the JSON string but got " + data['camping_nights']);
        }
        // ensure the json data is a string
        if (data['hiking_miles'] && !(typeof data['hiking_miles'] === 'string' || data['hiking_miles'] instanceof String)) {
            throw new Error("Expected the field `hiking_miles` to be a primitive type in the JSON string but got " + data['hiking_miles']);
        }
        // ensure the json data is a string
        if (data['service_hours'] && !(typeof data['service_hours'] === 'string' || data['service_hours'] instanceof String)) {
            throw new Error("Expected the field `service_hours` to be a primitive type in the JSON string but got " + data['service_hours']);
        }
        // ensure the json data is a string
        if (data['canoeing_miles'] && !(typeof data['canoeing_miles'] === 'string' || data['canoeing_miles'] instanceof String)) {
            throw new Error("Expected the field `canoeing_miles` to be a primitive type in the JSON string but got " + data['canoeing_miles']);
        }

        return true;
    }


}



/**
 * ID of the event record
 * @member {Number} event_id
 */
EventDetailsEntity.prototype['event_id'] = undefined;

/**
 * Title of the event
 * @member {String} title
 */
EventDetailsEntity.prototype['title'] = undefined;

/**
 * Type of the event (Campout, Hike, Meeting, etc)
 * @member {String} event_type
 */
EventDetailsEntity.prototype['event_type'] = undefined;

/**
 * Location
 * @member {String} location
 */
EventDetailsEntity.prototype['location'] = undefined;

/**
 * Start time of the event in 2014-11-20T02:00:00.000-06:00 format
 * @member {String} activity_at
 */
EventDetailsEntity.prototype['activity_at'] = undefined;

/**
 * End time of the event in 2014-11-20T02:00:00.000-06:00 format
 * @member {String} end_at
 */
EventDetailsEntity.prototype['end_at'] = undefined;

/**
 * Description of the event
 * @member {String} description
 */
EventDetailsEntity.prototype['description'] = undefined;

/**
 * VCAL representation of the event
 * @member {String} vcal
 */
EventDetailsEntity.prototype['vcal'] = undefined;

/**
 * Date by which RSVPs must be submitted
 * @member {String} rsvp_deadline
 */
EventDetailsEntity.prototype['rsvp_deadline'] = undefined;

/**
 * Indicates whether guests are allowed
 * @member {String} guests_allowed
 */
EventDetailsEntity.prototype['guests_allowed'] = undefined;

/**
 * Indicates if payment is required to RSVP for this event. You cannot RSVP through the API if this is true.
 * @member {String} payment_required_to_rsvp
 */
EventDetailsEntity.prototype['payment_required_to_rsvp'] = undefined;

/**
 * Indicates if registration for this event is closed.
 * @member {String} is_registration_closed?
 */
EventDetailsEntity.prototype['is_registration_closed?'] = undefined;

/**
 * Event fees required for each adult attending
 * @member {String} adult_fee
 */
EventDetailsEntity.prototype['adult_fee'] = undefined;

/**
 * Event fees required for each youth attending
 * @member {String} dues
 */
EventDetailsEntity.prototype['dues'] = undefined;

/**
 * Number of nights of camping that will occur at this event
 * @member {String} camping_nights
 */
EventDetailsEntity.prototype['camping_nights'] = undefined;

/**
 * Number of hiking miles that will occur at this event
 * @member {String} hiking_miles
 */
EventDetailsEntity.prototype['hiking_miles'] = undefined;

/**
 * Number of service hours per attendee that will occur at this event
 * @member {String} service_hours
 */
EventDetailsEntity.prototype['service_hours'] = undefined;

/**
 * Number of canoeing miles that will occur at this event
 * @member {String} canoeing_miles
 */
EventDetailsEntity.prototype['canoeing_miles'] = undefined;






export default EventDetailsEntity;

