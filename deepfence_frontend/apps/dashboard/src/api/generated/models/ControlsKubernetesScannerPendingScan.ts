/* tslint:disable */
/* eslint-disable */
/**
 * Deepfence ThreatMapper
 * Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: community@deepfence.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ControlsKubernetesScannerPendingScan
 */
export interface ControlsKubernetesScannerPendingScan {
    /**
     * 
     * @type {string}
     * @memberof ControlsKubernetesScannerPendingScan
     */
    account_id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ControlsKubernetesScannerPendingScan
     */
    controls?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof ControlsKubernetesScannerPendingScan
     */
    scan_id?: string;
    /**
     * 
     * @type {string}
     * @memberof ControlsKubernetesScannerPendingScan
     */
    scan_type?: string;
}

/**
 * Check if a given object implements the ControlsKubernetesScannerPendingScan interface.
 */
export function instanceOfControlsKubernetesScannerPendingScan(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ControlsKubernetesScannerPendingScanFromJSON(json: any): ControlsKubernetesScannerPendingScan {
    return ControlsKubernetesScannerPendingScanFromJSONTyped(json, false);
}

export function ControlsKubernetesScannerPendingScanFromJSONTyped(json: any, ignoreDiscriminator: boolean): ControlsKubernetesScannerPendingScan {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'account_id': !exists(json, 'account_id') ? undefined : json['account_id'],
        'controls': !exists(json, 'controls') ? undefined : json['controls'],
        'scan_id': !exists(json, 'scan_id') ? undefined : json['scan_id'],
        'scan_type': !exists(json, 'scan_type') ? undefined : json['scan_type'],
    };
}

export function ControlsKubernetesScannerPendingScanToJSON(value?: ControlsKubernetesScannerPendingScan | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_id': value.account_id,
        'controls': value.controls,
        'scan_id': value.scan_id,
        'scan_type': value.scan_type,
    };
}

